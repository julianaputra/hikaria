<?php

/*
    Template Name: Theme - Home Template
*/

get_header(); 

?>

<?php components('TheBanner') ?>
<?php components('TheShow') ?>
<?php components('TheGallery') ?>
<?php components('TheMaps') ?>
<?php components('TheAboutUs') ?>
<?php components('TheFaq') ?>
<?php components('TheCta') ?>

<?php

get_footer();

?>