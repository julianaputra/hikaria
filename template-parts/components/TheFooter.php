<?php
    $footerLogo = get_field('footer_logo', 'general-setting');
    $email = get_field('email', 'general-setting');
    $phone = get_field('phone', 'general-setting');
?>
<footer class="footer">
    <div class="container">
        <div class="footer__top">
            <div class="row">
                <div class="col-md-3">
                    <a href="<?php echo get_home_url() ?>/?clear-cart=1" class="footer__logo-container">
                        <img src="<?php echo esc_url($footerLogo['url']);?>" alt="Hikaria Logo" class="ratio-item">
                    </a>
                </div>
                <div class="col-md-5">
                    <div class="footer__wrapper">
                        <ul class="footer__navbar">
                            <?php 
                                // Header Main Navigation Menu
                                $args = array(
                                    'theme_location' => 'main_menu',
                                    'depth'          => 2,
                                    'container'      => '', // remove div container
                                    'items_wrap'      => '%3$s', // remove ul tag
                                );
                                wp_nav_menu( $args );
                            ?>
                            <li class="menu-item">
                                <?php
                                    $acfLink = get_field('ticket_link', 'general-setting');
                                    $ticketLink = $acfLink['url'] ?? '#';
                                ?>
                                <a href="<?php echo esc_url($ticketLink);?>">Get Tickets</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer__wrapper">
                        <p class="footer__heading">Information</p>
                        <div class="footer__text footer__contact">
                            <p>
                                <a href="mailto:<?php echo $email;?>"><?php echo $email;?></a>
                            </p>
                            <p>
                                <a href="tel:<?php echo $phone;?>"><?php echo $phone;?></a>
                            </p>
                        </div>
                    </div>
                    <div class="footer__social-wrapper">
                        <?php if (have_rows('social_media', 'general-setting')): ?>
                            <?php while (have_rows('social_media', 'general-setting')) : the_row();
                                $socmedIcon = get_sub_field('icon');
                                $socmedName = get_sub_field('name');
                                $socmedUrl = get_sub_field('url');
                            ?>
                                <a href="<?php echo esc_url($socmedUrl);?>" class="footer__social-item" target="_blank" aria-label="social media">
                                    <div style="mask-image: url('<?php echo esc_url($socmedIcon['url']);?>'); -webkit-mask-image: url('<?php echo esc_url($socmedIcon['url']);?>');"></div>
                                </a>
                            <?php endwhile;?>
                        <?php endif;?>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <p class="footer__copyright">
                © <?php echo date('Y') ?> Hikaria. All Right Reserved.
            </p>
            <p class="footer__captcha mb-0">
                <a href="<?php echo home_url();?>/term-conditions" target="_blank">Terms & Conditions</a>
            </p>
        </div>
    </div>
</footer>