<?php
function enqueue_gallery_loadmore_script() {
    wp_enqueue_script('gallery-loadmore', get_template_directory_uri() . '/source/js/gallery-loadmore.js', array('jquery'), null, true);

    wp_localize_script('gallery-loadmore', 'gallery_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_ajax_load_more_gallery', 'load_more_gallery_ajax');
add_action('wp_ajax_nopriv_load_more_gallery', 'load_more_gallery_ajax');
add_action('wp_enqueue_scripts', 'enqueue_gallery_loadmore_script');


function load_more_gallery_ajax() {
    $offset = isset($_POST['offset']) ? intval($_POST['offset']) : 0;
    $per_page = isset($_POST['per_page']) ? intval($_POST['per_page']) : 10;
    $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;

    if (!$post_id) {
        wp_send_json_error(['message' => 'Post ID missing']);
    }

    $all_images = get_field('gallery_image', $post_id);
    $videos = get_field('gallery_video', $post_id);

    if (!is_array($all_images)) {
        wp_send_json_error(['message' => 'Images not found or not an array']);
    }

    $images = array_slice($all_images, $offset, $per_page);
    $video_index = intval($offset / $per_page);

    extract([
        'images' => $images,
        'videos' => $videos,
        'offset' => $offset,
        'per_page' => $per_page,
        'video_index' => $video_index,
    ]);

    ob_start();
    include locate_template('template-parts/components/GalleryLooping.php');
    $html = ob_get_clean();

    if (empty($html)) {
        wp_send_json_error(['message' => 'No HTML generated']);
    }

    wp_send_json_success(['html' => $html]);
}

