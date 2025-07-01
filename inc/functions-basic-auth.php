<?php

/**
 * Function to Adds basic authentication and IP whitelisting
 */
function basic_auth_and_ip_whitelist() {
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    // Whitelisted IPs
    $whitelisted_ips = array('127.0.0.1', '103.100.175.121'); // Add your whitelisted IPs here (local and office IP)

    // Basic Auth credentials
    $auth_user = 'timedoor';
    $auth_pass = 'Bq4b)U^70uHgcBjrS1';

    // Check if "Search Engine Visibility" is disabled in Settings -> Reading
    if (get_option('blog_public') == 0) {
        // Get client IP safely
        $user_ip = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];

        // Allow whitelisted IPs
        if (in_array($user_ip, $whitelisted_ips)) {
            return;
        }

        // Basic authentication
        $username = isset($_SERVER['PHP_AUTH_USER']) ? sanitize_text_field($_SERVER['PHP_AUTH_USER']) : '';
        $password = isset($_SERVER['PHP_AUTH_PW']) ? sanitize_text_field($_SERVER['PHP_AUTH_PW']) : '';

        if ($username !== $auth_user || $password !== $auth_pass) {
            header('WWW-Authenticate: Basic realm="Protected Area"');
            header('HTTP/1.0 401 Unauthorized');
            echo 'Unauthorized';
            exit;
        }
    }
}

// Hook into WordPress init
add_action('init', 'basic_auth_and_ip_whitelist');