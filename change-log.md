# Change Log

## Version 0.3.0 - 23/05/2025

### General

    - more organize files and folder
    - remove unnecssary plugin
    - new function
    - implement ISO code

## Version 0.2.2 - 13/12/2024

### inc/funtions-style-script.php

    - add defer capabilitiess to wp_enwueu_script

### inc/funtions-theme-setup.php

    - fix custom login css file path

---

## Version 0.2.1 - 07/11/2024

### inc/funtions-plugin.php

    - remove White Label CMS plugin from recommendation

    - add Toolbar Publish Button plugin as recommendation

### inc/functions-theme-setup.scss

    - add function to change wordpress logo to be website favicon if available

### source/scss/admin/colorSheme-client.scss

    - adjust button disabled color

---

## Version 0.2.0 - 07/11/2024

### inc/functions-theme-setup.php

    - reorder function

    - change default login banner image to use weblink instead of file

### source/scss/admin folder

    - add folder for admin specific styling

### source/scss/tmdr-admin.scss

    - renamed to be login.scss

    - move to `source/scss/admin`

### source/scss/tmdr-color-scheme.scss

    - renamed to be colorScheme-tmdr.scss

    - move to `source/scss/admin`

### source/scss/tmdr-web-specific-color-scheme.scss

    - renamed to be colorScheme-client.scss

    - move to `source/scss/admin`

### source/scss/config/_variable.scss

    - remove admin specific variable so it will not conaint major difference with main style presets

### screenshot.png

    - added screenshot.png

---

## Version 0.1.23 - 05/11/2024

### inc/functions-style-script.php

    - move admin styling to inc/function-theme-setup.php

### inc/function-theme-setup.php

    - login default banner code adjustment

    - company logo code adjustment

    - add Web Specific Admin Color Scheme

    - add function to activate `timedoor` color scheme when activating Timedoor Theme Starter

### source/scss/config/_variable.scss

    - change color example following Prime Codex Color

    - add admin variant color for Web Specific Color Scheme

### source/scss/tmdr-admin-color-scheme.scss

    - organise color to use variable instead of direct

### source/scss/tmdr-admin-web-specific-color-scheme.scss

    - added file

---

## Version 0.1.22 - 01/11/2024

### functions-theme-setup.php

    - add default banner image for login page

### tmdr-admin.scss

    - adjust button color

    - adjust link color

---

## Version 0.1.21 - 31/10/2024

### package.json

    - remove gsap file

    - change installation path to use Timedoor server

---

## Version 0.1.20 - 31/10/2024

### class-tgm-plugin-activation.php

    - move to inc folder instead on root

### functions-plugin.php

    - change local file to source website

### functions-theme-setup.php

    - add placeholder image using placehold.co

### functions.php

    - add tgmpa file to function.php

---

## Version 0.1.19 - 27/09/2024

### acf-json

    - added acf-json folder to record ACF field update to theme

    - added index.php so it won't be accessible

### inc/function-acf.php

    - added login logo field

### inc/function-theme-setup.php

    - adjust admin login logo with the new ACF field

### source/scss/tmdr-admin.scss

    - body height adjustment

### functions.php

    - adjust file path so it will alwayd use file on theme folder

---

## Version 0.1.18 - 09/08/2024

### source/scss/

    - update SCSS starter

---

## Version 0.1.17 - 09/08/2024

### source/scss

    - update SCSS starter

### inc/functions-theme-setup.php

    - add function to show RankMath meta keyword

---

## Version 0.1.16 - 04/07/2024

### inc/functions-plugin.php

    - update ACF version to 6.3.3

---

## Version 0.1.15 - 04/07/2024

### source/scss/config/_extend.scss
### source/scss/config/_mixin.scss
### source/scss/_config_.scss

    - update styling presets

---

## Version 0.1.14 - 04/07/2024

### inc/functions-basic-auth.php

    - add basic auth function

---

## Version 0.1.12 - 17/05/2024

### inc/functions-theme-setup.php

    - fix login_headertitle to login_headertext for newer wordpress

---

## Version 0.1.11 - 16/05/2024

### inc/functions-custom.php

    - fix getCurrentLang() function on get_locale() part

### header.php

    - fix format-detection meta tag to use ""

---

## Version 0.1.8 - 22/02/2024

### inc/functions-theme-setup.php

    - update admin background hook

---

## Version 0.1.7 - 05/02/2024

### inc/functions-custom.php

    - update admin menu separator code

### inc/functions-theme-setup.php

    - update admin menu separator data and code

### source/scss/tmdr-admin-color-scheme.scss

    - add admin menu separator styling

---

## Version 0.1.6 - 14/10/2023

### changelog.md

    - standarise writing

### layout.scss

    - remove bootstrap component
    - change `@import` to `@use` for _init-bootstrap.scss

### _init_bootstrap.scss

    - add all bootstrap component

---

## Version 0.1.5 - 17/10/2023

### functions-custom.php

    - added `show_debug_helper()` function

### functions-plugin.php

    - added Wordfence as a recommended plugin
    
### functions-theme-setup.php

    - add new admin color scheme

### header.php

    - add `show_debug_console()` example

### tmdr-admin-color-scheme.scss

    - new file added

### template-parts/debug-console.php

    - new file added

---

## Version 0.1.4 - 03/10/2023

### funcstions.php

    - fix file path

---

## Version 0.1.3 - 15/09/2023

### function-style-script.php

    - fix google font integration

### functions-theme-setup.php

    - add javascript to change language switcher palcement on login page

---

## Version 0.1.2 - 07/09/2023

### change-log.md

    - add `change-log.md` file

---

## Version 0.1.1 - 07/09/2023

### style.css

    - add `Starter Version`

### functions-acf.php

    - update comment
    - change `TMDR Theme Setting` option page -> `Theme Setting`
    - change `TMDR Theme Setting` menu slug from `tmdr-theme-setting` -> `theme-setting`
    - change `General Setting` option sub-page -> `Login `
    - change `Login Image` input field name -> `Login Background Image`

### functions-custom.php

    - add `add_admin_menu_separator` function

### functions-theme-setup.php

    - update ACF integration for background image

### _init-bootstrap.scss

    - add Bootstrap Nav scss component

### _mixin.scss

    - update elypsis mixin

### tmdr-admins.scss

    - change `%loginLogoSetting` height -> max-height
    - change `%loginLogoSetting` background-size cover -> contain
    - add `%loginLogoSetting` background-position center

### header.php

    - add class `navbar-nav` to menu `ul`
    - change `item_wrap` -> `items_wrap`