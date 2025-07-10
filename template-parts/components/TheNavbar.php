<header class="navbar navbar-expand-md custom-navbar">
    <nav class="container">
        <?php
            if(function_exists('the_custom_logo')) {
                the_custom_logo();
            }
        ?>
        <div class="offcanvas offcanvas-end custom-navbar__offcanvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header custom-navbar__offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body custom-navbar__offcanvas-body">
                <ul class="navbar-nav custom-navbar__navbar-nav">
                    <?php 
                        // Header Main Navigation Menu
                        $args = array(
                            'theme_location' => 'main_menu',
                            'depth'          => 2,
                            'container'      => '', // remove div container
                            'items_wrap'      => '%3$s', // remove ul tag
                        );
                        wp_nav_menu( $args );
                    ?>
                </ul>
            </div>
        </div>
        
        <div class="custom-navbar__button-holder">
            <?php components('ThemeButton') ?>        
            <button class="navbar-toggler collapsed custom-navbar__navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="custom-navbar__navbar-toggler-icon top"></span>
                <span class="custom-navbar__navbar-toggler-icon middle"></span>
                <span class="custom-navbar__navbar-toggler-icon bottom"></span>
            </button>
        </div>
        
    </nav>
</header>