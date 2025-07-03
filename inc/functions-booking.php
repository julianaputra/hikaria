<?php
// 1. Booking Form Display on Product Page
add_action('woocommerce_before_add_to_cart_button', 'custom_booking_form_fields');
function custom_booking_form_fields() {
    ?>
    <div id="booking-form" class="booking-form">
        <div class="booking-form__date">
            <label>Date of Visit</label>
            <div class="input-group">
                <input type="date" name="visit_date" class="form-control" placeholder="Select Date" required>
                <span class="input-group-text">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/calendar.svg" class="form-control__icon">
                </span>
            </div>
        </div>
        <?php
        $ticket_groups = [
            'Domestic' => [
                'Adult_Domestic' => ['label' => 'Adult Domestic', 'price' => get_field('price_adult_domestic') ?: 0],
                'Child_Domestic' => ['label' => 'Child Domestic <span class="ticket-sub">| 3 - 12 Years old</span>', 'price' => get_field('price_child_domestic') ?: 0],
            ],
            'Foreigner' => [
                'Adult_Foreigner' => ['label' => 'Adult Foreigner', 'price' => get_field('price_adult_foreigner') ?: 0],
                'Child_Foreigner' => ['label' => 'Child Foreigner <span class="ticket-sub">| 3 - 12 Years old</span>', 'price' => get_field('price_child_foreigner') ?: 0],
            ]
        ];
        $flat_ticket_prices = [];
        foreach ($ticket_groups as $group) {
            foreach ($group as $key => $info) {
                $flat_ticket_prices[$key] = $info['price'];
            }
        }
        ?>
        <div class="ticket-options">
            <?php foreach ($ticket_groups as $group_label => $tickets): ?>
                <div class="ticket-group">
                    <div class="ticket-group__title"><?php echo strtoupper($group_label); ?> TICKETS OPTION</div>
                    <?php foreach ($tickets as $key => $info): ?>
                        <div class="ticket-row" data-key="<?php echo esc_attr($key); ?>">
                            <div class="ticket-label"><?php echo $info['label']; ?></div>
                            <div class="ticket-price">Rp<?php echo number_format($info['price'], 0, ',', '.'); ?></div>
                            <div class="ticket-controls">
                                <button type="button" class="minus">−</button>
                                <input type="number" name="customer[<?php echo esc_attr($key); ?>]" value="0" min="0" readonly>
                                <button type="button" class="plus">+</button>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="ticket-total">
            <input type="hidden" name="booking_data" id="booking_data">
            <span class="ticket-total__title">Total Price</span>
            <span class="dynamic-price">Rp0</span>
            <button type="submit" name="add-to-cart" value="<?php echo get_the_ID(); ?>" class="themeBtn">
                PLACE ORDER
            </button>
        </div>   
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function () {
        const ticketPrices = <?php echo json_encode($flat_ticket_prices); ?>;

        function updateTotalAndData() {
            let total = 0;
            const booking = [];

            document.querySelectorAll('.ticket-row').forEach(row => {
                const key = row.dataset.key;
                const input = row.querySelector('input');
                const quantity = parseInt(input.value);
                if (quantity > 0) {
                    total += ticketPrices[key] * quantity;
                    const parts = key.split('_');
                    booking.push({
                        age: parts[0],
                        nationality: parts[1],
                        quantity: quantity
                    });
                }
            });

            document.querySelector('.dynamic-price').textContent = `Rp${total.toLocaleString('id-ID')}`;
            document.querySelector('#booking_data').value = JSON.stringify(booking);
        }

        document.querySelectorAll('.ticket-row').forEach(row => {
            const minus = row.querySelector('.minus');
            const plus = row.querySelector('.plus');
            const input = row.querySelector('input');

            minus.addEventListener('click', () => {
                if (parseInt(input.value) > 0) {
                    input.value = parseInt(input.value) - 1;
                    updateTotalAndData();
                }
            });

            plus.addEventListener('click', () => {
                input.value = parseInt(input.value) + 1;
                updateTotalAndData();
            });
        });

        updateTotalAndData();

        // ✅ Datepicker trigger from calendar icon
        const dateTrigger = document.querySelector('.input-group-text');
        const dateInput = document.querySelector('input[name="visit_date"]');

        if (dateTrigger && dateInput) {
            dateTrigger.addEventListener('click', function () {
                if (typeof dateInput.showPicker === 'function') {
                    dateInput.showPicker();
                } else {
                    dateInput.focus();
                }
            });
        }
    });
    </script>
    <?php
}

