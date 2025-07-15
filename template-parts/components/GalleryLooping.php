<?php
if (!isset($images)) {
    $images = get_field('gallery_image');
}
if (!isset($videos)) {
    $videos = get_field('gallery_video');
}

$offset = isset($offset) ? $offset : 0;
$per_page = isset($per_page) ? $per_page : 10;
$video_index = isset($video_index) ? $video_index : 0;

if (!is_array($images)) return;

$total = count($images);
$i = 0;
$colIndex = 0;

while ($i < $total):
    $colIndex++;
    ob_start();

    // === Prepare small images ===
    $small_imgs = array();
    for ($k = 0; $k < 4 && $i < $total; $k++, $i++) {
        $small_imgs[] = $images[$i];
    }

    // === Prepare big image (if any left) ===
    $big_img = null;
    if ($i < $total) {
        $big_img = $images[$i];
        $i++;
    }

    // === LEFT SIDE ===
    if ($colIndex % 2 === 1): ?>
        <div class="col-md-6">
            <div class="gallery__grid-custom">
                <?php foreach ($small_imgs as $img): ?>
                    <a class="gallery__grid-item small" style="width: 50%;" data-fancybox="gallery-item" href="<?= esc_url($img['url']); ?>">
                        <div class="gallery__small-container">
                            <img src="<?= esc_url($img['sizes']['large']); ?>" alt="<?= esc_attr($img['alt']); ?>" class="ratio-item gallery__image" />
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="col-md-6 gallery__big-holder">
            <?php if (!empty($videos) && isset($videos[$video_index])):
                $video = $videos[$video_index++];
                ?>
                <a class="gallery__grid-item big gallery__video" data-fancybox="gallery-item" href="<?= esc_url($video['video_link']); ?>">
                    <div class="gallery__big-container">
                        <img src="http://i3.ytimg.com/vi/<?= esc_attr(get_youtube_id_from_url($video['video_link'])); ?>/hqdefault.jpg" alt="<?= esc_attr($video['video_title']); ?>" class="ratio-item gallery__image"/>
                        <div class="gallery__video-btn"><img src="<?php echo get_template_directory_uri();?>/assets/images/video-play.svg"></div>
                    </div>
                </a>
            <?php elseif ($big_img): ?>
                <a class="gallery__grid-item big" data-fancybox="gallery-item" href="<?= esc_url($big_img['url']); ?>">
                    <div class="gallery__big-container">
                        <img src="<?= esc_url($big_img['sizes']['large']); ?>" alt="<?= esc_attr($big_img['alt']); ?>" class="ratio-item gallery__image" />
                    </div>
                </a>
            <?php endif; ?>
        </div>
    <?php else: ?>
        <div class="col-md-6 gallery__big-holder">
            <?php if (!empty($videos) && isset($videos[$video_index])):
                $video = $videos[$video_index++];
                ?>
                <a class="gallery__grid-item big gallery__video" data-fancybox="gallery-item" href="<?= esc_url($video['video_link']); ?>">
                    <div class="gallery__big-container">
                        <img src="http://i3.ytimg.com/vi/<?= esc_attr(get_youtube_id_from_url($video['video_link'])); ?>/hqdefault.jpg" alt="<?= esc_attr($video['video_title']); ?>" class="ratio-item gallery__image"/>
                    </div>
                </a>
            <?php elseif ($big_img): ?>
                <a class="gallery__grid-item big" data-fancybox="gallery-item" href="<?= esc_url($big_img['url']); ?>">
                    <div class="gallery__big-container">
                        <img src="<?= esc_url($big_img['sizes']['large']); ?>" alt="<?= esc_attr($big_img['alt']); ?>" class="ratio-item gallery__image" />
                    </div>
                </a>
            <?php endif; ?>
        </div>
        <div class="col-md-6">
            <div class="gallery__grid-custom">
                <?php foreach ($small_imgs as $img): ?>
                    <a class="gallery__grid-item small" style="width: 50%;" data-fancybox="gallery-item" href="<?= esc_url($img['url']); ?>">
                        <div class="gallery__small-container">
                            <img src="<?= esc_url($img['sizes']['large']); ?>" alt="<?= esc_attr($img['alt']); ?>" class="ratio-item gallery__image" />
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endif;

endwhile;
?>
