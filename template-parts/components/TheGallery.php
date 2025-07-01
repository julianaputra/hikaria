<?php
    $sectionTitle = get_field('gallery_section_title');
    $sectionSubtitle = get_field('gallery_section_subtitle');
?>
<section id="gallery" class="section gallery">
    <div class="container section__holder">
        <h2 class="section__title" data-aos="fade-up"><?php echo esc_html($sectionTitle);?></h2>
        <p class="section__subtitle" data-aos="fade-up"><?php echo esc_html($sectionSubtitle);?></p>
    </div>
    <div class="container gallery__holder" data-aos="fade-up">
        <?php
        $all_images = get_field('gallery_image');
        $videos = get_field('gallery_video');
        $per_page = 10;
        $offset = 0;
        $video_index = 0;

        // Slice only the first 10 images
        $images = array_slice($all_images, $offset, $per_page);

        $total_items = is_array($all_images) ? count($all_images) : 0;
        ?>

        <div id="gallery-row" class="row" data-total="<?php echo esc_attr($total_items); ?>" data-postid="<?php echo get_the_ID(); ?>">
            <?php
            include locate_template('template-parts/components/GalleryLooping.php');
            ?>
        </div>

        <?php if ($total_items > $per_page): ?>
            <div class="text-center mt-4">
                <button id="load-more-gallery" class="themeBtn"
                    data-page="1"
                    data-perpage="<?php echo esc_attr($per_page); ?>"
                    data-postid="<?php echo get_the_ID(); ?>">
                    Load More
                </button>
            </div>
        <?php endif; ?>
    </div>
</section>