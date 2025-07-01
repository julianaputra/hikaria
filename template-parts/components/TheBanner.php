<?php
    $bannerVideo = get_field('banner_video');
    $bannerImage = get_field('banner_image');
    $bannerTitle = get_field('banner_title');
    $bannerDesc = get_field('banner_description');
?>
<section class="banner">
    <div class="banner__container-fluid">
        <div class="banner__video-container">
            <video autoplay muted loop playsinline id="banner-video" class="banner__video">
                <source src="<?php echo esc_url($bannerVideo['url']);?>" type="video/mp4">
            </video>    
        </div>
        
        <div class="container banner__text">
            <h1 class="banner__title col-lg-8" data-aos="fade-up"><?php echo esc_html($bannerTitle);?></h1>
            <div class="banner__text-right col-lg-3" data-aos="fade-up">
                <p class="banner__desc"><?php echo $bannerDesc;?></p>
                <?php components('ThemeButton') ?>
            </div>
        </div>
    </div>
</section>