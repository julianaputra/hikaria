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


// Custom form billing on checkout
add_filter('woocommerce_checkout_fields', 'custom_minimal_checkout_fields');
function custom_minimal_checkout_fields($fields) {
    // Define allowed fields
    $allowed = [
        'billing_first_name',
        'billing_phone',
        'billing_email',
    ];

    // Remove all billing fields except allowed
    foreach ($fields['billing'] as $key => $field) {
        if (!in_array($key, $allowed)) {
            unset($fields['billing'][$key]);
        }
    }

    // Full Name
    $fields['billing']['billing_first_name']['label'] = 'Full Name';
    $fields['billing']['billing_first_name']['placeholder'] = 'Full Name';
    $fields['billing']['billing_first_name']['priority'] = 10;
    $fields['billing']['billing_first_name']['class'] = ['form-row-wide'];

    // Phone Number (intl-tel-input handles country code)
    $fields['billing']['billing_phone']['label'] = 'Phone Number';
    $fields['billing']['billing_phone']['placeholder'] = 'e.g. 85976448533';
    $fields['billing']['billing_phone']['required'] = true;
    $fields['billing']['billing_phone']['priority'] = 20;
    $fields['billing']['billing_phone']['class'] = ['form-row-wide'];

    // Email Address
    $fields['billing']['billing_email']['label'] = 'Email Address';
    $fields['billing']['billing_email']['placeholder'] = 'Email Address';
    $fields['billing']['billing_email']['priority'] = 30;
    $fields['billing']['billing_email']['class'] = ['form-row-wide'];

    // Nationality
    $fields['billing']['billing_nationality'] = [
        'type'        => 'text',
        'label'       => 'Nationality',
        'placeholder' => 'e.g. Indonesian',
        'required'    => true,
        'class'       => ['form-row-wide'],
        'priority'    => 40,
    ];

    return $fields;
}


// add nationality in billing info
add_action('woocommerce_checkout_update_order_meta', 'save_custom_nationality_field');
function save_custom_nationality_field($order_id) {
    if (!empty($_POST['billing_nationality'])) {
        update_post_meta($order_id, '_billing_nationality', sanitize_text_field($_POST['billing_nationality']));
    }
}

// Show it in the admin order details
add_action('woocommerce_admin_order_data_after_billing_address', 'display_nationality_admin_order', 10, 1);
function display_nationality_admin_order($order) {
    $nationality = get_post_meta($order->get_id(), '_billing_nationality', true);
    if ($nationality) {
        echo '<p><strong>Nationality:</strong> ' . esc_html($nationality) . '</p>';
    }
}

// Show Nationality on Thank You Page
add_action('woocommerce_thankyou', 'display_nationality_on_thankyou', 20);
function display_nationality_on_thankyou($order_id) {
    $nationality = get_post_meta($order_id, '_billing_nationality', true);
    if ($nationality) {
        echo '<p class="woocommerce-nationality"><strong>Nationality:</strong> </br>' . esc_html($nationality) . '</p>';
    }
}

// Show Nationality in WooCommerce Emails
add_action('woocommerce_email_customer_details', 'display_nationality_in_email', 25, 4);
function display_nationality_in_email($order, $sent_to_admin, $plain_text, $email) {
    $nationality = get_post_meta($order->get_id(), '_billing_nationality', true);
    if ($nationality) {
        if ($plain_text) {
            echo "\nNationality: " . $nationality . "\n";
        } else {
            echo '<p>' . esc_html($nationality) . '</p>';
        }
    }
}


// ================================================
// remove coupon from default position
remove_action('woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10);


// clear cart if from checkout back to booking page
// add_action('template_redirect', 'custom_handle_clear_cart_redirect');
// function custom_handle_clear_cart_redirect() {
//     if ( isset($_GET['clear-cart']) && $_GET['clear-cart'] == '1' ) {
//         if ( WC()->cart ) {
//             WC()->cart->empty_cart();
//         }

//         if ( is_product() ) {
//             // Redirect to the product page without the query string
//             wp_safe_redirect( get_permalink() );
//         } else {
//             // Redirect to home page
//             wp_safe_redirect( home_url() );
//         }
//         exit;
//     }
// }



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

// change order id format
// Add custom order number format
add_filter('woocommerce_order_number', 'custom_woocommerce_order_number', 10, 2);
function custom_woocommerce_order_number($order_number, $order) {
    $prefix = 'HKR-WEB-';
    return $prefix . $order->get_id();
}


// only use the newest cart, the old will replace
add_filter('woocommerce_add_to_cart_validation', 'force_single_cart_item_always', 99, 3);
function force_single_cart_item_always($passed, $product_id, $quantity) {
    // Always empty the cart before adding any new item (even same variation)
    WC()->cart->empty_cart();
    return $passed;
}


// custom API for email
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/send-email/', array(
        'methods' => 'POST',
        'callback' => 'custom_send_email_endpoint',
        'permission_callback' => '__return_true',
    ));
});

function custom_send_email_endpoint($request) {
    $data = $request->get_json_params();

    if (!$data || !isset($data['customer']['email'])) {
        return new WP_REST_Response(['message' => 'Invalid data'], 400);
    }

    $to = sanitize_email($data['customer']['email']);
    $subject = 'Your Order Confirmation';

    // Gunakan output buffering untuk include template sebagai string
    ob_start();
    include get_stylesheet_directory() . '/woocommerce/emails/custom-order-template.php';
    $message = ob_get_clean();

    $headers = ['Content-Type: text/html; charset=UTF-8'];

    $mail_sent = wp_mail($to, $subject, $message, $headers);

    if ($mail_sent) {
        return new WP_REST_Response(['message' => 'Email sent successfully.'], 200);
    } else {
        return new WP_REST_Response(['message' => 'Failed to send email.'], 500);
    }
}