// 2. Save to Cart Item
add_filter('woocommerce_add_cart_item_data', function($cart_item_data, $product_id, $variation_id) {
    if (isset($_POST['booking_data'])) {
        $cart_item_data['booking_data'] = json_decode(stripslashes($_POST['booking_data']), true);
    }
    if (isset($_POST['visit_date'])) {
        $cart_item_data['visit_date'] = sanitize_text_field($_POST['visit_date']);
    }
    return $cart_item_data;
}, 10, 3);

// 3. Show in Cart
add_filter('woocommerce_get_item_data', function($item_data, $cart_item) {
    if (!empty($cart_item['visit_date'])) {
        $item_data[] = [
            'key' => 'Date of Visit',
            'value' => $cart_item['visit_date']
        ];
    }
    if (!empty($cart_item['booking_data'])) {
        foreach ($cart_item['booking_data'] as $index => $customer) {
            $item_data[] = [
                'key' => "Customer " . ($index + 1),
                'value' => "{$customer['quantity']} × {$customer['age']} ({$customer['nationality']})"
            ];
        }
    }
    return $item_data;
}, 10, 2);

// 4. Adjust Product Price in Cart
add_action('woocommerce_before_calculate_totals', function($cart) {
    if (is_admin() && !defined('DOING_AJAX')) return;

    foreach ($cart->get_cart() as $cart_item_key => $cart_item) {
        if (!empty($cart_item['booking_data'])) {
            $total = 0;
            $prices = [
                "Child_Domestic" => get_field('price_child_domestic', $cart_item['product_id']) ?: 0,
                "Adult_Domestic" => get_field('price_adult_domestic', $cart_item['product_id']) ?: 0,
                "Child_Foreigner" => get_field('price_child_foreigner', $cart_item['product_id']) ?: 0,
                "Adult_Foreigner" => get_field('price_adult_foreigner', $cart_item['product_id']) ?: 0
            ];

            foreach ($cart_item['booking_data'] as $customer) {
                $key = "{$customer['age']}_{$customer['nationality']}";
                $total += ($prices[$key] ?? 0) * $customer['quantity'];
            }

            $product = clone $cart_item['data'];
            $product->set_price($total);
            $cart->cart_contents[$cart_item_key]['data'] = $product;
        }
    }
});

// ✅ NEW: Save visit_date to order meta
add_action('woocommerce_checkout_create_order', function($order, $data) {
    foreach (WC()->cart->get_cart() as $cart_item) {
        if (!empty($cart_item['visit_date'])) {
            $order->update_meta_data('visit_date', sanitize_text_field($cart_item['visit_date']));
            break;
        }
    }
}, 10, 2);

// 5. Add to Order Item Meta
add_action('woocommerce_checkout_create_order_line_item', function($item, $cart_item_key, $values, $order) {
    if (!empty($values['visit_date'])) {
        $item->add_meta_data('Date of Visit', $values['visit_date']);
        $order->update_meta_data('visit_date', $values['visit_date']);
    }
    if (!empty($values['booking_data'])) {
        foreach ($values['booking_data'] as $index => $customer) {
            $item->add_meta_data("Customer " . ($index + 1), "{$customer['quantity']} × {$customer['age']} ({$customer['nationality']})");
        }
        $item->add_meta_data('booking_data', json_encode($values['booking_data']));
    }
}, 10, 4);

// 6. Hide Internal Meta on Frontend
add_filter('woocommerce_order_item_get_formatted_meta_data', function($formatted_meta, $item) {
    foreach ($formatted_meta as $key => $meta) {
        if ($meta->key === 'booking_data') {
            unset($formatted_meta[$key]);
        }
        if ($meta->key === 'visit_date') {
            $formatted_meta[$key]->display_key = 'Date of Visit';
        }
    }
    return $formatted_meta;
}, 10, 2);



