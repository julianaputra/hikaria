<?php
defined('ABSPATH') || exit;

do_action('woocommerce_before_checkout_form', $checkout);

// If checkout registration is disabled and not logged in, redirect
if (!$checkout->is_registration_enabled() && $checkout->is_registration_required() && !is_user_logged_in()) {
    echo esc_html(apply_filters('woocommerce_checkout_must_be_logged_in_message', __('You must be logged in to checkout.')));
    return;
}
?>

<?php
defined('ABSPATH') || exit;
do_action('woocommerce_before_checkout_form', $checkout);

if (!$checkout->is_registration_enabled() && $checkout->is_registration_required() && !is_user_logged_in()) {
    echo esc_html(apply_filters('woocommerce_checkout_must_be_logged_in_message', __('You must be logged in to checkout.')));
    return;
}
?>

<div class="woocommerce-section">
	<h1 class="woocommerce-section__title">Checkout</h1>
</div>

<div class="referral-code">
    <h3 class="referral-code__title">Referral Code</h3>
    <?php wc_print_notices(); ?>
    <form class="checkout_coupon" method="post">
        <p class="form-row">
            <input type="text" name="coupon_code" class="input-text" placeholder="Enter Code" id="coupon_code" value="" />
            <button type="submit" class="button" name="apply_coupon" value="Apply">Apply</button>
        </p>
    </form>
</div>

<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url(wc_get_checkout_url()); ?>" enctype="multipart/form-data">
    <div class="custom-checkout-layout container">
        <div class="row">
            <!-- LEFT COLUMN -->
            <div class="col-md-7">
                <?php do_action('woocommerce_checkout_billing'); ?>
				
				
				<div class="checkout-term">
					<span class="checkout-term__label">By Proceeding with your purchase you agree to our <a href="#" target="_blank">Terms and Conditions</a> and <a href="#" target="_blank">Privacy Policy</a></span>
				</div>
				<div class="custom-checkout-button">
					<a href="<?php echo home_url(); ?>/product/cultural-storytelling-in-light/?clear-cart=1" class="themeBtn back-booking">
						Return to Tickets Booking
					</a>

					<?php
						do_action( 'woocommerce_review_order_before_submit' );
						echo apply_filters( 'woocommerce_order_button_html', '<button type="submit" class="themeBtn button alt" name="woocommerce_checkout_place_order" id="place_order" value="' . esc_attr( __( 'Processed order', 'woocommerce' ) ) . '" data-value="' . esc_attr( __( 'Processed order', 'woocommerce' ) ) . '">' . esc_html__( 'Processed order', 'woocommerce' ) . '</button>' );
						do_action( 'woocommerce_review_order_after_submit' );
					?>
				</div>
            </div>

            <!-- RIGHT COLUMN -->
            <div class="col-md-5">
                <h2 class="section-order-summary">Order Summary</h2>
                <?php do_action('woocommerce_review_order_before_payment'); ?>

                <?php do_action('woocommerce_checkout_order_review'); ?>
            </div>
        </div>
    </div>
</form>

<?php do_action('woocommerce_after_checkout_form', $checkout); ?>

