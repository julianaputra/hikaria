<?php

/**
 * Functions for get wordpress current language
 * You just need to call the function in templates to get the current language
 * it is usefull when you work with polylang plugin
 * Expexted return format "en_us"
 * @return string
 */
function getCurrentLang() {
    if( function_exists('pll_current_language') ) {
        return pll_current_language('locale');
    } else {
        return explode('_', get_locale())[0];
    }
}

/**
 * Functions to get page data object with page title only
 * See page title in page option general settings -> page link
 * @param string default empty
 * @return object
 */
function getPageData($page_title) {
    $pageData = get_field( 'page_links', 'page-links' );

    foreach($pageData as $data) {
        if ( $data['page_title'] === $page_title ) {
            return $data['page_object'];
        }
    }

    return 'No "' . $page_title . '" page_links configuration found.';
}

/**
 * Function to add separator to admin menu
 * This function receive 1 parameter which is menu position
 * Parameter can be either integer or string
 * You can either specify the position explicitly, or you can pass the slug or URL of an existing top-level menu and it will automatically figure out its position and add the separator right after that menu
 * @link https://w-shadow.com/blog/2012/10/16/add-separators-to-the-admin-menu/
 */
function add_admin_menu_separator($position, $text = '') {
    global $menu;
    static $uid = 0;

    if ( !is_int($position) ) {
        //Find the position of the menu that matches
        //the specified file name or URL.
        $menuPosition = 0;
        foreach($menu as $menuPosition => $item) {
            if ( $item[2] === $position ) {
                break;
            }
        }
        //We'll insert the separator just after the target menu.
        $position = $menuPosition + 1;
    }

    $menuFile = 'separator-custom-' . $uid++;

    if (!$text) {
        $menu[$position] = array(
            '',                  //Menu title (ignored)
            'read',              //Required capability
            $menuFile,           //URL or file (ignored, but must be unique)
            '',                  //Page title (ignored)
            'wp-menu-separator tmdr-separator', //CSS class. Identifies this item as a separator.
        );
    } else {
        $menu[$position] = array(
            '',                  //Menu title (ignored)
            'read',              //Required capability
            $menuFile,           //URL or file (ignored, but must be unique)
            '',                  //Page title (ignored)
            'wp-menu-separator tmdr-separator ' . $text, //CSS class. Identifies this item as a separator.
        );
    }
    ksort($menu);
}

/**
 * Function to show custom debugging helper
 * call the function anywhere in the template to show the debugging helper
 * write down the code that you want to debug on the template-parts/debug-console.php
 */
function show_debug_helper() {
    echo get_template_part('template-parts/debug-console');
}

/**
 * Load a component template part.
 *
 * This function loads a component template part located in the /template-parts/components/ directory.
 * The $name parameter specifies the name of the component to load, while the $args parameter is an optional array of arguments to pass to the component.
 * 
 * Usage:
 * components('header'); // Load /template-parts/components/header.php
 * components('footer', array('arg1' => 'value1')); // Load /template-parts/components/footer.php with arguments
 *
 * @param string $name The name of the component template part to load.
 * @param array $args Optional. An array of arguments to pass to the template part. Default is an empty array.
 * @return void
 */
function components($name, $args = []) {
    return get_template_part('/template-parts/components/' . $name, null, $args);
}

/**
 * Replaces all default WordPress login error messages with a single, generic one.
 * This helps improve security by not revealing whether a username or password was specifically incorrect.
 */
function tmdr_custom_login_errors() {
	return 'The username or password you entered is incorrect. Please try again.';
}
add_filter('login_errors', 'tmdr_custom_login_errors');

/**
 * Remove the "Confirm use of weak password" checkbox in the WordPress admin,
 * and disable the submit button when a weak password is entered.
 *
 * This script runs after the admin page loads and:
 * 1. Removes the .pw-weak checkbox element if it exists.
 * 2. Monitors the password input field (#pass1) and the password strength indicator (#pass-strength-result).
 * 3. Disables the submit button if the password is considered too weak or empty.
 *
 * Note: This is a client-side (JavaScript) control.
 * using the 'user_profile_update_errors' filter for complete enforcement.
 */
function tmdr_remove_weak_password_checkbox_script() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function () {
        
        const checkboxRow = document.querySelector('.pw-weak');
        if (checkboxRow) {
            checkboxRow.remove();
        }

        // Also disable the submit button if weak password is chosen
        const passwordInput = document.getElementById('pass1');
        const submitButton = document.querySelector('input[type="submit"]');

        function checkPasswordStrength() {
            const strength = window.pwsL10n ? window.pwsL10n.strength : '';
            const indicator = document.getElementById('pass-strength-result');
            if (indicator && indicator.classList.contains('short')) {
                if (submitButton) submitButton.disabled = true;
            } else if (passwordInput.value.length === 0) {
                if (submitButton) submitButton.disabled = true;
            } else {
                if (submitButton) submitButton.disabled = false;
            }
        }

        if (passwordInput) {
            passwordInput.addEventListener('input', function () {
                setTimeout(checkPasswordStrength, 300); // wait for meter to update
            });
        }
    });
    </script>
    <?php
}
add_action('admin_footer', 'tmdr_remove_weak_password_checkbox_script');