// 7. Send Order Data to Google Sheets
add_action('woocommerce_order_status_completed', 'send_order_to_google_sheet', 10, 1);
function send_order_to_google_sheet($order_id) {
    $order = wc_get_order($order_id);
    $booking_data_raw = [];

    // Counters
    $adult_domestic = 0;
    $adult_foreigner = 0;
    $child_domestic = 0;
    $child_foreigner = 0;
    $total_pax = 0;

    foreach ($order->get_items() as $item) {
        foreach ($item->get_meta_data() as $meta) {
            if (strpos(strtolower($meta->key), 'customer') !== false) {
                $booking_data_raw[] = $meta->value;

                if (preg_match('/(\d+)\s×\s(\w+)\s\((\w+)\)/', $meta->value, $matches)) {
                    $qty = (int)$matches[1];
                    $age = strtolower($matches[2]);
                    $nationality = strtolower($matches[3]);

                    $total_pax += $qty;

                    if ($age === 'adult' && $nationality === 'domestic') $adult_domestic += $qty;
                    if ($age === 'adult' && $nationality === 'foreigner') $adult_foreigner += $qty;
                    if ($age === 'child' && $nationality === 'domestic') $child_domestic += $qty;
                    if ($age === 'child' && $nationality === 'foreigner') $child_foreigner += $qty;
                }
            }
        }
    }

    // Ticket numbers
    $ticket_numbers = [];
    for ($i = 1; $i <= $total_pax; $i++) {
        $ticket_numbers[] = "{$order_id}-{$i}";
    }

    // Get coupon/referral
    $referral_code = '';
    foreach ($order->get_items('coupon') as $coupon) {
        $referral_code = $coupon->get_name();
        break;
    }

    $visit_date     = $order->get_meta('visit_date');
    $discount_total = $order->get_discount_total();
    $total_price    = $order->get_subtotal(); // before discount
    $net_price      = $order->get_total();    // after discount

    // Get real Midtrans payment method via API
    $payment_method = $order->get_payment_method_title(); // fallback
    $midtrans_payment_type = get_midtrans_payment_type($order_id);
    if ($midtrans_payment_type) {
        $payment_method = ucwords(str_replace('_', ' ', $midtrans_payment_type)); // e.g., credit_card → Credit Card
        $order->update_meta_data('payment_type', $midtrans_payment_type);
        $order->save();
    }

    // Prepare data
    $data = [
        'order_id'          => $order_id,
        'ticket_numbers'    => implode(", ", $ticket_numbers),
        'customer_name'     => $order->get_billing_first_name() . ' ' . $order->get_billing_last_name(),
        'email'             => $order->get_billing_email(),
        'phone'             => $order->get_billing_phone(),
        'visit_date'        => $visit_date,
        'payment_status'    => $order->get_status(),
        'booking_data'      => implode("\n", $booking_data_raw),
        'no_of_pax'         => $total_pax,
        'adult_domestic'    => $adult_domestic,
        'adult_foreigner'   => $adult_foreigner,
        'child_domestic'    => $child_domestic,
        'child_foreigner'   => $child_foreigner,
        'referral_code'     => $referral_code,
        'payment_method'    => $payment_method,
        'discount'          => $discount_total,
        'total_price'       => $total_price,
        'net_price'         => $net_price,
    ];

    $url = 'https://script.google.com/macros/s/AKfycbxMfl0x1bMmI1zPDbCCxM7shm1fwW-bG5rPVT2SQVokPsFU88DCzfZEiGkj4cnO3rFv/exec';

    wp_remote_post($url, [
        'method'      => 'POST',
        'body'        => json_encode($data),
        'headers'     => ['Content-Type' => 'application/json'],
        'data_format' => 'body',
    ]);
}

// Helper: Query Midtrans for actual payment_type
function get_midtrans_payment_type($order_id) {
    $server_key = 'SB-Mid-server-uv1lWe_HsJoeBu5R4EnFTjOR'; // Replace with your real Server Key
    $is_sandbox = true; // false in production

    $url = $is_sandbox
        ? "https://api.sandbox.midtrans.com/v2/{$order_id}/status"
        : "https://api.midtrans.com/v2/{$order_id}/status";

    $response = wp_remote_get($url, [
        'headers' => [
            'Authorization' => 'Basic ' . base64_encode($server_key . ':')
        ]
    ]);

    if (!is_wp_error($response)) {
        $body = json_decode(wp_remote_retrieve_body($response), true);
        return $body['payment_type'] ?? null;
    }

    return null;
}


