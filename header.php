<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Timedoor
 */

?>
<!DOCTYPE html>
<html lang="<?php echo getCurrentLang(); ?>">
<head>
    
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="currentColor">
    
    <?php wp_head(); ?>
</head>

<body>
    
    <?php wp_body_open(); ?>
    <?php
        if ( is_product() || is_checkout() ):
            components('TheNavbarBooking');
        else:
            components('TheNavbar');
        endif;
    ?>
    
    <main>

    <?php // show_debug_helper(); ?>