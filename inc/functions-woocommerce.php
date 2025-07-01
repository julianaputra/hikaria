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


// custom form billing on checkout
add_filter('woocommerce_checkout_fields', 'custom_minimal_checkout_fields');
function custom_minimal_checkout_fields($fields) {
    $allowed = [
        'billing_first_name',
        'billing_phone',
        'billing_email',
    ];

    foreach ($fields['billing'] as $key => $field) {
        if (!in_array($key, $allowed)) {
            unset($fields['billing'][$key]);
        }
    }

    // Optional: Customize field labels/placeholders
    $fields['billing']['billing_first_name']['label'] = 'Full Name';
    $fields['billing']['billing_first_name']['placeholder'] = 'Fullname';

    $fields['billing']['billing_phone']['label'] = 'Phone Number';
    $fields['billing']['billing_phone']['placeholder'] = 'Phone Number';
    $fields['billing']['billing_phone']['required'] = true;

    $fields['billing']['billing_email']['label'] = 'Email Address';
    $fields['billing']['billing_email']['placeholder'] = 'Email Address';

    return $fields;
}

// remove coupon from default position
remove_action('woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10);


// clear cart if from checkout back to booking page
add_action('template_redirect', 'custom_handle_clear_cart_redirect');
function custom_handle_clear_cart_redirect() {
    if ( isset($_GET['clear-cart']) && $_GET['clear-cart'] == '1' ) {
        if ( WC()->cart ) {
            WC()->cart->empty_cart();
        }

        if ( is_product() ) {
            // Redirect to the product page without the query string
            wp_safe_redirect( get_permalink() );
        } else {
            // Redirect to home page
            wp_safe_redirect( home_url() );
        }
        exit;
    }
}



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