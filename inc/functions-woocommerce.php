<?php
// =======================================
// Woocommerce Custom Themes
// =======================================
function customtheme_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );

    // Optional enhancements
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );
}
add_action( 'after_setup_theme', 'customtheme_add_woocommerce_support' );

// Re-enable default WooCommerce CSS
add_filter('woocommerce_enqueue_styles', '__return_true');


// ======================================
// Hides default quantity selector
add_filter('woocommerce_is_sold_individually', '__return_true');


// redirect directlly to checkout
add_filter('woocommerce_add_to_cart_redirect', 'custom_redirect_to_checkout');
function custom_redirect_to_checkout($url) {
    return wc_get_checkout_url();
}

// // back to booking page from checkout page
// add_filter('woocommerce_return_to_shop_redirect', 'custom_return_to_cart_url');
// function custom_return_to_cart_url() {
//     return home_url('/cultural-storytelling-in-light');
// }

// add_filter('gettext', 'custom_checkout_return_cart_text', 20, 3);
// function custom_checkout_return_cart_text($translated_text, $text, $domain) {
//     if ($translated_text === 'Return to cart' && $domain === 'woocommerce') {
//         return 'Back to Ticket Selection';
//     }
//     return $translated_text;
// }


// Custom form billing on checkout
add_filter('woocommerce_checkout_fields', 'custom_minimal_checkout_fields');
function custom_minimal_checkout_fields($fields) {
    // Define allowed fields
    $allowed = [
        'billing_first_name',
        'billing_phone',
        'billing_email',
    ];

    // Remove all billing fields except allowed
    foreach ($fields['billing'] as $key => $field) {
        if (!in_array($key, $allowed)) {
            unset($fields['billing'][$key]);
        }
    }

    // Full Name
    $fields['billing']['billing_first_name']['label'] = 'Full Name';
    $fields['billing']['billing_first_name']['placeholder'] = 'Full Name';
    $fields['billing']['billing_first_name']['priority'] = 10;
    $fields['billing']['billing_first_name']['class'] = ['form-row-wide'];

    // Phone Number (intl-tel-input handles country code)
    $fields['billing']['billing_phone']['label'] = 'Phone Number';
    $fields['billing']['billing_phone']['placeholder'] = 'e.g. 85976448533';
    $fields['billing']['billing_phone']['required'] = true;
    $fields['billing']['billing_phone']['priority'] = 20;
    $fields['billing']['billing_phone']['class'] = ['form-row-wide'];

    // Email Address
    $fields['billing']['billing_email']['label'] = 'Email Address';
    $fields['billing']['billing_email']['placeholder'] = 'Email Address';
    $fields['billing']['billing_email']['priority'] = 30;
    $fields['billing']['billing_email']['class'] = ['form-row-wide'];

    // Nationality
    $fields['billing']['billing_nationality'] = [
        'type'        => 'text',
        'label'       => 'Nationality',
        'placeholder' => 'e.g. Indonesian',
        'required'    => true,
        'class'       => ['form-row-wide'],
        'priority'    => 40,
    ];

    return $fields;
}


// add nationality in billing info
add_action('woocommerce_checkout_update_order_meta', 'save_custom_nationality_field');
function save_custom_nationality_field($order_id) {
    if (!empty($_POST['billing_nationality'])) {
        update_post_meta($order_id, '_billing_nationality', sanitize_text_field($_POST['billing_nationality']));
    }
}

// Show it in the admin order details
add_action('woocommerce_admin_order_data_after_billing_address', 'display_nationality_admin_order', 10, 1);
function display_nationality_admin_order($order) {
    $nationality = get_post_meta($order->get_id(), '_billing_nationality', true);
    if ($nationality) {
        echo '<p><strong>Nationality:</strong> ' . esc_html($nationality) . '</p>';
    }
}


// ================================================
// remove coupon from default position
remove_action('woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10);


// redirect cart page to 404
add_action('template_redirect', 'redirect_cart_to_404');

function redirect_cart_to_404() {
    if ( is_cart() ) {
        global $wp_query;
        $wp_query->set_404();
        status_header(404);
        nocache_headers();
        include( get_query_template('404') );
        exit;
    }
}

// change order id format
// Add custom order number format
add_filter('woocommerce_order_number', 'custom_woocommerce_order_number', 10, 2);
function custom_woocommerce_order_number($order_number, $order) {
    $prefix = 'HKR-WEB-';
    return $prefix . $order->get_id();
}


// only use the newest cart, the old will replace
add_filter('woocommerce_add_to_cart_validation', 'force_single_cart_item_always', 99, 3);
function force_single_cart_item_always($passed, $product_id, $quantity) {
    // Always empty the cart before adding any new item (even same variation)
    WC()->cart->empty_cart();
    return $passed;
}


// custom API for email
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/send-email/', array(
        'methods' => 'POST',
        'callback' => 'custom_send_email_endpoint',
        'permission_callback' => '__return_true',
    ));
});

function custom_send_email_endpoint($request) {
    $params = $request->get_json_params();

    $order_id = $params['order_id'] ?? null;

    if (!$order_id) {
        return new WP_REST_Response(['message' => 'Missing order_id'], 400);
    }

    $order = wc_get_order($order_id);
    if (!$order) {
        return new WP_REST_Response(['message' => 'Order not found'], 404);
    }

    // Contoh email
    $to = $order->get_billing_email();
    $subject = 'Pesanan Anda Diproses dari API!';
    $body = 'Halo ' . $order->get_billing_first_name() . ', pesanan Anda sedang kami proses.';
    $headers = array('Content-Type: text/html; charset=UTF-8');

    wp_mail($to, $subject, $body, $headers);

    return new WP_REST_Response(['message' => 'Email sent successfully.'], 200);
}

// reset checkout field after place order
add_filter('woocommerce_checkout_get_value', 'disable_checkout_field_prefill', 10, 2);
function disable_checkout_field_prefill($value, $input) {
    return '';
}

// remove default payment method in email
add_filter( 'woocommerce_get_order_item_totals', 'customize_payment_info_everywhere', 20, 3 );
function customize_payment_info_everywhere( $totals, $order, $tax_display ) {
    // Remove default Payment Method
    if ( isset( $totals['payment_method'] ) ) {
        unset( $totals['payment_method'] );
    }

    // Add custom Midtrans Payment Type
    $payment_type = get_midtrans_payment_type( $order->get_id() );

    if ( $payment_type ) {
        $totals['midtrans_payment_type'] = array(
            'label' => __( 'Payment Method:', 'woocommerce' ),
            'value' => ucfirst( str_replace( '_', ' ', $payment_type ) ),
        );
    }

    return $totals;
}