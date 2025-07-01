<header class="navbar navbar-expand-md custom-navbar">
    <nav class="container">
        <?php
            if(function_exists('the_custom_logo')) {
                the_custom_logo();
            }
        ?>
        <button class="navbar-toggler collapsed custom-navbar__navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="custom-navbar__navbar-toggler-icon top"></span>
            <span class="custom-navbar__navbar-toggler-icon middle"></span>
            <span class="custom-navbar__navbar-toggler-icon bottom"></span>
        </button>
        <div class="offcanvas offcanvas-end custom-navbar__offcanvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header custom-navbar__offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>
        
        <a href="<?php echo home_url(); ?>/?clear-cart=1" class="themeBtn">
            Back to Home
        </a>
    </nav>
</header>