<?php

/*
    Template Name: Theme - Term and Conditions Template
*/

get_header(); 

?>

<section class="term-conditions">
    <div class="container">
        <h1 class="term-conditions__title">Term and Conditions</h1>
        <div class="row term-conditions__row">
            <div class="col-md-10 term-conditions__desc">
                <?php the_content();?>
            </div>
        </div>
    </div>
</section>

<?php 
get_footer();
?>