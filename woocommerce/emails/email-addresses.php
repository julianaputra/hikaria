<?php
/**
 * Email Addresses
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/emails/email-addresses.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates\Emails
 * @version 9.8.0
 */

use Automattic\WooCommerce\Utilities\FeaturesUtil;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$address  = $order->get_formatted_billing_address();
$shipping = $order->get_formatted_shipping_address();

$email_improvements_enabled = FeaturesUtil::feature_is_enabled( 'email_improvements' );

?>
<table id="venue" cellspacing="0" cellpadding="0" style="width: 100%; border:0; margin-bottom: 40px;">
	<tbody>
		<tr>
			<td style="padding: 0;">
				<h2 style="text-transform: uppercase; font-weight: 700; margin-bottom: 0; font-size: 18px;">Venue</h2>
			</td>
		</tr>
		<tr>
			<td style="padding: 0;">Greenkubu Restaurant and Swing, Br, Jl. Pejengaji, Tegallalang, Gianyar Regency, Bali 80561</td>
		</tr>
		<tr>
			<td style="padding: 0;">
				<a href="https://www.google.com/maps/place/Greenkubu+Restaurant+and+Swing/@-8.4520721,115.2716879,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd22284e4af9543:0x7a8c99e9dbdc880f!8m2!3d-8.4520774!4d115.2742628!16s%2Fg%2F11dz161zrk?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="text-decoration: underline; color:#14294F; font-weight: 700;">Open Maps</a>
			</td>
		</tr>
	</tbody>
</table>
<table id="addresses" cellspacing="0" cellpadding="0" style="width: 100%; vertical-align: top; margin-bottom: <?php echo $email_improvements_enabled ? '0' : '40px'; ?>; padding:0;" border="0">		
	<tr>
		<td class="font-family text-align-left" style="border:0; padding:0;" valign="top" width="50%">
			<?php if ( $email_improvements_enabled ) { ?>
				<b class="address-title" style="text-transform: uppercase; margin-top: 40px;"><?php esc_html_e( 'Billing address', 'woocommerce' ); ?></b>
			<?php } else { ?>
				<h2 style="text-transform: uppercase; margin-top: 40px;"><?php esc_html_e( 'Billing address', 'woocommerce' ); ?></h2>
			<?php } ?>

			<address class="address">
				<?php echo wp_kses_post( $address ? $address : esc_html__( 'N/A', 'woocommerce' ) ); ?>
				<?php if ( $order->get_billing_phone() ) : ?>
					<br/><?php echo wc_make_phone_clickable( $order->get_billing_phone() ); ?>
				<?php endif; ?>
				<?php if ( $order->get_billing_email() ) : ?>
					<br/><?php echo esc_html( $order->get_billing_email() ); ?>
				<?php endif; ?>
				<?php
				/**
				 * Fires after the core address fields in emails.
				 *
				 * @since 8.6.0
				 *
				 * @param string $type Address type. Either 'billing' or 'shipping'.
				 * @param WC_Order $order Order instance.
				 * @param bool $sent_to_admin If this email is being sent to the admin or not.
				 * @param bool $plain_text If this email is plain text or not.
				 */
				do_action( 'woocommerce_email_customer_address_section', 'billing', $order, $sent_to_admin, false );
				?>
				<!-- add nationality -->
				<br>
				<p>
					<?php
						$nationality = $order->get_meta( '_billing_nationality' );
						if ( $nationality ) {
							echo esc_html( $nationality );
						}
					?>
				</p>
			</address>
		</td>
		<?php if ( ! wc_ship_to_billing_address_only() && $order->needs_shipping_address() && $shipping ) : ?>
			<td class="font-family text-align-left" style="padding:0;" valign="top" width="50%">
				<?php if ( $email_improvements_enabled ) { ?>
					<b class="address-title"><?php esc_html_e( 'Shipping address', 'woocommerce' ); ?></b>
				<?php } else { ?>
					<h2><?php esc_html_e( 'Shipping address', 'woocommerce' ); ?></h2>
				<?php } ?>

				<address class="address">
					<?php echo wp_kses_post( $shipping ); ?>
					<?php if ( $order->get_shipping_phone() ) : ?>
						<br /><?php echo wc_make_phone_clickable( $order->get_shipping_phone() ); ?>
					<?php endif; ?>
					<?php
					/**
					 * Fires after the core address fields in emails.
					 *
					 * @since 8.6.0
					 *
					 * @param string $type Address type. Either 'billing' or 'shipping'.
					 * @param WC_Order $order Order instance.
					 * @param bool $sent_to_admin If this email is being sent to the admin or not.
					 * @param bool $plain_text If this email is plain text or not.
					 */
					do_action( 'woocommerce_email_customer_address_section', 'shipping', $order, $sent_to_admin, false );
					?>
				</address>
			</td>
		<?php endif; ?>
	</tr>
</table>
<?php echo $email_improvements_enabled ? '<br>' : ''; ?>