<div class="invoice-header" style="text-align: center; margin-bottom: 40px;">
    <h1 class="invoice-title" style="font-size: 24px; font-weight: bold;">Hikaria Admission Tickets</h1>
</div>

<?php
$billing_name = trim($order->get_billing_first_name() . ' ' . $order->get_billing_last_name());
// $visit_date = $order->get_meta('visit_date') ?: $order->get_date_created()->date('Y-m-d');

$ticket_counter = 1;
$order_id = $order->get_id();

foreach ($order->get_items() as $item) {
    $visit_date = $item->get_meta('Date of Visit') ?: $order->get_date_created()->date('Y-m-d');
    $booking = $item->get_meta('booking_data');

    if ($booking) {
        $customer_data = json_decode($booking, true);

        foreach ($customer_data as $customer) {
            $age = ucfirst($customer['age']);
            $nationality = ucfirst($customer['nationality']);
            $quantity = (int)$customer['quantity'];

            for ($i = 1; $i <= $quantity; $i++) {
                $ticket_number = "#{$order_id}-{$ticket_counter}";
                $qr_text = "{$ticket_number} | {$billing_name} | {$visit_date}";
                $qr_url = 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=' . urlencode($qr_text);
                ?>

                <div class="ticket" style="margin-bottom: 30px;">
                    <table style="width:100%; border:1px solid #ccc; border-collapse: collapse;">
                        <tr>
                            <!-- Logo -->
                            <td style="width: 25%; background-color: #000; text-align: center; padding: 10px; vertical-align: middle;">
                                <img src="http://woo-ticket.test/wp-content/uploads/2025/06/hikaria.png" alt="Hikaria Logo" style="max-width: 80px;">
                            </td>

                            <!-- Ticket Info -->
                            <td style="width: 50%; padding: 10px 10px 10px 30px; font-size: 14px; vertical-align: middle;">
                                <strong>Ticket Number:</strong> <?php echo esc_html($ticket_number); ?><br>
                                <strong>Name:</strong> <?php echo esc_html($billing_name); ?><br>
                                <strong>Customer:</strong> <?php echo esc_html("{$age} ({$nationality})"); ?><br>
                                <strong>Visit Date:</strong> <?php echo esc_html($visit_date); ?>
                            </td>

                            <!-- QR Code -->
                            <td style="width: 25%; text-align: right; padding: 10px;">
                                <img src="<?php echo esc_url($qr_url); ?>" alt="QR Code" style="max-width: 100px;">
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