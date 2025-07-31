<?php
$customer_name = $data['customer']['name'] ?? 'Customer';
$customer_phone = $data['customer']['phone'] ?? 'Customer Phone';
$customer_nationality = $data['customer']['nationality'] ?? 'Customer Nationality';
$booking_id = $data['order']['booking_id'] ?? '-';
$booking_date = $data['order']['booking_date'] ?? '-';
$visit_date = $data['order']['visit_date'] ?? '-';
$time_arrival = $data['order']['time_arrival'] ?? '-';
$tickets = $data['order']['tickets'] ?? [];
$subtotal = number_format($data['order']['subtotal'] ?? 0, 0, '.', ',');
$total = number_format($data['order']['total'] ?? 0, 0, '.', ',');
?>

<html>

<body style="font-family: Arial, sans-serif; color: #333;">
    <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_-8663709442295350112inner_wrapper" style="background-color:#fff;border-radius:8px" bgcolor="#fff">
        <tbody>
            <tr>
                <td align="center" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td id="m_-8663709442295350112template_header_image" style="padding:32px 32px 0">
                                    <p style="margin-bottom:0;text-align:left;margin-top:0;background:linear-gradient(90.01deg,#14294f 0.01%,#060a14 90.89%);padding:15px 35px" align="left" bgcolor="linear-gradient(90.01deg,"><img src="https://ci3.googleusercontent.com/meips/ADKq_Nb9dZOWj19dc33UYj10SddvnFmJuwDtbO_ueT7gWqppBn-piimdn4NtjwXMdLk6Q5j1ObLubJO3IQ6vInRGmx9-F56QV09ZogkI1D05cZdhJg=s0-d-e1-ft#https://dev.hikaria.id/wp-content/uploads/2025/07/Group.png" alt="Hikaria" style="border:none;display:inline-block;font-size:14px;font-weight:bold;height:auto;outline:none;text-decoration:none;text-transform:capitalize;vertical-align:middle;margin-right:24px;max-width:100%;width:120px" border="0" width="120" class="CToWUd" data-bit="iit"></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="m_-8663709442295350112template_container" style="background-color:#fff;border:0;border-radius:3px" bgcolor="#fff">
                        <tbody>
                            <tr>
                                <td align="center" valign="top">

                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="m_-8663709442295350112template_header" style="background-color:#fff;color:#111;border-bottom:0;font-weight:bold;line-height:100%;vertical-align:middle;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;border-radius:3px 3px 0 0" bgcolor="#fff">
                                        <tbody>
                                            <tr>
                                                <td id="m_-8663709442295350112header_wrapper" style="padding:20px 32px 0;display:block">
                                                    <h1 style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:32px;letter-spacing:-1px;line-height:120%;margin:0;color:#111;background-color:inherit;text-align:left;font-weight:300;text-transform:uppercase" bgcolor="inherit">Good things are heading your way!</h1>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top">

                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="m_-8663709442295350112template_body">
                                        <tbody>
                                            <tr>
                                                <td valign="top" id="m_-8663709442295350112body_content" style="background-color:#fff" bgcolor="#fff">

                                                    <table border="0" cellpadding="20" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top" id="m_-8663709442295350112body_content_inner_cell" style="padding:20px 32px 32px">
                                                                    <div id="m_-8663709442295350112body_content_inner" style="color:#414141;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:16px;line-height:150%;text-align:left" align="left">

                                                                        <div style="padding-bottom:24px">
                                                                            <p style="margin:0 0 16px">
                                                                                Hi <?= esc_html($customer_name) ?>,<br><span>Your Payment Status is <strong>Completed</strong></span></p>
                                                                            <p style="margin:0 0 16px">We’ve successfully processed your order, and it’s on its way to you.</p>
                                                                            <p style="margin:0 0 16px">Here’s a reminder of what you’ve ordered:</p>
                                                                        </div>

                                                                        <h2 class="m_-8663709442295350112email-order-detail-heading" style="color:#111;display:block;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:20px;font-weight:bold;line-height:160%;margin:0 0 18px;text-align:left;text-transform:uppercase">
                                                                            Order summary<br><span style="color:#787c82;display:block;font-size:14px;font-weight:normal">Order <?= esc_html($booking_id) ?> (<?= esc_html($booking_date) ?>)</span>
                                                                        </h2>

                                                                        <div style="margin-bottom:24px;background-color:#f4f4f4;padding:25px" bgcolor="#F4F4F4">
                                                                            <table class="m_-8663709442295350112email-order-details" cellspacing="0" cellpadding="6" border="0" style="color:#414141;border:0;vertical-align:middle;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;width:100%" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="color:#414141;border:0;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;text-align:left;padding:8px 12px;padding-left:0;border-bottom:1px solid rgba(0,0,0,.2);padding-bottom:24px;vertical-align:middle;word-wrap:break-word" align="left">
                                                                                            <table style="color:#111;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="vertical-align:middle;padding-left:0;border-bottom:1px solid rgba(0,0,0,.2);padding-bottom:24px;border:0;padding:0"><img width="48" height="27" src="https://ci3.googleusercontent.com/meips/ADKq_NZGnHqRRfh0DTHe71Lo9tPXcOH7gk9Crz7DlwXTdFqL3K45ZZtQCob_kXQrwSzK1vfJz_IuaqgnfdE2wyIGvS-kU5DHds9EwxxwECvavRX90BjmUtORz_9Lb_iviy5qD1IS7PkKV5K5pXRGMDQP305wPuaHLIg7YTr7WNjMzBzhl9DTPJwyz8_zIpbUHhHe_Q=s0-d-e1-ft#https://i0.wp.com/dev.hikaria.id/wp-content/uploads/2025/06/f426f56505bc2b48be0d49d78b8ac960e3305869.png?fit=48%2C27&amp;ssl=1" alt="Cultural Storytelling in Light" style="border:none;display:inline-block;font-size:14px;font-weight:bold;height:auto;outline:none;text-decoration:none;text-transform:capitalize;vertical-align:middle;margin-right:24px;max-width:100%" border="0" class="CToWUd" data-bit="iit"></td>
                                                                                                        <td style="vertical-align:middle;padding-right:0;border-bottom:1px solid rgba(0,0,0,.2);padding-bottom:24px;border:0;padding:0">
                                                                                                            Cultural Storytelling in Light<div class="m_-8663709442295350112email-order-item-meta" style="color:#787c82;font-size:14px;line-height:140%">
                                                                                                                <span>Date of Visit:</span> <?= esc_html($visit_date) ?><br><span>Estimated Time of Arrival:</span> <?= esc_html($time_arrival) ?>
                                                                                                                <?php $customer_counter = 1; // Inisialisasi counter di luar loop 
                                                                                                                ?>
                                                                                                                <?php foreach ($tickets as $ticket): ?>
                                                                                                                    <br>
                                                                                                                    <span>Customer <?= $customer_counter++ ?>:</span> <?= esc_html($ticket['quantity']) ?> × <?= esc_html($ticket['name']) ?>
                                                                                                                <?php endforeach; ?>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td style="color:#414141;border:0;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;text-align:right;padding:8px 12px;border-bottom:1px solid rgba(0,0,0,.2);padding-bottom:24px;vertical-align:middle" align="right"></td>
                                                                                        <td style="color:#414141;border:0;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;text-align:right;padding:8px 12px;padding-right:0;border-bottom:1px solid rgba(0,0,0,.2);padding-bottom:24px;vertical-align:middle" align="right">
                                                                                            <span><span>Rp</span>
                                                                                                <?= $subtotal ?>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>

                                                                                </tbody>
                                                                                <tfoot>
                                                                                    <tr>
                                                                                        <th scope="row" colspan="2" style="color:#414141;border:0;vertical-align:middle;text-align:left;font-weight:normal;padding-bottom:5px;padding-left:0;padding-top:24px;border-top-width:4px;padding:8px 12px;border-bottom:none" align="left">
                                                                                            Subtotal: </th>
                                                                                        <td style="color:#414141;border:0;vertical-align:middle;text-align:right;font-weight:normal;padding-bottom:5px;padding-right:0;padding-top:24px;border-top-width:4px;padding:8px 12px;border-bottom:none" align="right"><span><span>Rp</span><?= $subtotal ?></span></td>
                                                                                    </tr>
                                                                                    <tr class="m_-8663709442295350112order-totals-total">
                                                                                        <th scope="row" colspan="2" style="color:#414141;border:0;vertical-align:middle;text-align:left;padding-bottom:5px;padding-top:5px;font-weight:bold;padding-left:0;padding:8px 12px;border-bottom:none" align="left">
                                                                                            Total: </th>
                                                                                        <td style="color:#414141;border:0;vertical-align:middle;text-align:right;padding-bottom:5px;padding-top:5px;font-weight:bold;font-size:20px;padding-right:0;padding:8px 12px;border-bottom:none" align="right"><span><span>Rp</span><?= $total ?></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" colspan="2" style="color:#414141;border:0;vertical-align:middle;text-align:left;font-weight:normal;padding-top:5px;padding-bottom:24px;padding-left:0;padding:8px 12px;border-bottom:none" align="left">
                                                                                            Payment method: </th>
                                                                                        <td style="color:#414141;border:0;vertical-align:middle;text-align:right;font-weight:normal;padding-top:5px;padding-bottom:24px;padding-right:0;padding:8px 12px;border-bottom:none" align="right">All Supported Payment</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" colspan="2" style="color:#414141;border:0;vertical-align:middle;text-align:left;font-weight:normal;padding-bottom:5px;padding-top:5px;padding-left:0;padding:8px 12px;border-bottom:none" align="left">Payment Status:</th>
                                                                                        <td style="color:#414141;border:0;vertical-align:middle;text-align:right;font-weight:normal;padding-bottom:5px;padding-top:5px;padding-right:0;padding:8px 12px;border-bottom:none" align="right">Completed</td>
                                                                                    </tr>
                                                                                </tfoot>
                                                                            </table>
                                                                        </div>

                                                                        <table id="m_-8663709442295350112venue" cellspacing="0" cellpadding="0" style="width:100%;border:0;margin-bottom:40px" width="100%" border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="padding:0">
                                                                                        <h2 style="color:#111;display:block;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;line-height:160%;margin:0 0 18px;text-align:left;text-transform:uppercase;font-weight:700;margin-bottom:0;font-size:18px">Venue</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style="padding:0">Greenkubu Restaurant and Swing, Br, Jl. Pejengaji, Tegallalang, Gianyar Regency, Bali 80561</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style="padding:0">
                                                                                        <a href="https://www.google.com/maps/place/Greenkubu+Restaurant+and+Swing/@-8.4520721,115.2716879,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd22284e4af9543:0x7a8c99e9dbdc880f!8m2!3d-8.4520774!4d115.2742628!16s%2Fg%2F11dz161zrk?entry=ttu&amp;g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" style="text-decoration:underline;color:#14294f;font-weight:700" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.google.com/maps/place/Greenkubu%2BRestaurant%2Band%2BSwing/@-8.4520721,115.2716879,17z/data%3D!3m1!4b1!4m6!3m5!1s0x2dd22284e4af9543:0x7a8c99e9dbdc880f!8m2!3d-8.4520774!4d115.2742628!16s%252Fg%252F11dz161zrk?entry%3Dttu%26g_ep%3DEgoyMDI1MDcxNi4wIKXMDSoASAFQAw%253D%253D&amp;source=gmail&amp;ust=1754038999829000&amp;usg=AOvVaw31n6Q8SpsuHSOq6sMbzRUV">Open Maps</a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <table id="m_-8663709442295350112addresses" cellspacing="0" cellpadding="0" border="0" style="width:100%;vertical-align:top;margin-bottom:0;padding:0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td valign="top" width="50%" style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;text-align:left;border:0;padding:0" align="left">
                                                                                        <b style="color:#111;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;text-transform:uppercase;margin-top:40px">Billing address</b>

                                                                                        <address style="color:#111;font-style:normal;padding:8px 0">
                                                                                            <?= esc_html($customer_name) ?>
                                                                                            <br>
                                                                                            <a href="tel:<?= esc_html($customer_phone) ?>" style="color:#111;font-weight:normal;text-decoration:underline" target="_blank"><?= esc_html($customer_phone) ?></a> <br><a href="mailto:julianaputra10@gmail.com" target="_blank">julianaputra10@gmail.com</a>
                                                                                            <br>
                                                                                            <p style="margin:0 0 16px">
                                                                                                <?= esc_html($customer_nationality) ?> </p>
                                                                                        </address>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <br>
                                                                        <table border="0" cellpadding="0" cellspacing="0" width="50%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="m_-8663709442295350112email-additional-content" style="color:#111;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;padding:32px 0 0">
                                                                                        <p style="text-align:left;margin:0 0 16px" align="left">Thanks again! If you need any help with your order, please contact us at <a href="mailto:hikaria@info.com" target="_blank">hikaria@info.com</a>.</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" valign="top">

                    <table border="0" cellpadding="10" cellspacing="0" width="100%" id="m_-8663709442295350112template_footer">
                        <tbody>
                            <tr>
                                <td valign="top" style="padding:0;border-radius:0">
                                    <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td colspan="2" valign="middle" id="m_-8663709442295350112credit" style="border-radius:0;border:0;border-top:1px solid rgba(0,0,0,.2);font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:12px;line-height:140%;text-align:center;padding:32px;color:#787c82" align="center">
                                                    <p style="margin:0">Do not answer this e-mail notification as it is a generated e-mail.<br>
                                                        ©2025 Hikaria Indonesia</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>