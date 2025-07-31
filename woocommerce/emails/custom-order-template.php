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
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td id="template_header_image">
                    <p style="margin-top:0; background: linear-gradient(90.01deg, #14294F 0.01%, #060A14 90.89%); padding: 15px 35px;"><img src="https://dev.hikaria.id/wp-content/uploads/2025/07/Group.png" alt="Logo Hikaria" style="width: 120px;"/></p>
                </td>
            </tr>
        </table>
        <h1 style="font-size: 32px; letter-spacing: -1px; line-height: 120%; margin: 0; color: #1e1e1e; background-color: inherit; text-align: left; font-weight: 300; text-transform: uppercase; margin-top: 30px;">Thank You for Your Order!</h1>
        <p style="margin-bottom: 0;">Hi <?= esc_html($customer_name) ?>,</p>
        <p style="margin-top: 0;">Your order has been successfully received. Below are your order details:</p>

        <div style="margin-bottom: 24px; margin-top: 40px; background-color: #F4F4F4; padding: 20px;">
            <h2 style="color: #1e1e1e; display: block; font-size: 20px; font-weight: bold; line-height: 160%; text-align: left; text-transform: uppercase; margin-top: 0;">Booking Information</h2>
            <ul style="padding-left: 0; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
                <li style="list-style: none; margin-bottom: 5px;"><strong>Booking ID:</strong> <?= esc_html($booking_id) ?></li>
                <li style="list-style: none; margin-bottom: 5px;"><strong>Booking Date:</strong> <?= esc_html($booking_date) ?></li>
                <li style="list-style: none; margin-bottom: 5px;"><strong>Visit Date:</strong> <?= esc_html($visit_date) ?></li>
                <li style="list-style: none; margin-bottom: 5px;"><strong>Time of Arrival:</strong> <?= esc_html($time_arrival) ?></li>
            </ul>

            <h2 style="color: #1e1e1e; display: block; font-size: 20px; font-weight: bold; line-height: 160%; text-align: left; text-transform: uppercase; margin-top: 40px;">Ticket Details</h2>
            <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; margin-bottom: 30px;">
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

            <div style="border-bottom: 1px solid #ddd;"></div>

            <h2 style="color: #1e1e1e; display: block; font-size: 20px; font-weight: bold; line-height: 160%; text-align: left; text-transform: uppercase; margin-top: 40px;">Payment Summary</h2>
            <ul style="padding-left: 0;">
                <li style="list-style: none; margin-bottom: 5px;"><strong>Subtotal:</strong> Rp <?= $subtotal ?></li>
                <li style="list-style: none; margin-bottom: 5px;"><strong>Total:</strong> Rp <?= $total ?></li>
            </ul>
        </div>

        <p>If you have any questions, feel free to reply to this email. We look forward to seeing you!</p>

        <p>Best regards,<br>Hikaria</p>
    </body>
</html>
