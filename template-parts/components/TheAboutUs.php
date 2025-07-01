<?php
    $aboutUsTitle = get_field('about_us_title');
    $aboutUsDesc = get_field('about_us_description');
    $tmdrLogo = get_field('timedoor_logo');
    $rhsLogo = get_field('run-hun_sha_logo');
    $bigImage = get_field('big_image');
    $smallImage = get_field('small_image');
?>
<section id="aboutUs" class="section about-us">
    <div class="container">
        <div class="row about-us__row">
            <div class="col-md-7">
                <div class="about-us__big-container gsap-holder" data-aos="fade-up">
                    <!-- <img src="<?php echo esc_url($bigImage['url']);?>" alt="<?php echo esc_html($aboutUsTitle);?>" class="ratio-item gsap-parallax"> -->
                    <div class="gsap-parallax" style="background-image: url('<?php echo esc_url($bigImage['url']);?>')"></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="about-us__text" data-aos="fade-up">
                    <h2 class="about-us__title section__title"><?php echo esc_html($aboutUsTitle);?></h2>
                    <div class="about-us__desc"><?php echo $aboutUsDesc;?></div>
                </div>
                <div class="about-us__logo" data-aos="fade-up">
                    <div class="about-us__tmdr-container">
                        <img src="<?php echo esc_url($tmdrLogo['url']);?>" alt="Timedoor Logo" class="ratio-item">
                    </div>
                    <div class="about-us__rhs-container">
                        <img src="<?php echo esc_url($rhsLogo['url']);?>" alt="Run Hun Sha Logo" class="ratio-item">
                    </div>
                </div>
                <div class="about-us__small-container" data-aos="fade-up">
                    <img src="<?php echo esc_url($smallImage['url']);?>" alt="<?php echo esc_html($aboutUsTitle);?>" class="ratio-item">
                </div>
            </div>
        </div>
    </div>
</section>