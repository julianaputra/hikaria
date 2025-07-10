<?php
/**
 * Review order table
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/review-order.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 5.2.0
 */

defined( 'ABSPATH' ) || exit;
?>
<table class="shop_table woocommerce-checkout-review-order-table">
	<tbody>
        <?php foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item): 
            $_product = $cart_item['data'];
            $product_id = $cart_item['product_id'];
            $product_name = $_product->get_name();
            $product_image = wp_get_attachment_image_src($_product->get_image_id(), 'thumbnail')[0];
            $product_price = WC()->cart->get_product_price($_product);

            // Read from custom cart item data
            $visit_date = isset($cart_item['visit_date']) ? date('F j, Y', strtotime($cart_item['visit_date'])) : '';
            $customer_lines = [];

            if (!empty($cart_item['booking_data'])) {
                foreach ($cart_item['booking_data'] as $p) {
                    $qty = intval($p['quantity']);
                    $age = ucfirst($p['age']); // e.g. 'Adult'
                    $nation = ucfirst($p['nationality']); // e.g. 'Foreigner'
                    if ($qty > 0) {
                        $customer_lines[] = "{$qty}× {$age} ({$nation})";
                    }
                }
            }
        ?>
        <tr class="custom-cart-item">
            <td class="image-col">
                <img src="<?php echo esc_url($product_image); ?>" alt="<?php echo esc_attr($product_name); ?>">
            </td>
            <td class="info-col">
                <p class="info-col__title"><?php echo esc_html($product_name); ?></p>
                <?php if ($visit_date): ?>
                    <p class="info-col__date">Date of Visit : <?php echo esc_html($visit_date); ?></p>
                <?php endif; ?>
				<?php if (!empty($cart_item['estimated_time'])): ?>
					<p class="info-col__time">Estimated Time of Arrival : <?php echo esc_html($cart_item['estimated_time']); ?></p>
				<?php endif; ?>
                <?php foreach ($customer_lines as $line): ?>
                    <div class="info-col__customer"><?php echo esc_html($line); ?></div>
                <?php endforeach; ?>
            </td>
            <td class="price-col">
                <?php echo wp_kses_post($product_price); ?>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
	<tfoot>

		<tr class="cart-subtotal">
			<th><?php esc_html_e( 'Subtotal', 'woocommerce' ); ?></th>
			<td></td>
			<td><?php wc_cart_totals_subtotal_html(); ?></td>
		</tr>

		<?php foreach ( WC()->cart->get_coupons() as $code => $coupon ) : ?>
			<tr class="cart-discount coupon-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
				<th><?php wc_cart_totals_coupon_label( $coupon ); ?></th>
				<td></td>
				<td><?php wc_cart_totals_coupon_html( $coupon ); ?></td>
			</tr>
		<?php endforeach; ?>

		<?php if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) : ?>

			<?php do_action( 'woocommerce_review_order_before_shipping' ); ?>

			<?php wc_cart_totals_shipping_html(); ?>

			<?php do_action( 'woocommerce_review_order_after_shipping' ); ?>

		<?php endif; ?>

		<?php foreach ( WC()->cart->get_fees() as $fee ) : ?>
			<tr class="fee">
				<th><?php echo esc_html( $fee->name ); ?></th>
				<td></td>
				<td><?php wc_cart_totals_fee_html( $fee ); ?></td>
			</tr>
		<?php endforeach; ?>

		<?php if ( wc_tax_enabled() && ! WC()->cart->display_prices_including_tax() ) : ?>
			<?php if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) : ?>
				<?php foreach ( WC()->cart->get_tax_totals() as $code => $tax ) : // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited ?>
					<tr class="tax-rate tax-rate-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
						<th><?php echo esc_html( $tax->label ); ?></th>
						<td></td>
						<td><?php echo wp_kses_post( $tax->formatted_amount ); ?></td>
					</tr>
				<?php endforeach; ?>
			<?php else : ?>
				<tr class="tax-total">
					<th><?php echo esc_html( WC()->countries->tax_or_vat() ); ?></th>
					<td></td>
					<td><?php wc_cart_totals_taxes_total_html(); ?></td>
				</tr>
			<?php endif; ?>
		<?php endif; ?>

		<?php do_action( 'woocommerce_review_order_before_order_total' ); ?>

		<tr class="order-total">
			<th><?php esc_html_e( 'Total', 'woocommerce' ); ?></th>
			<td></td>
			<td><?php wc_cart_totals_order_total_html(); ?></td>
		</tr>

		<?php do_action( 'woocommerce_review_order_after_order_total' ); ?>

	</tfoot>
</table>
