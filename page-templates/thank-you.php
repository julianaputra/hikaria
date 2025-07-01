<?php

/*
    Template Name: Theme - Thank you Template
*/

get_header(); 

?>

<section class="thankyou">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-7">
                <h1 class="thankyou__subtitle">Thank You for Reaching Out to Us!</h1>
                <p class="thankyou__description">You request has been successfully sent! We will contact you!</p>
                <a href="<?php echo get_home_url('/') ?>" class="thankyou__link">    
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 20V14H14.5V20H19.5V12H22.5L12.5 3L2.5 12H5.5V20H10.5Z" fill="#0F172A"/>
                    </svg>
                    Back To Home
                </a>
            </div>
        </div>
    </div>
</section>

<?php

get_footer();

?>