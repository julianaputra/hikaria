<section class="section cta">
    <div class="container-fluid cta__container">
        <?php
            $ctaImage = get_field('cta_image');
            $ctaTitle = get_field('cta_title');
            $ctaSubtitle = get_field('cta_subtitle');
            $acfLink = get_field('ticket_link', 'general-setting');
            $ticketLink = $acfLink['url'] ?? '#';
            $link = !empty($args['link']) ? $args['link'] : $ticketLink;
        ?>
        <div class="cta__holder gsap-holder">
            <div class="gsap-parallax" style="background-image: url('<?php echo esc_url($ctaImage['url']);?>');">
                <div class="row cta__row">
                    <div class="col-md-6">
                        <h2 class="section__title"><?php echo $ctaTitle;?></h2>
                        <p class="section__subtitle"><?php echo esc_html($ctaSubtitle);?></p>
                        <a href="<?php echo $link;?>" class="themeBtn ticket-button">Get Your Tickets Now!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>