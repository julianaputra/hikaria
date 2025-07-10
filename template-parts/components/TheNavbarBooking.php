<header class="navbar navbar-expand-md custom-navbar">
    <nav class="container">
        <?php
            $footerLogo = get_field('footer_logo', 'general-setting');
        ?>
        <a href="<?php echo home_url(); ?>/?clear-cart=1" class="custom-navbar__logo-container" rel="home">
            <img src="<?php echo esc_url($footerLogo['url']);?>" class="ratio-item" alt="Hikaria">
        </a>
        <div class="offcanvas offcanvas-end custom-navbar__offcanvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header custom-navbar__offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>
        
        <a href="<?php echo home_url(); ?>/?clear-cart=1" class="themeBtn">
            <span>Back to Home</span>
        </a>
    </nav>
</header>