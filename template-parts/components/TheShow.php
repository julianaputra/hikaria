<?php
    $sectionTitle = get_field('show_section_title');
    $sectionSubtitle = get_field('show_section_subtitle');
    $showPosts = get_field('show_list');
?>

<section id="theShow" class="section the-show">
    <div class="container section__holder">
        <h2 class="section__title" data-aos="fade-up"><?php echo esc_html($sectionTitle);?></h2>
        <p class="section__subtitle" data-aos="fade-up"><?php echo esc_html($sectionSubtitle);?></p>
        <?php if( $showPosts ): ?>
            <div class="swiper the-show__swiper" data-aos="fade-up">
                <div class="swiper-wrapper">
                    <?php foreach( $showPosts as $showPost ): 
                        $post_id = $showPost->ID;
                        $permalink = get_permalink( $post_id );
                        $title = get_the_title( $post_id );
                        $imageUrl = get_the_post_thumbnail_url($post_id, 'full');
                        $startDateRaw = get_field('start_date', $post_id);
                        $startDate = $startDateRaw ? date_i18n('d M Y', strtotime($startDateRaw)) : '';
                        $endDate = get_field('end_date', $post_id);
                        $time = get_field('time', $post_id);
                        $location = get_field('location', $post_id);
                        $locationLink = get_field('location_link', $post_id);
                    ?>

                        <div class="swiper-slide">
                            <div class="row">
                                <div class="col-xl-7 col-lg-6 the-show__image-holder">
                                    <div class="the-show__image-container">
                                        <img src="<?php echo esc_url($imageUrl);?>" alt="<?php echo esc_html($title);?>" class="ratio-item">
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-6">
                                    <div class="the-show__text">
                                        <h3 class="the-show__title"><?php echo esc_html($title);?></h3>
                                        <div class="the-show__information">
                                            <div class="the-show__date-info">
                                                <p class="the-show__information-title">Date</p>
                                                <p class="the-show__information-desc">
                                                    <?php echo esc_html($startDate); ?> - 
                                                    <?php echo $endDate ? esc_html($endDate) : 'Onwards'; ?>
                                                </p>
                                            </div>
                                            <div class="the-show__time-info">
                                                <p class="the-show__information-title">Time</p>
                                                <p class="the-show__information-desc"><?php echo $time;?></p>
                                            </div>
                                            <div class="the-show__location-info">
                                                <p class="the-show__information-title">Location</p>
                                                <div class="the-show__information-desc">
                                                    <?php echo $location;?>
                                                </div>
                                                <a href="<?php echo esc_url($locationLink);?>" class="the-show__location-link" target="_blank">Visit Location <img src="<?php echo get_template_directory_uri();?>/assets/images/external-link.svg"></a>
                                            </div>
                                            <a href="<?php echo esc_url($permalink); ?>" class="themeBtn ticket-button"><span>Get Your Tickets</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <!-- <div class="swiper-button-next show__next"></div>
                <div class="swiper-button-prev show__prev"></div>
                <div class="swiper-pagination show__pagination"></div> -->
            </div>
        <?php endif; ?>
    </div>
</section>