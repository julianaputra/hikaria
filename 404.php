<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Timedoor
 */

get_header();
?>

<section class="error">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-7">
                <h1 class="error__title">404 Error</h1>
                <h2 class="error__subtitle">Page Not Found</h2>
                <p class="error__description">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <a href="<?php echo get_home_url('/') ?>" class="error__link">    
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 20V14H14.5V20H19.5V12H22.5L12.5 3L2.5 12H5.5V20H10.5Z" fill="#0F172A"/>
                    </svg>
                    Back To Home
                </a>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
?>