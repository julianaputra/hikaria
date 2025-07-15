// Import custom transition functions from the Timedoor module.
import { slideUp, slideDown, slideToggle, fadeOut, fadeIn, fadeToggle } from './modules/transitions';

// Import specific Bootstrap components for modular use in the project.
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import Modal from 'bootstrap/js/dist/modal';
import Tabs from 'bootstrap/js/dist/tab';

/**
 * Coding Standards
 * ===========================
 * 1. Functionality Splitting:
 *    - Create distinct, single-purpose functions to improve readability and reusability.
 * 2. Modular Imports:
 *    - Import only the required modules to reduce bundle size and enhance maintainability.
 * 3. Event Listeners:
 *    - Always wrap initialization code inside `DOMContentLoaded` to ensure the DOM is fully loaded.
 */

function hello() {
    const d = new Date()
    let year = d.getFullYear()
    console.log("%c ", "color: #FFFFFF; font-size: 20px"), 
    console.log("%c©" + year + " Timedoor Indonesia.", "color: #FFFFFF; font-size: 25px"), 
    console.log("%cAll rights reserved.", "color: #FFFFFF; font-size: 16px"), 
    console.log("%c ", "color: #FFFFFF; font-size: 20px") 
}

function checkNavbarScrolled() {
    const navbarPrimaryEl = document.querySelector('.custom-navbar')

    if (navbarPrimaryEl) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbarPrimaryEl.classList.add('scrolled')
            } else {
                navbarPrimaryEl.classList.remove('scrolled')
            }
        })
    }
}

function navbarMegaMenu() {
    const childMenus = document.querySelectorAll('.menu-item-has-children');
    const megaMenus = document.querySelectorAll('.menu-item-mega-menu');

    if (!childMenus.length && !megaMenus.length) return;

    // Combine both childMenus and megaMenus into one array
    const menus = [...childMenus, ...megaMenus];

    menus.forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.preventDefault();

            // Close other menus first
            menus.forEach(menuIn => {
                if (menu !== menuIn) {
                    const subMenu = menuIn.querySelector('.sub-menu');
                    const megaMenu = menuIn.querySelector('.mega-menu');
                    if (subMenu) fadeOut(subMenu, 200);
                    if (megaMenu) slideUp(megaMenu);
                }
            });

            // Toggle the visibility of the clicked menu's sub-menu or mega-menu
            const subMenu = menu.querySelector('.sub-menu');
            const megaMenu = menu.querySelector('.mega-menu');
            if (subMenu) fadeToggle(subMenu, 200, () => {
                menu.classList.toggle('is-open');
            });
            if (megaMenu) slideToggle(megaMenu, 400, () => {
                menu.classList.toggle('is-open');
            });
        });

        // Add event listener for sub-menus and mega-menus to stop propagation
        const subMenu = menu.querySelector('.sub-menu');
        const megaMenu = menu.querySelector('.mega-menu');
        if (subMenu) {
            subMenu.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
        if (megaMenu) {
            megaMenu.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    hello()
    checkNavbarScrolled()
    navbarMegaMenu()
});

// Setup country code
import intlTelInput from 'intl-tel-input';

function initIntlTelInput() {
    const phoneInput = document.querySelector('#billing_phone');
    if (!phoneInput) {
        console.warn('No #billing_phone field found.');
        return;
    }

    if (phoneInput.classList.contains('iti-initialized')) return;
    phoneInput.classList.add('iti-initialized');

    const iti = intlTelInput(phoneInput, {
        initialCountry: 'id',
        preferredCountries: ['id', 'sg', 'my', 'us', 'gb'],
        nationalMode: false,
        autoPlaceholder: 'polite',
        formatOnDisplay: true,
        utilsScript: '/wp-content/themes/tmdrxhikaria/assets/js/utils.js'
    });

    window.iti = iti;

    iti.promise.then(() => {
        // Ambil raw input dan parse ke format internasional
        const raw = phoneInput.value.trim();
        const parsed = raw.startsWith('+') ? raw : '+62' + raw;
        iti.setNumber(parsed);

        console.log('Formatted Number:', iti.getNumber());

        const form = document.querySelector('form.checkout');
        if (form) {
            form.addEventListener('submit', () => {
                const rawSubmit = phoneInput.value.trim();
                const parsedSubmit = rawSubmit.startsWith('+') ? rawSubmit : '+62' + rawSubmit;
                iti.setNumber(parsedSubmit);

                if (iti.isValidNumber()) {
                    phoneInput.value = iti.getNumber();
                } else {
                    console.warn('Invalid number format');
                }
            });
        }

        // Auto insert country dial code on change if input is empty
        phoneInput.addEventListener('countrychange', () => {
            if (phoneInput.value.trim() === '') {
                const dialCode = iti.getSelectedCountryData().dialCode;
                phoneInput.value = `+${dialCode}`;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initIntlTelInput);
jQuery(document.body).on('updated_checkout', initIntlTelInput);
