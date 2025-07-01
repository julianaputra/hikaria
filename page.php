<?php 
    get_header(); 
    $slug = basename(get_permalink(get_queried_object_id()));
?>
    <main class="default-page <?php echo $slug;?>-page">
        <div class="container">
            <?php the_content(); ?>
        </div>
    </main>
<?php get_footer(); ?>