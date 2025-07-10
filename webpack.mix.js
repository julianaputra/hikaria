const mix = require('laravel-mix');

mix.sass('source/scss/layout.scss', 'assets/css/')
    .sass('source/scss/pages/404.scss', 'assets/css/pages/')
    .sass('source/scss/pages/home.scss', 'assets/css/pages/')
    .sass('source/scss/pages/thankyou.scss', 'assets/css/pages/')
    .sass('source/scss/pages/term-conditions.scss', 'assets/css/pages/')
    .sourceMaps(true, 'source-map');

mix.js('source/js/layout.js', 'assets/js/')
    .js('source/js/pages/home.js', 'assets/js/pages')
    .sourceMaps(true, 'source-map');

// Wordpress Custom Admin Login CSS
mix.sass('source/scss/admin/login.scss', 'assets/css/admin')
    .sass('source/scss/admin/colorScheme-tmdr.scss', 'assets/css/admin')
    .sass('source/scss/admin/colorScheme-client.scss', 'assets/css/admin')
    .sourceMaps(true, 'source-map');


mix.options({
    processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});

// mix.disableNotifications()