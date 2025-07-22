<?php
$customer_name = $data['customer']['name'] ?? 'Customer';
$booking_id = $data['order']['booking_id'] ?? '-';
$booking_date = $data['order']['booking_date'] ?? '-';
$visit_date = $data['order']['visit_date'] ?? '-';
$time_arrival = $data['order']['time_arrival'] ?? '-';
$tickets = $data['order']['tickets'] ?? [];
$subtotal = number_format($data['order']['subtotal'] ?? 0, 0, '.', ',');
$total = number_format($data['order']['total'] ?? 0, 0, '.', ',');
?>

<html>
<body style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
    <h2>Thank You for Your Order, <?= esc_html($customer_name) ?>!</h2>
    <p>Your order has been successfully received. Below are your order details:</p>

    <h3>Booking Information</h3>
    <ul>
        <li><strong>Booking ID:</strong> <?= esc_html($booking_id) ?></li>
        <li><strong>Booking Date:</strong> <?= esc_html($booking_date) ?></li>
        <li><strong>Visit Date:</strong> <?= esc_html($visit_date) ?></li>
        <li><strong>Time of Arrival:</strong> <?= esc_html($time_arrival) ?></li>
    </ul>

    <h3>Ticket Details</h3>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
        <thead>
            <tr style="background-color: #f0f0f0;">
                <th>Ticket Type</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($tickets as $ticket): ?>
                <tr>
                    <td><?= esc_html($ticket['name']) ?></td>
                    <td><?= esc_html($ticket['quantity']) ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <h3>Payment Summary</h3>
    <ul>
        <li><strong>Subtotal:</strong> Rp <?= $subtotal ?></li>
        <li><strong>Total:</strong> Rp <?= $total ?></li>
    </ul>

    <p>If you have any questions, feel free to reply to this email. We look forward to seeing you!</p>

    <p>Best regards,<br>Hikaria</p>
</body>
</html>