/**
 * Completely removes the "Remember Me" checkbox from the WordPress admin login page.
 *
 * This function hooks into 'login_enqueue_scripts' and injects JavaScript that:
 * 1. Waits for the DOM to be fully loaded.
 * 2. Selects the checkbox container with the class '.forgetmenot'.
 * 3. Removes it from the DOM entirely.
 */
function tmdr_remove_remember_me_checkbox() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function () {
        const rememberMeContainer = document.querySelector('.forgetmenot');
        if (rememberMeContainer) {
            rememberMeContainer.remove();
        }
    });
    </script>
    <?php
}
add_action('login_enqueue_scripts', 'tmdr_remove_remember_me_checkbox');

/**
 * Track the timestamp of the last password change.
 *
 * This function is triggered on user profile updates. If the password has been changed,
 * it stores the current timestamp in user meta with the key 'last_password_change'.
 */
function tmdr_track_password_change_timestamp($user_id, $old_user_data) {
    if (!empty($_POST['pass1']) && $_POST['pass1'] !== $old_user_data->user_pass) {
        update_user_meta($user_id, 'last_password_change', time());
    }
}
add_action('profile_update', 'tmdr_track_password_change_timestamp', 10, 2);

/**
 * Restrict users from changing passwords more than once per 24 hours.
 *
 * This function checks the timestamp of the last password change. If less than 24 hours
 * have passed, it adds an error to prevent the password update.
 */
function tmdr_restrict_frequent_password_changes($errors, $update, $user) {
    if (!$update) return; // Only run on profile update

    if (!empty($_POST['pass1'])) {
        $last_changed = get_user_meta($user->ID, 'last_password_change', true);
        $now = time();

        if ($last_changed && ($now - $last_changed) < DAY_IN_SECONDS) {
            $errors->add('password_too_soon', __('ERROR: You must wait at least 24 hours before changing your password again.'));
        }
    }
}
add_filter('user_profile_update_errors', 'tmdr_restrict_frequent_password_changes', 10, 3);

/**
 * Injects JavaScript into the admin footer to track user inactivity.
 * If no user interaction occurs for 60 minutes, they are redirected to logout.
 */
function tmdr_force_logout_after_inactivity() {
    global $pagenow;
    if (!is_user_logged_in() || !is_admin() || in_array($pagenow, ['post.php', 'post-new.php'])) return;

    // AJAX endpoint that logs user out
    $logout_url = admin_url('admin-ajax.php?action=force_logout');
    ?>
    <script>
    (function(){
        const logoutTime = 60 * 60 * 1000; // 60 minutes

        let logoutTimer;

        function resetTimer() {
            clearTimeout(logoutTimer);
            logoutTimer = setTimeout(() => {
                window.location.href = "<?php echo esc_url($logout_url); ?>";
            }, logoutTime);
        }

        ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(evt => {
            window.addEventListener(evt, resetTimer, false);
        });

        resetTimer();
    })();
    </script>
    <?php
}
add_action('admin_footer', 'tmdr_force_logout_after_inactivity');

/**
 * Handles the logout process when the AJAX endpoint is triggered.
 * This forcibly logs the user out by clearing session and auth cookies,
 * then redirects them to the login screen with a custom flag.
 */
function tmdr_ajax_force_logout() {
    wp_destroy_current_session();
    wp_clear_auth_cookie();
    
    // Redirect to login page with custom flag
    wp_redirect(wp_login_url() . '?session_expired=1');
    exit;
}
add_action('wp_ajax_force_logout', 'tmdr_ajax_force_logout');

/**
 * Shows an alert on the login page if the user was logged out due to inactivity.
 * This runs only if ?session_expired=1 is present in the URL.
 */
function tmdr_show_inactivity_alert() {
    if (!isset($_GET['session_expired'])) return;

    ?>
    <script>
        alert("You were logged out due to inactivity.");
    </script>
    <?php
}
add_action('login_footer', 'tmdr_show_inactivity_alert');

/**
 * Prevents browser and proxy caching for WordPress login (wp-login.php) and admin area pages.
 * Hooked to 'init', this function checks if the current request is for wp-login.php or an admin page. If so, it sends HTTP headers (Cache-Control, Pragma, Expires) to ensure these sensitive pages are always fetched fresh from the server, enhancing security and preventing issues with stale data.
 * Note: `is_page('wp-login.php')` is not ideal for detecting the login page; checking `$pagenow` is more reliable.
 */
function tmdr_disable_cache_for_wordpress_pages() {
    global $pagenow;
    if ($pagenow === 'wp-login.php' || is_admin()) {
        // Disable caching for login and admin pages
        header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
        header('Pragma: no-cache');
        header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');
    }
}
add_action('init', 'tmdr_disable_cache_for_wordpress_pages');


/*
Youtube get ID
*/
function get_youtube_id_from_url($url) {
    preg_match('/[\\?\\&]v=([^\\?\\&]+)/', $url, $matches);
    return $matches[1] ?? '';
}