<div class="invoice-header">
    <table style="width:100%; border: none; border-collapse: collapse; margin-bottom: 30px;">
        <tr>
            <td class="invoice-header__img-holder">
                <img src="https://dev.hikaria.id/wp-content/uploads/2025/07/ticket-img.jpg" alt="Hikaria" style="border-radius: 5px;">
            </td>
            <td class="invoice-header__holder">
                <img src="https://dev.hikaria.id/wp-content/uploads/2025/06/default-logo.svg" alt="Hikaria Logo" style="max-width: 80px; margin-bottom: 10px;">
                <p class="invoice-header__web">www.hikaria.id</p>
                <h1 class="invoice-header__heading">THE Cultural <br><span>Storytelling</span> <br>in BETWEEN Light</h1>
                <p class="invoice-header__desc">GREEN KUBU RESTAURANT</p>
            </td>
        </tr>
    </table>
</div>

<?php
$billing_name = trim($order->get_billing_first_name() . ' ' . $order->get_billing_last_name());
// $visit_date = $order->get_meta('visit_date') ?: $order->get_date_created()->date('Y-m-d');

$ticket_counter = 1;
$order_id = $order->get_id();

foreach ($order->get_items() as $item) {
    $visit_date = $item->get_meta('Date of Visit') ?: $order->get_date_created()->date('Y-m-d');
    $booking = $item->get_meta('booking_data');
    $estimated_time = $item->get_meta('estimated_time');

    if ($booking) {
        $customer_data = json_decode($booking, true);

        foreach ($customer_data as $customer) {
            $age = ucfirst($customer['age']);
            $nationality = ucfirst($customer['nationality']);
            $quantity = (int)$customer['quantity'];

            for ($i = 1; $i <= $quantity; $i++) {
                $ticket_number = "HKR-WEB-{$order_id}";
                $qr_text = "{$order_id}-{$ticket_counter}";
                $qr_url = 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=' . urlencode($qr_text);

                // Zigzag condition
                $is_left_qr = $ticket_counter % 2 !== 0;
                ?>

                <div class="ticket" style="margin-bottom: 30px;">
                    <table style="width:100%; border: none; border-collapse: collapse;">
                        <tr>
                            <?php if ($is_left_qr): ?>
                                <!-- QR Code LEFT -->
                                <td style="width: 26%; text-align: center; padding: 0;">
                                    <div style="border: 1px solid #727272ff; border-radius: 5px; padding: 12px;">
                                        <img src="<?php echo esc_url($qr_url); ?>" alt="QR Code" style="width: 99%; height: auto;">
                                        <!-- <p style="text-align: center; margin-top: 5px; margin-bottom: 0; font-weight: 700;"><?php echo $qr_text;?></p> -->
                                    </div>
                                </td>
                                <td style="padding: 0;"></td>
                                <!-- Ticket Info -->
                                <td style="width: 75%; padding-left: 15px; font-size: 14px;">
                                    <div style="border: 1px solid #727272ff; border-radius: 5px; padding: 20px 15px;">
                                        <table style="width: 100%;">
                                            <tr>
                                                <td><strong>Booking ID:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html($ticket_number); ?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Ticket Number:</strong></td>
                                                <td style="text-align: right;"><?php echo $qr_text;?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Name:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html($billing_name); ?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Customer:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html("{$age} ({$nationality})"); ?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Visit Date:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html($visit_date); ?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Estimated Time of Arrival:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html($estimated_time); ?></td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            <?php else: ?>
                                <!-- Ticket Info -->
                                <td style="width: 75%; padding-right: 15px; font-size: 14px;">
                                    <div style="border: 1px solid #727272ff; border-radius: 5px; padding: 20px 15px;">
                                        <table style="width: 100%;">
                                            <tr>
                                                <td><strong>Booking ID:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html($ticket_number); ?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Ticket Number:</strong></td>
                                                <td style="text-align: right;"><?php echo $qr_text;?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Name:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html($billing_name); ?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Customer:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html("{$age} ({$nationality})"); ?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Visit Date:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html($visit_date); ?></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Estimated Time of Arrival:</strong></td>
                                                <td style="text-align: right;"><?php echo esc_html($estimated_time); ?></td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                                <td style="padding: 0;"></td>
                                <!-- QR Code RIGHT -->
                                <td style="width: 26%; text-align: center; padding: 0;">
                                    <div style="border: 1px solid #727272ff; border-radius: 5px; padding: 12px;">
                                        <img src="<?php echo esc_url($qr_url); ?>" alt="QR Code" style="width: 99%; height: auto;">
                                        <!-- <p style="text-align: center; margin-top: 5px; margin-bottom: 0; font-weight: 700;"><?php echo $qr_text;?></p> -->
                                    </div>
                                </td>
                            <?php endif; ?>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <div style="border-bottom: 2px dashed #727272ff; padding: 5px 20px 20px 20px; width: 94%;"></div>
                            </td>
                        </tr>
                    </table>
                </div>

                <?php
                $ticket_counter++;
            }

        }
    }
}
?>