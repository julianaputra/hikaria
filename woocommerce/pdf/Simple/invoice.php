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
                $ticket_number = "HKR-WEB-{$order_id}+#{$order_id}-{$ticket_counter}";
                $qr_text = "{$ticket_number}";
                $qr_url = 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=' . urlencode($qr_text);
                ?>

                <div class="ticket" style="margin-bottom: 30px;">
                    <table style="width:100%; border: none; border-collapse: collapse;">
                        <tr>
                            <!-- Ticket Info -->
                            <td style="width: 74.5%; padding-right: 15px; font-size: 14px;">
                                <div style="border: 1px solid #525252; border-radius: 5px; padding: 30px 15px;">
                                    <span style="display: block; margin-bottom: 2px;"><strong>Ticket Number:</strong> <?php echo esc_html($ticket_number); ?></span>
                                    <span style="display: block; margin-bottom: 2px;"><strong>Name:</strong> <?php echo esc_html($billing_name); ?></span>
                                    <span style="display: block; margin-bottom: 2px;"><strong>Customer:</strong> <?php echo esc_html("{$age} ({$nationality})"); ?></span>
                                    <span style="display: block; margin-bottom: 2px;"><strong>Visit Date:</strong> <?php echo esc_html($visit_date); ?></span>
                                    <span style="display: block; margin-bottom: 2px;"><strong>Estimated Time of Arrival:</strong> <?php echo esc_html($estimated_time); ?></span>
                                </div>
                            </td>
                            <td style="width: 0.5%"></td>

                            <!-- QR Code -->
                            <td style="width: 25%; text-align: center; padding: 0;">
                                <div style="border: 1px solid #525252; border-radius: 5px; padding: 22px 15px;">
                                    <img src="<?php echo esc_url($qr_url); ?>" alt="QR Code" style="width: 90%; height: auto;">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="border-bottom: 1px dashed #ccc; padding-top: 25px; width: 100%;"></div>
                            </td>
                            <td>
                                <div style="border-bottom: 1px dashed #ccc; padding-top: 25px; width: 100%;"></div>
                            </td>
                            <td>
                                <div style="border-bottom: 1px dashed #ccc; padding-top: 25px; width: 100%;"></div>
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