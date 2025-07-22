/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/layout.js":
/*!*****************************!*\
  !*** ./source/js/layout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/transitions */ "./source/js/modules/transitions.js");
/* harmony import */ var bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/offcanvas */ "./node_modules/bootstrap/js/dist/offcanvas.js");
/* harmony import */ var bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/dist/tab */ "./node_modules/bootstrap/js/dist/tab.js");
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/build/js/intlTelInput.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Import custom transition functions from the Timedoor module.


// Import specific Bootstrap components for modular use in the project.




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
  var d = new Date();
  var year = d.getFullYear();
  console.log("%c ", "color: #FFFFFF; font-size: 20px"), console.log("%c©" + year + " Timedoor Indonesia.", "color: #FFFFFF; font-size: 25px"), console.log("%cAll rights reserved.", "color: #FFFFFF; font-size: 16px"), console.log("%c ", "color: #FFFFFF; font-size: 20px");
}
function checkNavbarScrolled() {
  var navbarPrimaryEl = document.querySelector('.custom-navbar');
  if (navbarPrimaryEl) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbarPrimaryEl.classList.add('scrolled');
      } else {
        navbarPrimaryEl.classList.remove('scrolled');
      }
    });
  }
}
function navbarMegaMenu() {
  var childMenus = document.querySelectorAll('.menu-item-has-children');
  var megaMenus = document.querySelectorAll('.menu-item-mega-menu');
  if (!childMenus.length && !megaMenus.length) return;

  // Combine both childMenus and megaMenus into one array
  var menus = [].concat(_toConsumableArray(childMenus), _toConsumableArray(megaMenus));
  menus.forEach(function (menu) {
    menu.addEventListener('click', function (e) {
      e.preventDefault();

      // Close other menus first
      menus.forEach(function (menuIn) {
        if (menu !== menuIn) {
          var _subMenu = menuIn.querySelector('.sub-menu');
          var _megaMenu = menuIn.querySelector('.mega-menu');
          if (_subMenu) (0,_modules_transitions__WEBPACK_IMPORTED_MODULE_0__.fadeOut)(_subMenu, 200);
          if (_megaMenu) (0,_modules_transitions__WEBPACK_IMPORTED_MODULE_0__.slideUp)(_megaMenu);
        }
      });

      // Toggle the visibility of the clicked menu's sub-menu or mega-menu
      var subMenu = menu.querySelector('.sub-menu');
      var megaMenu = menu.querySelector('.mega-menu');
      if (subMenu) (0,_modules_transitions__WEBPACK_IMPORTED_MODULE_0__.fadeToggle)(subMenu, 200, function () {
        menu.classList.toggle('is-open');
      });
      if (megaMenu) (0,_modules_transitions__WEBPACK_IMPORTED_MODULE_0__.slideToggle)(megaMenu, 400, function () {
        menu.classList.toggle('is-open');
      });
    });

    // Add event listener for sub-menus and mega-menus to stop propagation
    var subMenu = menu.querySelector('.sub-menu');
    var megaMenu = menu.querySelector('.mega-menu');
    if (subMenu) {
      subMenu.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
    if (megaMenu) {
      megaMenu.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  hello();
  checkNavbarScrolled();
  navbarMegaMenu();
});

// Setup country code

function initIntlTelInput() {
  var phoneInput = document.querySelector('#billing_phone');
  if (!phoneInput) {
    console.warn('No #billing_phone field found.');
    return;
  }
  if (phoneInput.classList.contains('iti-initialized')) return;
  phoneInput.classList.add('iti-initialized');
  var iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_4___default()(phoneInput, {
    initialCountry: 'id',
    preferredCountries: ['id', 'sg', 'my', 'us', 'gb'],
    nationalMode: false,
    autoPlaceholder: 'polite',
    formatOnDisplay: true,
    utilsScript: '/wp-content/themes/tmdrxhikaria/assets/js/utils.js'
  });
  window.iti = iti;
  iti.promise.then(function () {
    // Ambil raw input dan parse ke format internasional
    var raw = phoneInput.value.trim();
    var parsed = raw.startsWith('+') ? raw : '+62' + raw;
    iti.setNumber(parsed);
    console.log('Formatted Number:', iti.getNumber());
    var form = document.querySelector('form.checkout');
    if (form) {
      form.addEventListener('submit', function () {
        var rawSubmit = phoneInput.value.trim();
        var parsedSubmit = rawSubmit.startsWith('+') ? rawSubmit : '+62' + rawSubmit;
        iti.setNumber(parsedSubmit);
        if (iti.isValidNumber()) {
          phoneInput.value = iti.getNumber();
        } else {
          console.warn('Invalid number format');
        }
      });
    }

    // Auto insert country dial code on change if input is empty
    phoneInput.addEventListener('countrychange', function () {
      if (phoneInput.value.trim() === '') {
        var dialCode = iti.getSelectedCountryData().dialCode;
        phoneInput.value = "+".concat(dialCode);
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', initIntlTelInput);
jQuery(document.body).on('updated_checkout', initIntlTelInput);

// close navbar on click menu in mobile
document.querySelectorAll('.custom-navbar .menu-item').forEach(function (item) {
  item.addEventListener('click', function () {
    if (window.innerWidth < 768) {
      var offcanvasEl = document.querySelector('.offcanvas.show');
      if (offcanvasEl) {
        var bsOffcanvas = bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_1___default().getInstance(offcanvasEl);
        if (bsOffcanvas) bsOffcanvas.hide();
      }
    }
  });
});

/***/ }),

/***/ "./source/js/modules/transitions.js":
/*!******************************************!*\
  !*** ./source/js/modules/transitions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeIn: () => (/* binding */ fadeIn),
/* harmony export */   fadeOut: () => (/* binding */ fadeOut),
/* harmony export */   fadeToggle: () => (/* binding */ fadeToggle),
/* harmony export */   slideDown: () => (/* binding */ slideDown),
/* harmony export */   slideToggle: () => (/* binding */ slideToggle),
/* harmony export */   slideUp: () => (/* binding */ slideUp)
/* harmony export */ });
/**
 * transitions.js 
 * Animation module for sliding and fading effects.
 * Created by Timedoor Indonesia
 * Version 1.0.2
 */

var initialDuration = 400;

/**
 * Function to slide up an element
 * @param {Element} target - The DOM element to slide up.
 * @param {number} [duration=initialDuration] - Duration of the animation in milliseconds.
 * @param {Function} [callback] - Optional callback function to be executed after the animation completes.
 */
var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initialDuration;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var callbackTiming = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'end';
  if (target.isAnimating) return; // Prevent overlapping animations
  target.isAnimating = true;
  if (callbackTiming === 'start' && typeof callback === 'function') callback(); // Trigger callback at the start

  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.boxSizing = "border-box";
  target.style.height = "".concat(target.offsetHeight, "px");
  target.offsetHeight; // Force reflow
  target.style.overflow = "hidden";
  target.style.height = "0";
  target.style.paddingTop = "0";
  target.style.paddingBottom = "0";
  target.style.marginTop = "0";
  target.style.marginBottom = "0";
  window.setTimeout(function () {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.isAnimating = false;
    if (callbackTiming === 'end' && typeof callback === 'function') callback(); // Trigger callback at the end
  }, duration);
};

/**
 * Function to slide down an element
 * @param {Element} target - The DOM element to slide down.
 * @param {number} [duration=initialDuration] - Duration of the animation in milliseconds.
 * @param {Function} [callback] - Optional callback function to be executed after the animation completes.
 */
var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initialDuration;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var callbackTiming = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'end';
  if (target.isAnimating) return; // Prevent overlapping animations
  target.isAnimating = true;
  if (callbackTiming === 'start' && typeof callback === 'function') callback(); // Trigger callback at the start

  target.style.removeProperty("display");
  var display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  var height = target.offsetHeight; // Get full height
  target.style.overflow = "hidden";
  target.style.height = "0";
  target.style.paddingTop = "0";
  target.style.paddingBottom = "0";
  target.style.marginTop = "0";
  target.style.marginBottom = "0";
  target.offsetHeight; // Force reflow
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.height = "".concat(height, "px");
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(function () {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.isAnimating = false;
    if (callbackTiming === 'end' && typeof callback === 'function') callback(); // Trigger callback at the end
  }, duration);
};

/**
 * Function to toggle between slide up and down
 * @param {Element} target - The DOM element to toggle.
 * @param {number} [duration=initialDuration] - Duration of the animation in milliseconds.
 * @param {Function} [callback] - Optional callback function to be executed after the animation completes.
 */
var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initialDuration;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var callbackTiming = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'end';
  if (window.getComputedStyle(target).display === "none") {
    slideDown(target, duration, callback, callbackTiming);
  } else {
    slideUp(target, duration, callback, callbackTiming);
  }
};

/**
 * Function to fade out an element
 * @param {Element} target - The DOM element to fade out.
 * @param {number} [duration=initialDuration] - Duration of the animation in milliseconds.
 * @param {Function} [callback] - Optional callback function to be executed after the animation completes.
 */
var fadeOut = function fadeOut(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initialDuration;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var callbackTiming = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'end';
  if (target.isAnimating) return; // Prevent overlapping animations
  target.isAnimating = true;
  if (callbackTiming === 'start' && typeof callback === 'function') callback(); // Trigger callback at the start

  target.style.transitionProperty = "opacity";
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.opacity = "1";
  window.setTimeout(function () {
    target.style.opacity = "0";
  }, 0);
  window.setTimeout(function () {
    target.style.display = "none";
    target.style.removeProperty("opacity");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("transition-duration");
    target.isAnimating = false;
    if (callbackTiming === 'end' && typeof callback === 'function') callback(); // Trigger callback at the end
  }, duration);
};

/**
 * Function to fade in an element
 * @param {Element} target - The DOM element to fade in.
 * @param {number} [duration=initialDuration] - Duration of the animation in milliseconds.
 * @param {Function} [callback] - Optional callback function to be executed after the animation completes.
 */
var fadeIn = function fadeIn(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initialDuration;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var callbackTiming = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'end';
  if (target.isAnimating) return; // Prevent overlapping animations
  target.isAnimating = true;
  if (callbackTiming === 'start' && typeof callback === 'function') callback(); // Trigger callback at the start

  target.style.display = "block";
  target.style.opacity = "0";
  target.style.transitionProperty = "opacity";
  target.style.transitionDuration = "".concat(duration, "ms");
  window.setTimeout(function () {
    target.style.opacity = "1";
  }, 0);
  window.setTimeout(function () {
    target.style.removeProperty("opacity");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("transition-duration");
    target.isAnimating = false;
    if (callbackTiming === 'end' && typeof callback === 'function') callback(); // Trigger callback at the end
  }, duration);
};

/**
 * Function to toggle between fading in and out
 * @param {Element} target - The DOM element to toggle.
 * @param {number} [duration=initialDuration] - Duration of the animation in milliseconds.
 * @param {Function} [callback] - Optional callback function to be executed after the animation completes.
 */
var fadeToggle = function fadeToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initialDuration;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var callbackTiming = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'end';
  if (window.getComputedStyle(target).display === "none") {
    fadeIn(target, duration, callback, callbackTiming);
  } else {
    fadeOut(target, duration, callback, callbackTiming);
  }
};

// Export for the namespace


// Example Usage
// document.querySelector('.button').addEventListener('click', () => {
//     fadeToggle(document.querySelector('.target'), 200);
// });

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/base-component.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/base-component.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap base-component.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./dom/data.js */ "./node_modules/bootstrap/js/dist/dom/data.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./util/config.js */ "./node_modules/bootstrap/js/dist/util/config.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Data, EventHandler, Config, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const VERSION = '5.3.1';

  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = index_js.getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      index_js.executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static getInstance(element) {
      return Data.get(index_js.getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  }

  return BaseComponent;

}));
//# sourceMappingURL=base-component.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/data.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/data.js ***!
  \****************************************************/
/***/ (function(module) {

/*!
  * Bootstrap data.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  const elementMap = new Map();
  const data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      const instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  return data;

}));
//# sourceMappingURL=data.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/event-handler.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/event-handler.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap event-handler.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage
  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string';
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      const $ = index_js.getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }

  return EventHandler;

}));
//# sourceMappingURL=event-handler.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/manipulator.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/manipulator.js ***!
  \***********************************************************/
/***/ (function(module) {

/*!
  * Bootstrap manipulator.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === '' || value === 'null') {
      return null;
    }
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }
  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };

  return Manipulator;

}));
//# sourceMappingURL=manipulator.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/selector-engine.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/selector-engine.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap selector-engine.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href');

      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      }

      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }
    return index_js.parseSelector(selector);
  };
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !index_js.isDisabled(el) && index_js.isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };

  return SelectorEngine;

}));
//# sourceMappingURL=selector-engine.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/modal.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/modal.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap modal.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/backdrop.js */ "./node_modules/bootstrap/js/dist/util/backdrop.js"), __webpack_require__(/*! ./util/component-functions.js */ "./node_modules/bootstrap/js/dist/util/component-functions.js"), __webpack_require__(/*! ./util/focustrap.js */ "./node_modules/bootstrap/js/dist/util/focustrap.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./util/scrollbar.js */ "./node_modules/bootstrap/js/dist/util/scrollbar.js")) :
  0;
})(this, (function (BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'modal';
  const DATA_KEY = 'bs.modal';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
  const Default = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };

  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY);
      EventHandler.off(this._dialog, EVENT_KEY);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }

    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      index_js.reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      // return if the following background transition hasn't yet completed
      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }

    /**
     * The following methods are used to handle overflowing modals
     */

    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = index_js.isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = index_js.isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN, () => {
        if (index_js.isVisible(this)) {
          this.focus();
        }
      });
    });

    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  componentFunctions_js.enableDismissTrigger(Modal);

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Modal);

  return Modal;

}));
//# sourceMappingURL=modal.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/offcanvas.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/offcanvas.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap offcanvas.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/backdrop.js */ "./node_modules/bootstrap/js/dist/util/backdrop.js"), __webpack_require__(/*! ./util/component-functions.js */ "./node_modules/bootstrap/js/dist/util/component-functions.js"), __webpack_require__(/*! ./util/focustrap.js */ "./node_modules/bootstrap/js/dist/util/focustrap.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./util/scrollbar.js */ "./node_modules/bootstrap/js/dist/util/scrollbar.js")) :
  0;
})(this, (function (BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'offcanvas';
  const DATA_KEY = 'bs.offcanvas';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="offcanvas"]';
  const Default = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };

  /**
   * Class definition
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW, CLASS_NAME_HIDING);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }

    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };

      // 'static' option will be translated to true, and booleans will keep their value
      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (index_js.isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN, () => {
      // focus on trigger when it is closed
      if (index_js.isVisible(this)) {
        this.focus();
      }
    });

    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  componentFunctions_js.enableDismissTrigger(Offcanvas);

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Offcanvas);

  return Offcanvas;

}));
//# sourceMappingURL=offcanvas.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/tab.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/dist/tab.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap tab.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (BaseComponent, EventHandler, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'tab';
  const DATA_KEY = 'bs.tab';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}`;
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const HOME_KEY = 'Home';
  const END_KEY = 'End';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_DROPDOWN = 'dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = '.nav-item, .list-group-item';
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;

  /**
   * Class definition
   */

  class Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
        // TODO: should throw exception in v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      }

      // Set up initial aria attributes
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    }

    // Getters
    static get NAME() {
      return NAME;
    }

    // Public
    show() {
      // Shows this elem and deactivate the active sibling if exists
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }

      // Search for active tab on same parent to deactivate it
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }

    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW);
          return;
        }
        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW);
          return;
        }
        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
      event.preventDefault();
      const children = this._getChildren().filter(element => !index_js.isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = index_js.getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute('aria-selected', isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }
      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }
      this._setAttributeIfNotExists(child, 'role', 'tab');

      // set attributes to the related panel too
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, 'role', 'tabpanel');
      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element = SelectorEngine.findOne(selector, outerElem);
        if (element) {
          element.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW);
      outerElem.setAttribute('aria-expanded', open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }

    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }

    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (index_js.isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });

  /**
   * Initialize on focus
   */
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Tab);

  return Tab;

}));
//# sourceMappingURL=tab.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/backdrop.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/backdrop.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap backdrop.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./config.js */ "./node_modules/bootstrap/js/dist/util/config.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (EventHandler, Config, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'backdrop';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`;
  const Default = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };

  const DefaultType = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };

  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    show(callback) {
      if (!this._config.isVisible) {
        index_js.execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        index_js.reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW);
      this._emulateAnimation(() => {
        index_js.execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        index_js.execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW);
      this._emulateAnimation(() => {
        this.dispose();
        index_js.execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = index_js.getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        index_js.execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      index_js.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }

  return Backdrop;

}));
//# sourceMappingURL=backdrop.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/component-functions.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/component-functions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
  * Bootstrap component-functions.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (exports, EventHandler, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (index_js.isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  exports.enableDismissTrigger = enableDismissTrigger;

  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=component-functions.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/config.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/config.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap config.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Manipulator, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return {
        ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = index_js.isElement(value) ? 'element' : index_js.toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  }

  return Config;

}));
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/focustrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/focustrap.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap focustrap.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./config.js */ "./node_modules/bootstrap/js/dist/util/config.js")) :
  0;
})(this, (function (EventHandler, SelectorEngine, Config) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'focustrap';
  const DATA_KEY = 'bs.focustrap';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };

  const DefaultType = {
    autofocus: 'boolean',
    trapElement: 'element'
  };

  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY);
    }

    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }

  return FocusTrap;

}));
//# sourceMappingURL=focustrap.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/index.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*!
  * Bootstrap index.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';

  /**
   * Properly escape IDs selectors to handle weird IDs
   * @param {string} selector
   * @returns {string}
   */
  const parseSelector = selector => {
    if (selector && window.CSS && window.CSS.escape) {
      // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };

  // Shout-out Angus Croll (https://goo.gl/pxwQGp)
  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  /**
   * Public Util API
   */

  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }
    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }
    return typeof object.nodeType !== 'undefined';
  };
  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest('details:not([open])');
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest('summary');
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  const noop = () => {};

  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }
    return null;
  };
  const DOMContentLoadedCallbacks = [];
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
  };
  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */
  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);

    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  exports.defineJQueryPlugin = defineJQueryPlugin;
  exports.execute = execute;
  exports.executeAfterTransition = executeAfterTransition;
  exports.findShadowRoot = findShadowRoot;
  exports.getElement = getElement;
  exports.getNextActiveElement = getNextActiveElement;
  exports.getTransitionDurationFromElement = getTransitionDurationFromElement;
  exports.getUID = getUID;
  exports.getjQuery = getjQuery;
  exports.isDisabled = isDisabled;
  exports.isElement = isElement;
  exports.isRTL = isRTL;
  exports.isVisible = isVisible;
  exports.noop = noop;
  exports.onDOMContentLoaded = onDOMContentLoaded;
  exports.parseSelector = parseSelector;
  exports.reflow = reflow;
  exports.toType = toType;
  exports.triggerTransitionEnd = triggerTransitionEnd;

  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/scrollbar.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/scrollbar.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap scrollbar.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Manipulator, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';

  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    // Public
    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (index_js.isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  }

  return ScrollBarHelper;

}));
//# sourceMappingURL=scrollbar.js.map


/***/ }),

/***/ "./node_modules/intl-tel-input/build/js/intlTelInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/js/intlTelInput.js ***!
  \**************************************************************/
/***/ ((module) => {

/*
 * International Telephone Input v25.3.1
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// UMD
(function(factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    window.intlTelInput = factory();
  }
}(() => {

var factoryOutput = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/js/intl-tel-input.ts
  var intl_tel_input_exports = {};
  __export(intl_tel_input_exports, {
    Iti: () => Iti,
    default: () => intl_tel_input_default
  });

  // src/js/intl-tel-input/data.ts
  var rawCountryData = [
    [
      "af",
      // Afghanistan
      "93"
    ],
    [
      "ax",
      // Åland Islands
      "358",
      1
    ],
    [
      "al",
      // Albania
      "355"
    ],
    [
      "dz",
      // Algeria
      "213"
    ],
    [
      "as",
      // American Samoa
      "1",
      5,
      ["684"]
    ],
    [
      "ad",
      // Andorra
      "376"
    ],
    [
      "ao",
      // Angola
      "244"
    ],
    [
      "ai",
      // Anguilla
      "1",
      6,
      ["264"]
    ],
    [
      "ag",
      // Antigua and Barbuda
      "1",
      7,
      ["268"]
    ],
    [
      "ar",
      // Argentina
      "54"
    ],
    [
      "am",
      // Armenia
      "374"
    ],
    [
      "aw",
      // Aruba
      "297"
    ],
    [
      "ac",
      // Ascension Island
      "247"
    ],
    [
      "au",
      // Australia
      "61",
      0,
      null,
      "0"
    ],
    [
      "at",
      // Austria
      "43"
    ],
    [
      "az",
      // Azerbaijan
      "994"
    ],
    [
      "bs",
      // Bahamas
      "1",
      8,
      ["242"]
    ],
    [
      "bh",
      // Bahrain
      "973"
    ],
    [
      "bd",
      // Bangladesh
      "880"
    ],
    [
      "bb",
      // Barbados
      "1",
      9,
      ["246"]
    ],
    [
      "by",
      // Belarus
      "375"
    ],
    [
      "be",
      // Belgium
      "32"
    ],
    [
      "bz",
      // Belize
      "501"
    ],
    [
      "bj",
      // Benin
      "229"
    ],
    [
      "bm",
      // Bermuda
      "1",
      10,
      ["441"]
    ],
    [
      "bt",
      // Bhutan
      "975"
    ],
    [
      "bo",
      // Bolivia
      "591"
    ],
    [
      "ba",
      // Bosnia and Herzegovina
      "387"
    ],
    [
      "bw",
      // Botswana
      "267"
    ],
    [
      "br",
      // Brazil
      "55"
    ],
    [
      "io",
      // British Indian Ocean Territory
      "246"
    ],
    [
      "vg",
      // British Virgin Islands
      "1",
      11,
      ["284"]
    ],
    [
      "bn",
      // Brunei
      "673"
    ],
    [
      "bg",
      // Bulgaria
      "359"
    ],
    [
      "bf",
      // Burkina Faso
      "226"
    ],
    [
      "bi",
      // Burundi
      "257"
    ],
    [
      "kh",
      // Cambodia
      "855"
    ],
    [
      "cm",
      // Cameroon
      "237"
    ],
    [
      "ca",
      // Canada
      "1",
      1,
      ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905"]
    ],
    [
      "cv",
      // Cape Verde
      "238"
    ],
    [
      "bq",
      // Caribbean Netherlands
      "599",
      1,
      ["3", "4", "7"]
    ],
    [
      "ky",
      // Cayman Islands
      "1",
      12,
      ["345"]
    ],
    [
      "cf",
      // Central African Republic
      "236"
    ],
    [
      "td",
      // Chad
      "235"
    ],
    [
      "cl",
      // Chile
      "56"
    ],
    [
      "cn",
      // China
      "86"
    ],
    [
      "cx",
      // Christmas Island
      "61",
      2,
      ["89164"],
      "0"
    ],
    [
      "cc",
      // Cocos (Keeling) Islands
      "61",
      1,
      ["89162"],
      "0"
    ],
    [
      "co",
      // Colombia
      "57"
    ],
    [
      "km",
      // Comoros
      "269"
    ],
    [
      "cg",
      // Congo (Brazzaville)
      "242"
    ],
    [
      "cd",
      // Congo (Kinshasa)
      "243"
    ],
    [
      "ck",
      // Cook Islands
      "682"
    ],
    [
      "cr",
      // Costa Rica
      "506"
    ],
    [
      "ci",
      // Côte d'Ivoire
      "225"
    ],
    [
      "hr",
      // Croatia
      "385"
    ],
    [
      "cu",
      // Cuba
      "53"
    ],
    [
      "cw",
      // Curaçao
      "599",
      0
    ],
    [
      "cy",
      // Cyprus
      "357"
    ],
    [
      "cz",
      // Czech Republic
      "420"
    ],
    [
      "dk",
      // Denmark
      "45"
    ],
    [
      "dj",
      // Djibouti
      "253"
    ],
    [
      "dm",
      // Dominica
      "1",
      13,
      ["767"]
    ],
    [
      "do",
      // Dominican Republic
      "1",
      2,
      ["809", "829", "849"]
    ],
    [
      "ec",
      // Ecuador
      "593"
    ],
    [
      "eg",
      // Egypt
      "20"
    ],
    [
      "sv",
      // El Salvador
      "503"
    ],
    [
      "gq",
      // Equatorial Guinea
      "240"
    ],
    [
      "er",
      // Eritrea
      "291"
    ],
    [
      "ee",
      // Estonia
      "372"
    ],
    [
      "sz",
      // Eswatini
      "268"
    ],
    [
      "et",
      // Ethiopia
      "251"
    ],
    [
      "fk",
      // Falkland Islands (Malvinas)
      "500"
    ],
    [
      "fo",
      // Faroe Islands
      "298"
    ],
    [
      "fj",
      // Fiji
      "679"
    ],
    [
      "fi",
      // Finland
      "358",
      0
    ],
    [
      "fr",
      // France
      "33"
    ],
    [
      "gf",
      // French Guiana
      "594"
    ],
    [
      "pf",
      // French Polynesia
      "689"
    ],
    [
      "ga",
      // Gabon
      "241"
    ],
    [
      "gm",
      // Gambia
      "220"
    ],
    [
      "ge",
      // Georgia
      "995"
    ],
    [
      "de",
      // Germany
      "49"
    ],
    [
      "gh",
      // Ghana
      "233"
    ],
    [
      "gi",
      // Gibraltar
      "350"
    ],
    [
      "gr",
      // Greece
      "30"
    ],
    [
      "gl",
      // Greenland
      "299"
    ],
    [
      "gd",
      // Grenada
      "1",
      14,
      ["473"]
    ],
    [
      "gp",
      // Guadeloupe
      "590",
      0
    ],
    [
      "gu",
      // Guam
      "1",
      15,
      ["671"]
    ],
    [
      "gt",
      // Guatemala
      "502"
    ],
    [
      "gg",
      // Guernsey
      "44",
      1,
      ["1481", "7781", "7839", "7911"],
      "0"
    ],
    [
      "gn",
      // Guinea
      "224"
    ],
    [
      "gw",
      // Guinea-Bissau
      "245"
    ],
    [
      "gy",
      // Guyana
      "592"
    ],
    [
      "ht",
      // Haiti
      "509"
    ],
    [
      "hn",
      // Honduras
      "504"
    ],
    [
      "hk",
      // Hong Kong SAR China
      "852"
    ],
    [
      "hu",
      // Hungary
      "36"
    ],
    [
      "is",
      // Iceland
      "354"
    ],
    [
      "in",
      // India
      "91"
    ],
    [
      "id",
      // Indonesia
      "62"
    ],
    [
      "ir",
      // Iran
      "98"
    ],
    [
      "iq",
      // Iraq
      "964"
    ],
    [
      "ie",
      // Ireland
      "353"
    ],
    [
      "im",
      // Isle of Man
      "44",
      2,
      ["1624", "74576", "7524", "7924", "7624"],
      "0"
    ],
    [
      "il",
      // Israel
      "972"
    ],
    [
      "it",
      // Italy
      "39",
      0
    ],
    [
      "jm",
      // Jamaica
      "1",
      4,
      ["876", "658"]
    ],
    [
      "jp",
      // Japan
      "81"
    ],
    [
      "je",
      // Jersey
      "44",
      3,
      ["1534", "7509", "7700", "7797", "7829", "7937"],
      "0"
    ],
    [
      "jo",
      // Jordan
      "962"
    ],
    [
      "kz",
      // Kazakhstan
      "7",
      1,
      ["33", "7"],
      "8"
    ],
    [
      "ke",
      // Kenya
      "254"
    ],
    [
      "ki",
      // Kiribati
      "686"
    ],
    [
      "xk",
      // Kosovo
      "383"
    ],
    [
      "kw",
      // Kuwait
      "965"
    ],
    [
      "kg",
      // Kyrgyzstan
      "996"
    ],
    [
      "la",
      // Laos
      "856"
    ],
    [
      "lv",
      // Latvia
      "371"
    ],
    [
      "lb",
      // Lebanon
      "961"
    ],
    [
      "ls",
      // Lesotho
      "266"
    ],
    [
      "lr",
      // Liberia
      "231"
    ],
    [
      "ly",
      // Libya
      "218"
    ],
    [
      "li",
      // Liechtenstein
      "423"
    ],
    [
      "lt",
      // Lithuania
      "370"
    ],
    [
      "lu",
      // Luxembourg
      "352"
    ],
    [
      "mo",
      // Macao SAR China
      "853"
    ],
    [
      "mg",
      // Madagascar
      "261"
    ],
    [
      "mw",
      // Malawi
      "265"
    ],
    [
      "my",
      // Malaysia
      "60"
    ],
    [
      "mv",
      // Maldives
      "960"
    ],
    [
      "ml",
      // Mali
      "223"
    ],
    [
      "mt",
      // Malta
      "356"
    ],
    [
      "mh",
      // Marshall Islands
      "692"
    ],
    [
      "mq",
      // Martinique
      "596"
    ],
    [
      "mr",
      // Mauritania
      "222"
    ],
    [
      "mu",
      // Mauritius
      "230"
    ],
    [
      "yt",
      // Mayotte
      "262",
      1,
      ["269", "639"],
      "0"
    ],
    [
      "mx",
      // Mexico
      "52"
    ],
    [
      "fm",
      // Micronesia
      "691"
    ],
    [
      "md",
      // Moldova
      "373"
    ],
    [
      "mc",
      // Monaco
      "377"
    ],
    [
      "mn",
      // Mongolia
      "976"
    ],
    [
      "me",
      // Montenegro
      "382"
    ],
    [
      "ms",
      // Montserrat
      "1",
      16,
      ["664"]
    ],
    [
      "ma",
      // Morocco
      "212",
      0,
      null,
      "0"
    ],
    [
      "mz",
      // Mozambique
      "258"
    ],
    [
      "mm",
      // Myanmar (Burma)
      "95"
    ],
    [
      "na",
      // Namibia
      "264"
    ],
    [
      "nr",
      // Nauru
      "674"
    ],
    [
      "np",
      // Nepal
      "977"
    ],
    [
      "nl",
      // Netherlands
      "31"
    ],
    [
      "nc",
      // New Caledonia
      "687"
    ],
    [
      "nz",
      // New Zealand
      "64"
    ],
    [
      "ni",
      // Nicaragua
      "505"
    ],
    [
      "ne",
      // Niger
      "227"
    ],
    [
      "ng",
      // Nigeria
      "234"
    ],
    [
      "nu",
      // Niue
      "683"
    ],
    [
      "nf",
      // Norfolk Island
      "672"
    ],
    [
      "kp",
      // North Korea
      "850"
    ],
    [
      "mk",
      // North Macedonia
      "389"
    ],
    [
      "mp",
      // Northern Mariana Islands
      "1",
      17,
      ["670"]
    ],
    [
      "no",
      // Norway
      "47",
      0
    ],
    [
      "om",
      // Oman
      "968"
    ],
    [
      "pk",
      // Pakistan
      "92"
    ],
    [
      "pw",
      // Palau
      "680"
    ],
    [
      "ps",
      // Palestinian Territories
      "970"
    ],
    [
      "pa",
      // Panama
      "507"
    ],
    [
      "pg",
      // Papua New Guinea
      "675"
    ],
    [
      "py",
      // Paraguay
      "595"
    ],
    [
      "pe",
      // Peru
      "51"
    ],
    [
      "ph",
      // Philippines
      "63"
    ],
    [
      "pl",
      // Poland
      "48"
    ],
    [
      "pt",
      // Portugal
      "351"
    ],
    [
      "pr",
      // Puerto Rico
      "1",
      3,
      ["787", "939"]
    ],
    [
      "qa",
      // Qatar
      "974"
    ],
    [
      "re",
      // Réunion
      "262",
      0,
      null,
      "0"
    ],
    [
      "ro",
      // Romania
      "40"
    ],
    [
      "ru",
      // Russia
      "7",
      0,
      null,
      "8"
    ],
    [
      "rw",
      // Rwanda
      "250"
    ],
    [
      "ws",
      // Samoa
      "685"
    ],
    [
      "sm",
      // San Marino
      "378"
    ],
    [
      "st",
      // São Tomé & Príncipe
      "239"
    ],
    [
      "sa",
      // Saudi Arabia
      "966"
    ],
    [
      "sn",
      // Senegal
      "221"
    ],
    [
      "rs",
      // Serbia
      "381"
    ],
    [
      "sc",
      // Seychelles
      "248"
    ],
    [
      "sl",
      // Sierra Leone
      "232"
    ],
    [
      "sg",
      // Singapore
      "65"
    ],
    [
      "sx",
      // Sint Maarten
      "1",
      21,
      ["721"]
    ],
    [
      "sk",
      // Slovakia
      "421"
    ],
    [
      "si",
      // Slovenia
      "386"
    ],
    [
      "sb",
      // Solomon Islands
      "677"
    ],
    [
      "so",
      // Somalia
      "252"
    ],
    [
      "za",
      // South Africa
      "27"
    ],
    [
      "kr",
      // South Korea
      "82"
    ],
    [
      "ss",
      // South Sudan
      "211"
    ],
    [
      "es",
      // Spain
      "34"
    ],
    [
      "lk",
      // Sri Lanka
      "94"
    ],
    [
      "bl",
      // St. Barthélemy
      "590",
      1
    ],
    [
      "sh",
      // St. Helena
      "290"
    ],
    [
      "kn",
      // St. Kitts & Nevis
      "1",
      18,
      ["869"]
    ],
    [
      "lc",
      // St. Lucia
      "1",
      19,
      ["758"]
    ],
    [
      "mf",
      // St. Martin
      "590",
      2
    ],
    [
      "pm",
      // St. Pierre & Miquelon
      "508"
    ],
    [
      "vc",
      // St. Vincent & Grenadines
      "1",
      20,
      ["784"]
    ],
    [
      "sd",
      // Sudan
      "249"
    ],
    [
      "sr",
      // Suriname
      "597"
    ],
    [
      "sj",
      // Svalbard & Jan Mayen
      "47",
      1,
      ["79"]
    ],
    [
      "se",
      // Sweden
      "46"
    ],
    [
      "ch",
      // Switzerland
      "41"
    ],
    [
      "sy",
      // Syria
      "963"
    ],
    [
      "tw",
      // Taiwan
      "886"
    ],
    [
      "tj",
      // Tajikistan
      "992"
    ],
    [
      "tz",
      // Tanzania
      "255"
    ],
    [
      "th",
      // Thailand
      "66"
    ],
    [
      "tl",
      // Timor-Leste
      "670"
    ],
    [
      "tg",
      // Togo
      "228"
    ],
    [
      "tk",
      // Tokelau
      "690"
    ],
    [
      "to",
      // Tonga
      "676"
    ],
    [
      "tt",
      // Trinidad & Tobago
      "1",
      22,
      ["868"]
    ],
    [
      "tn",
      // Tunisia
      "216"
    ],
    [
      "tr",
      // Turkey
      "90"
    ],
    [
      "tm",
      // Turkmenistan
      "993"
    ],
    [
      "tc",
      // Turks & Caicos Islands
      "1",
      23,
      ["649"]
    ],
    [
      "tv",
      // Tuvalu
      "688"
    ],
    [
      "ug",
      // Uganda
      "256"
    ],
    [
      "ua",
      // Ukraine
      "380"
    ],
    [
      "ae",
      // United Arab Emirates
      "971"
    ],
    [
      "gb",
      // United Kingdom
      "44",
      0,
      null,
      "0"
    ],
    [
      "us",
      // United States
      "1",
      0
    ],
    [
      "uy",
      // Uruguay
      "598"
    ],
    [
      "vi",
      // U.S. Virgin Islands
      "1",
      24,
      ["340"]
    ],
    [
      "uz",
      // Uzbekistan
      "998"
    ],
    [
      "vu",
      // Vanuatu
      "678"
    ],
    [
      "va",
      // Vatican City
      "39",
      1,
      ["06698"]
    ],
    [
      "ve",
      // Venezuela
      "58"
    ],
    [
      "vn",
      // Vietnam
      "84"
    ],
    [
      "wf",
      // Wallis & Futuna
      "681"
    ],
    [
      "eh",
      // Western Sahara
      "212",
      1,
      ["5288", "5289"],
      "0"
    ],
    [
      "ye",
      // Yemen
      "967"
    ],
    [
      "zm",
      // Zambia
      "260"
    ],
    [
      "zw",
      // Zimbabwe
      "263"
    ]
  ];
  var allCountries = [];
  for (let i = 0; i < rawCountryData.length; i++) {
    const c = rawCountryData[i];
    allCountries[i] = {
      name: "",
      // this is now populated in the plugin
      iso2: c[0],
      dialCode: c[1],
      priority: c[2] || 0,
      areaCodes: c[3] || null,
      nodeById: {},
      nationalPrefix: c[4] || null
    };
  }
  var data_default = allCountries;

  // src/js/intl-tel-input/i18n/en/countries.ts
  var countryTranslations = {
    ad: "Andorra",
    ae: "United Arab Emirates",
    af: "Afghanistan",
    ag: "Antigua & Barbuda",
    ai: "Anguilla",
    al: "Albania",
    am: "Armenia",
    ao: "Angola",
    ar: "Argentina",
    as: "American Samoa",
    at: "Austria",
    au: "Australia",
    aw: "Aruba",
    ax: "\xC5land Islands",
    az: "Azerbaijan",
    ba: "Bosnia & Herzegovina",
    bb: "Barbados",
    bd: "Bangladesh",
    be: "Belgium",
    bf: "Burkina Faso",
    bg: "Bulgaria",
    bh: "Bahrain",
    bi: "Burundi",
    bj: "Benin",
    bl: "St. Barth\xE9lemy",
    bm: "Bermuda",
    bn: "Brunei",
    bo: "Bolivia",
    bq: "Caribbean Netherlands",
    br: "Brazil",
    bs: "Bahamas",
    bt: "Bhutan",
    bw: "Botswana",
    by: "Belarus",
    bz: "Belize",
    ca: "Canada",
    cc: "Cocos (Keeling) Islands",
    cd: "Congo - Kinshasa",
    cf: "Central African Republic",
    cg: "Congo - Brazzaville",
    ch: "Switzerland",
    ci: "C\xF4te d\u2019Ivoire",
    ck: "Cook Islands",
    cl: "Chile",
    cm: "Cameroon",
    cn: "China",
    co: "Colombia",
    cr: "Costa Rica",
    cu: "Cuba",
    cv: "Cape Verde",
    cw: "Cura\xE7ao",
    cx: "Christmas Island",
    cy: "Cyprus",
    cz: "Czechia",
    de: "Germany",
    dj: "Djibouti",
    dk: "Denmark",
    dm: "Dominica",
    do: "Dominican Republic",
    dz: "Algeria",
    ec: "Ecuador",
    ee: "Estonia",
    eg: "Egypt",
    eh: "Western Sahara",
    er: "Eritrea",
    es: "Spain",
    et: "Ethiopia",
    fi: "Finland",
    fj: "Fiji",
    fk: "Falkland Islands",
    fm: "Micronesia",
    fo: "Faroe Islands",
    fr: "France",
    ga: "Gabon",
    gb: "United Kingdom",
    gd: "Grenada",
    ge: "Georgia",
    gf: "French Guiana",
    gg: "Guernsey",
    gh: "Ghana",
    gi: "Gibraltar",
    gl: "Greenland",
    gm: "Gambia",
    gn: "Guinea",
    gp: "Guadeloupe",
    gq: "Equatorial Guinea",
    gr: "Greece",
    gt: "Guatemala",
    gu: "Guam",
    gw: "Guinea-Bissau",
    gy: "Guyana",
    hk: "Hong Kong SAR China",
    hn: "Honduras",
    hr: "Croatia",
    ht: "Haiti",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    im: "Isle of Man",
    in: "India",
    io: "British Indian Ocean Territory",
    iq: "Iraq",
    ir: "Iran",
    is: "Iceland",
    it: "Italy",
    je: "Jersey",
    jm: "Jamaica",
    jo: "Jordan",
    jp: "Japan",
    ke: "Kenya",
    kg: "Kyrgyzstan",
    kh: "Cambodia",
    ki: "Kiribati",
    km: "Comoros",
    kn: "St. Kitts & Nevis",
    kp: "North Korea",
    kr: "South Korea",
    kw: "Kuwait",
    ky: "Cayman Islands",
    kz: "Kazakhstan",
    la: "Laos",
    lb: "Lebanon",
    lc: "St. Lucia",
    li: "Liechtenstein",
    lk: "Sri Lanka",
    lr: "Liberia",
    ls: "Lesotho",
    lt: "Lithuania",
    lu: "Luxembourg",
    lv: "Latvia",
    ly: "Libya",
    ma: "Morocco",
    mc: "Monaco",
    md: "Moldova",
    me: "Montenegro",
    mf: "St. Martin",
    mg: "Madagascar",
    mh: "Marshall Islands",
    mk: "North Macedonia",
    ml: "Mali",
    mm: "Myanmar (Burma)",
    mn: "Mongolia",
    mo: "Macao SAR China",
    mp: "Northern Mariana Islands",
    mq: "Martinique",
    mr: "Mauritania",
    ms: "Montserrat",
    mt: "Malta",
    mu: "Mauritius",
    mv: "Maldives",
    mw: "Malawi",
    mx: "Mexico",
    my: "Malaysia",
    mz: "Mozambique",
    na: "Namibia",
    nc: "New Caledonia",
    ne: "Niger",
    nf: "Norfolk Island",
    ng: "Nigeria",
    ni: "Nicaragua",
    nl: "Netherlands",
    no: "Norway",
    np: "Nepal",
    nr: "Nauru",
    nu: "Niue",
    nz: "New Zealand",
    om: "Oman",
    pa: "Panama",
    pe: "Peru",
    pf: "French Polynesia",
    pg: "Papua New Guinea",
    ph: "Philippines",
    pk: "Pakistan",
    pl: "Poland",
    pm: "St. Pierre & Miquelon",
    pr: "Puerto Rico",
    ps: "Palestinian Territories",
    pt: "Portugal",
    pw: "Palau",
    py: "Paraguay",
    qa: "Qatar",
    re: "R\xE9union",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    rw: "Rwanda",
    sa: "Saudi Arabia",
    sb: "Solomon Islands",
    sc: "Seychelles",
    sd: "Sudan",
    se: "Sweden",
    sg: "Singapore",
    sh: "St. Helena",
    si: "Slovenia",
    sj: "Svalbard & Jan Mayen",
    sk: "Slovakia",
    sl: "Sierra Leone",
    sm: "San Marino",
    sn: "Senegal",
    so: "Somalia",
    sr: "Suriname",
    ss: "South Sudan",
    st: "S\xE3o Tom\xE9 & Pr\xEDncipe",
    sv: "El Salvador",
    sx: "Sint Maarten",
    sy: "Syria",
    sz: "Eswatini",
    tc: "Turks & Caicos Islands",
    td: "Chad",
    tg: "Togo",
    th: "Thailand",
    tj: "Tajikistan",
    tk: "Tokelau",
    tl: "Timor-Leste",
    tm: "Turkmenistan",
    tn: "Tunisia",
    to: "Tonga",
    tr: "Turkey",
    tt: "Trinidad & Tobago",
    tv: "Tuvalu",
    tw: "Taiwan",
    tz: "Tanzania",
    ua: "Ukraine",
    ug: "Uganda",
    us: "United States",
    uy: "Uruguay",
    uz: "Uzbekistan",
    va: "Vatican City",
    vc: "St. Vincent & Grenadines",
    ve: "Venezuela",
    vg: "British Virgin Islands",
    vi: "U.S. Virgin Islands",
    vn: "Vietnam",
    vu: "Vanuatu",
    wf: "Wallis & Futuna",
    ws: "Samoa",
    ye: "Yemen",
    yt: "Mayotte",
    za: "South Africa",
    zm: "Zambia",
    zw: "Zimbabwe"
  };
  var countries_default = countryTranslations;

  // src/js/intl-tel-input/i18n/en/interface.ts
  var interfaceTranslations = {
    selectedCountryAriaLabel: "Selected country",
    noCountrySelected: "No country selected",
    countryListAriaLabel: "List of countries",
    searchPlaceholder: "Search",
    zeroSearchResults: "No results found",
    oneSearchResult: "1 result found",
    multipleSearchResults: "${count} results found",
    // additional countries (not supported by country-list library)
    ac: "Ascension Island",
    xk: "Kosovo"
  };
  var interface_default = interfaceTranslations;

  // src/js/intl-tel-input/i18n/en/index.ts
  var allTranslations = { ...countries_default, ...interface_default };
  var en_default = allTranslations;

  // src/js/intl-tel-input.ts
  for (let i = 0; i < data_default.length; i++) {
    data_default[i].name = en_default[data_default[i].iso2];
  }
  var id = 0;
  var defaults = {
    //* Whether or not to allow the dropdown.
    allowDropdown: true,
    //* Add a placeholder in the input with an example number for the selected country.
    autoPlaceholder: "polite",
    //* Modify the parentClass.
    containerClass: "",
    //* The order of the countries in the dropdown. Defaults to alphabetical.
    countryOrder: null,
    //* Add a country search input at the top of the dropdown.
    countrySearch: true,
    //* Modify the auto placeholder.
    customPlaceholder: null,
    //* Append menu to specified element.
    dropdownContainer: null,
    //* Don't display these countries.
    excludeCountries: [],
    //* Fix the dropdown width to the input width (rather than being as wide as the longest country name).
    fixDropdownWidth: true,
    //* Format the number as the user types
    formatAsYouType: true,
    //* Format the input value during initialisation and on setNumber.
    formatOnDisplay: true,
    //* geoIp lookup function.
    geoIpLookup: null,
    //* Inject a hidden input with the name returned from this function, and on submit, populate it with the result of getNumber.
    hiddenInput: null,
    //* Internationalise the plugin text e.g. search input placeholder, country names.
    i18n: {},
    //* Initial country.
    initialCountry: "",
    //* A function to load the utils script.
    loadUtils: null,
    //* National vs international formatting for numbers e.g. placeholders and displaying existing numbers.
    nationalMode: true,
    //* Display only these countries.
    onlyCountries: [],
    //* Number type to use for placeholders.
    placeholderNumberType: "MOBILE",
    //* Show flags - for both the selected country, and in the country dropdown
    showFlags: true,
    //* Display the international dial code next to the selected flag.
    separateDialCode: false,
    //* Only allow certain chars e.g. a plus followed by numeric digits, and cap at max valid length.
    strictMode: false,
    //* Use full screen popup instead of dropdown for country list.
    useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? (
      //* We cannot just test screen size as some smartphones/website meta tags will report desktop resolutions.
      //* Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
      /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 500
    ) : false,
    //* The number type to enforce during validation.
    validationNumberTypes: ["MOBILE"]
  };
  var regionlessNanpNumbers = [
    "800",
    "822",
    "833",
    "844",
    "855",
    "866",
    "877",
    "880",
    "881",
    "882",
    "883",
    "884",
    "885",
    "886",
    "887",
    "888",
    "889"
  ];
  var getNumeric = (s) => s.replace(/\D/g, "");
  var normaliseString = (s = "") => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  var isRegionlessNanp = (number) => {
    const numeric = getNumeric(number);
    if (numeric.charAt(0) === "1") {
      const areaCode = numeric.substr(1, 3);
      return regionlessNanpNumbers.includes(areaCode);
    }
    return false;
  };
  var translateCursorPosition = (relevantChars, formattedValue, prevCaretPos, isDeleteForwards) => {
    if (prevCaretPos === 0 && !isDeleteForwards) {
      return 0;
    }
    let count = 0;
    for (let i = 0; i < formattedValue.length; i++) {
      if (/[+0-9]/.test(formattedValue[i])) {
        count++;
      }
      if (count === relevantChars && !isDeleteForwards) {
        return i + 1;
      }
      if (isDeleteForwards && count === relevantChars + 1) {
        return i;
      }
    }
    return formattedValue.length;
  };
  var createEl = (name, attrs, container) => {
    const el = document.createElement(name);
    if (attrs) {
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    }
    if (container) {
      container.appendChild(el);
    }
    return el;
  };
  var forEachInstance = (method, ...args) => {
    const { instances } = intlTelInput;
    Object.values(instances).forEach((instance) => instance[method](...args));
  };
  var Iti = class {
    constructor(input, customOptions = {}) {
      this.id = id++;
      this.telInput = input;
      this.highlightedItem = null;
      this.options = Object.assign({}, defaults, customOptions);
      this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
    }
    //* Can't be private as it's called from intlTelInput convenience wrapper.
    _init() {
      if (this.options.useFullscreenPopup) {
        this.options.fixDropdownWidth = false;
      }
      if (this.options.onlyCountries.length === 1) {
        this.options.initialCountry = this.options.onlyCountries[0];
      }
      if (this.options.separateDialCode) {
        this.options.nationalMode = false;
      }
      if (this.options.allowDropdown && !this.options.showFlags && !this.options.separateDialCode) {
        this.options.nationalMode = false;
      }
      if (this.options.useFullscreenPopup && !this.options.dropdownContainer) {
        this.options.dropdownContainer = document.body;
      }
      this.isAndroid = typeof navigator !== "undefined" ? /Android/i.test(navigator.userAgent) : false;
      this.isRTL = !!this.telInput.closest("[dir=rtl]");
      const showOnDefaultSide = this.options.allowDropdown || this.options.separateDialCode;
      this.showSelectedCountryOnLeft = this.isRTL ? !showOnDefaultSide : showOnDefaultSide;
      if (this.options.separateDialCode) {
        if (this.isRTL) {
          this.originalPaddingRight = this.telInput.style.paddingRight;
        } else {
          this.originalPaddingLeft = this.telInput.style.paddingLeft;
        }
      }
      this.options.i18n = { ...en_default, ...this.options.i18n };
      const autoCountryPromise = new Promise((resolve, reject) => {
        this.resolveAutoCountryPromise = resolve;
        this.rejectAutoCountryPromise = reject;
      });
      const utilsScriptPromise = new Promise((resolve, reject) => {
        this.resolveUtilsScriptPromise = resolve;
        this.rejectUtilsScriptPromise = reject;
      });
      this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
      this.selectedCountryData = {};
      this._processCountryData();
      this._generateMarkup();
      this._setInitialState();
      this._initListeners();
      this._initRequests();
    }
    //********************
    //*  PRIVATE METHODS
    //********************
    //* Prepare all of the country data, including onlyCountries, excludeCountries, countryOrder options.
    _processCountryData() {
      this._processAllCountries();
      this._processDialCodes();
      this._translateCountryNames();
      this._sortCountries();
    }
    //* Sort countries by countryOrder option (if present), then name.
    _sortCountries() {
      if (this.options.countryOrder) {
        this.options.countryOrder = this.options.countryOrder.map((country) => country.toLowerCase());
      }
      this.countries.sort((a, b) => {
        const { countryOrder } = this.options;
        if (countryOrder) {
          const aIndex = countryOrder.indexOf(a.iso2);
          const bIndex = countryOrder.indexOf(b.iso2);
          const aIndexExists = aIndex > -1;
          const bIndexExists = bIndex > -1;
          if (aIndexExists || bIndexExists) {
            if (aIndexExists && bIndexExists) {
              return aIndex - bIndex;
            }
            return aIndexExists ? -1 : 1;
          }
        }
        return a.name.localeCompare(b.name);
      });
    }
    //* Add a dial code to this.dialCodeToIso2Map.
    _addToDialCodeMap(iso2, dialCode, priority) {
      if (dialCode.length > this.dialCodeMaxLen) {
        this.dialCodeMaxLen = dialCode.length;
      }
      if (!this.dialCodeToIso2Map.hasOwnProperty(dialCode)) {
        this.dialCodeToIso2Map[dialCode] = [];
      }
      for (let i = 0; i < this.dialCodeToIso2Map[dialCode].length; i++) {
        if (this.dialCodeToIso2Map[dialCode][i] === iso2) {
          return;
        }
      }
      const index = priority !== void 0 ? priority : this.dialCodeToIso2Map[dialCode].length;
      this.dialCodeToIso2Map[dialCode][index] = iso2;
    }
    //* Process onlyCountries or excludeCountries array if present.
    _processAllCountries() {
      const { onlyCountries, excludeCountries } = this.options;
      if (onlyCountries.length) {
        const lowerCaseOnlyCountries = onlyCountries.map(
          (country) => country.toLowerCase()
        );
        this.countries = data_default.filter(
          (country) => lowerCaseOnlyCountries.includes(country.iso2)
        );
      } else if (excludeCountries.length) {
        const lowerCaseExcludeCountries = excludeCountries.map(
          (country) => country.toLowerCase()
        );
        this.countries = data_default.filter(
          (country) => !lowerCaseExcludeCountries.includes(country.iso2)
        );
      } else {
        this.countries = data_default;
      }
    }
    //* Translate Countries by object literal provided on config.
    _translateCountryNames() {
      for (let i = 0; i < this.countries.length; i++) {
        const iso2 = this.countries[i].iso2.toLowerCase();
        if (this.options.i18n.hasOwnProperty(iso2)) {
          this.countries[i].name = this.options.i18n[iso2];
        }
      }
    }
    //* Generate this.dialCodes and this.dialCodeToIso2Map.
    _processDialCodes() {
      this.dialCodes = {};
      this.dialCodeMaxLen = 0;
      this.dialCodeToIso2Map = {};
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        if (!this.dialCodes[c.dialCode]) {
          this.dialCodes[c.dialCode] = true;
        }
        this._addToDialCodeMap(c.iso2, c.dialCode, c.priority);
      }
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        if (c.areaCodes) {
          const rootIso2Code = this.dialCodeToIso2Map[c.dialCode][0];
          for (let j = 0; j < c.areaCodes.length; j++) {
            const areaCode = c.areaCodes[j];
            for (let k = 1; k < areaCode.length; k++) {
              const partialAreaCode = areaCode.substr(0, k);
              const partialDialCode = c.dialCode + partialAreaCode;
              this._addToDialCodeMap(rootIso2Code, partialDialCode);
              this._addToDialCodeMap(c.iso2, partialDialCode);
            }
            this._addToDialCodeMap(c.iso2, c.dialCode + areaCode);
          }
        }
      }
    }
    //* Generate all of the markup for the plugin: the selected country overlay, and the dropdown.
    _generateMarkup() {
      this.telInput.classList.add("iti__tel-input");
      if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
        this.telInput.setAttribute("autocomplete", "off");
      }
      const {
        allowDropdown,
        separateDialCode,
        showFlags,
        containerClass,
        hiddenInput,
        dropdownContainer,
        fixDropdownWidth,
        useFullscreenPopup,
        countrySearch,
        i18n
      } = this.options;
      let parentClass = "iti";
      if (allowDropdown) {
        parentClass += " iti--allow-dropdown";
      }
      if (showFlags) {
        parentClass += " iti--show-flags";
      }
      if (containerClass) {
        parentClass += ` ${containerClass}`;
      }
      if (!useFullscreenPopup) {
        parentClass += " iti--inline-dropdown";
      }
      const wrapper = createEl("div", { class: parentClass });
      this.telInput.parentNode?.insertBefore(wrapper, this.telInput);
      if (allowDropdown || showFlags || separateDialCode) {
        this.countryContainer = createEl(
          "div",
          { class: "iti__country-container" },
          wrapper
        );
        if (this.showSelectedCountryOnLeft) {
          this.countryContainer.style.left = "0px";
        } else {
          this.countryContainer.style.right = "0px";
        }
        if (allowDropdown) {
          this.selectedCountry = createEl(
            "button",
            {
              type: "button",
              class: "iti__selected-country",
              "aria-expanded": "false",
              "aria-label": this.options.i18n.selectedCountryAriaLabel,
              "aria-haspopup": "true",
              "aria-controls": `iti-${this.id}__dropdown-content`,
              "role": "combobox"
            },
            this.countryContainer
          );
          if (this.telInput.disabled) {
            this.selectedCountry.setAttribute("disabled", "true");
          }
        } else {
          this.selectedCountry = createEl(
            "div",
            { class: "iti__selected-country" },
            this.countryContainer
          );
        }
        const selectedCountryPrimary = createEl("div", { class: "iti__selected-country-primary" }, this.selectedCountry);
        this.selectedCountryInner = createEl("div", { class: "iti__flag" }, selectedCountryPrimary);
        this.selectedCountryA11yText = createEl(
          "span",
          { class: "iti__a11y-text" },
          this.selectedCountryInner
        );
        if (allowDropdown) {
          this.dropdownArrow = createEl(
            "div",
            { class: "iti__arrow", "aria-hidden": "true" },
            selectedCountryPrimary
          );
        }
        if (separateDialCode) {
          this.selectedDialCode = createEl(
            "div",
            { class: "iti__selected-dial-code" },
            this.selectedCountry
          );
        }
        if (allowDropdown) {
          const extraClasses = fixDropdownWidth ? "" : "iti--flexible-dropdown-width";
          this.dropdownContent = createEl("div", {
            id: `iti-${this.id}__dropdown-content`,
            class: `iti__dropdown-content iti__hide ${extraClasses}`
          });
          if (countrySearch) {
            this.searchInput = createEl(
              "input",
              {
                type: "text",
                class: "iti__search-input",
                placeholder: i18n.searchPlaceholder,
                role: "combobox",
                "aria-expanded": "true",
                "aria-label": i18n.searchPlaceholder,
                "aria-controls": `iti-${this.id}__country-listbox`,
                "aria-autocomplete": "list",
                "autocomplete": "off"
              },
              this.dropdownContent
            );
            this.searchResultsA11yText = createEl(
              "span",
              { class: "iti__a11y-text" },
              this.dropdownContent
            );
          }
          this.countryList = createEl(
            "ul",
            {
              class: "iti__country-list",
              id: `iti-${this.id}__country-listbox`,
              role: "listbox",
              "aria-label": i18n.countryListAriaLabel
            },
            this.dropdownContent
          );
          this._appendListItems();
          if (countrySearch) {
            this._updateSearchResultsText();
          }
          if (dropdownContainer) {
            let dropdownClasses = "iti iti--container";
            if (useFullscreenPopup) {
              dropdownClasses += " iti--fullscreen-popup";
            } else {
              dropdownClasses += " iti--inline-dropdown";
            }
            this.dropdown = createEl("div", { class: dropdownClasses });
            this.dropdown.appendChild(this.dropdownContent);
          } else {
            this.countryContainer.appendChild(this.dropdownContent);
          }
        }
      }
      wrapper.appendChild(this.telInput);
      this._updateInputPadding();
      if (hiddenInput) {
        const telInputName = this.telInput.getAttribute("name") || "";
        const names = hiddenInput(telInputName);
        if (names.phone) {
          const existingInput = this.telInput.form?.querySelector(`input[name="${names.phone}"]`);
          if (existingInput) {
            this.hiddenInput = existingInput;
          } else {
            this.hiddenInput = createEl("input", {
              type: "hidden",
              name: names.phone
            });
            wrapper.appendChild(this.hiddenInput);
          }
        }
        if (names.country) {
          const existingInput = this.telInput.form?.querySelector(`input[name="${names.country}"]`);
          if (existingInput) {
            this.hiddenInputCountry = existingInput;
          } else {
            this.hiddenInputCountry = createEl("input", {
              type: "hidden",
              name: names.country
            });
            wrapper.appendChild(this.hiddenInputCountry);
          }
        }
      }
    }
    //* For each country: add a country list item <li> to the countryList <ul> container.
    _appendListItems() {
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        const extraClass = i === 0 ? "iti__highlight" : "";
        const listItem = createEl(
          "li",
          {
            id: `iti-${this.id}__item-${c.iso2}`,
            class: `iti__country ${extraClass}`,
            tabindex: "-1",
            role: "option",
            "data-dial-code": c.dialCode,
            "data-country-code": c.iso2,
            "aria-selected": "false"
          },
          this.countryList
        );
        c.nodeById[this.id] = listItem;
        let content = "";
        if (this.options.showFlags) {
          content += `<div class='iti__flag iti__${c.iso2}'></div>`;
        }
        content += `<span class='iti__country-name'>${c.name}</span>`;
        content += `<span class='iti__dial-code'>+${c.dialCode}</span>`;
        listItem.insertAdjacentHTML("beforeend", content);
      }
    }
    //* Set the initial state of the input value and the selected country by:
    //* 1. Extracting a dial code from the given number
    //* 2. Using explicit initialCountry
    _setInitialState(overrideAutoCountry = false) {
      const attributeValue = this.telInput.getAttribute("value");
      const inputValue = this.telInput.value;
      const useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
      const val = useAttribute ? attributeValue : inputValue;
      const dialCode = this._getDialCode(val);
      const isRegionlessNanpNumber = isRegionlessNanp(val);
      const { initialCountry, geoIpLookup } = this.options;
      const isAutoCountry = initialCountry === "auto" && geoIpLookup;
      if (dialCode && !isRegionlessNanpNumber) {
        this._updateCountryFromNumber(val);
      } else if (!isAutoCountry || overrideAutoCountry) {
        const lowerInitialCountry = initialCountry ? initialCountry.toLowerCase() : "";
        const isValidInitialCountry = lowerInitialCountry && this._getCountryData(lowerInitialCountry, true);
        if (isValidInitialCountry) {
          this._setCountry(lowerInitialCountry);
        } else {
          if (dialCode && isRegionlessNanpNumber) {
            this._setCountry("us");
          } else {
            this._setCountry();
          }
        }
      }
      if (val) {
        this._updateValFromNumber(val);
      }
    }
    //* Initialise the main event listeners: input keyup, and click selected country.
    _initListeners() {
      this._initTelInputListeners();
      if (this.options.allowDropdown) {
        this._initDropdownListeners();
      }
      if ((this.hiddenInput || this.hiddenInputCountry) && this.telInput.form) {
        this._initHiddenInputListener();
      }
    }
    //* Update hidden input on form submit.
    _initHiddenInputListener() {
      this._handleHiddenInputSubmit = () => {
        if (this.hiddenInput) {
          this.hiddenInput.value = this.getNumber();
        }
        if (this.hiddenInputCountry) {
          this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "";
        }
      };
      this.telInput.form?.addEventListener(
        "submit",
        this._handleHiddenInputSubmit
      );
    }
    //* initialise the dropdown listeners.
    _initDropdownListeners() {
      this._handleLabelClick = (e) => {
        if (this.dropdownContent.classList.contains("iti__hide")) {
          this.telInput.focus();
        } else {
          e.preventDefault();
        }
      };
      const label = this.telInput.closest("label");
      if (label) {
        label.addEventListener("click", this._handleLabelClick);
      }
      this._handleClickSelectedCountry = () => {
        if (this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly) {
          this._openDropdown();
        }
      };
      this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry);
      this._handleCountryContainerKeydown = (e) => {
        const isDropdownHidden = this.dropdownContent.classList.contains("iti__hide");
        if (isDropdownHidden && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          this._openDropdown();
        }
        if (e.key === "Tab") {
          this._closeDropdown();
        }
      };
      this.countryContainer.addEventListener(
        "keydown",
        this._handleCountryContainerKeydown
      );
    }
    //* Init many requests: utils script / geo ip lookup.
    _initRequests() {
      let { loadUtils, initialCountry, geoIpLookup } = this.options;
      if (loadUtils && !intlTelInput.utils) {
        this._handlePageLoad = () => {
          window.removeEventListener("load", this._handlePageLoad);
          intlTelInput.attachUtils(loadUtils)?.catch(() => {
          });
        };
        if (intlTelInput.documentReady()) {
          this._handlePageLoad();
        } else {
          window.addEventListener("load", this._handlePageLoad);
        }
      } else {
        this.resolveUtilsScriptPromise();
      }
      const isAutoCountry = initialCountry === "auto" && geoIpLookup;
      if (isAutoCountry && !this.selectedCountryData.iso2) {
        this._loadAutoCountry();
      } else {
        this.resolveAutoCountryPromise();
      }
    }
    //* Perform the geo ip lookup.
    _loadAutoCountry() {
      if (intlTelInput.autoCountry) {
        this.handleAutoCountry();
      } else if (!intlTelInput.startedLoadingAutoCountry) {
        intlTelInput.startedLoadingAutoCountry = true;
        if (typeof this.options.geoIpLookup === "function") {
          this.options.geoIpLookup(
            (iso2 = "") => {
              const iso2Lower = iso2.toLowerCase();
              const isValidIso2 = iso2Lower && this._getCountryData(iso2Lower, true);
              if (isValidIso2) {
                intlTelInput.autoCountry = iso2Lower;
                setTimeout(() => forEachInstance("handleAutoCountry"));
              } else {
                this._setInitialState(true);
                forEachInstance("rejectAutoCountryPromise");
              }
            },
            () => {
              this._setInitialState(true);
              forEachInstance("rejectAutoCountryPromise");
            }
          );
        }
      }
    }
    _openDropdownWithPlus() {
      this._openDropdown();
      this.searchInput.value = "+";
      this._filterCountries("", true);
    }
    //* Initialize the tel input listeners.
    _initTelInputListeners() {
      const { strictMode, formatAsYouType, separateDialCode, formatOnDisplay, allowDropdown, countrySearch } = this.options;
      let userOverrideFormatting = false;
      if (/\p{L}/u.test(this.telInput.value)) {
        userOverrideFormatting = true;
      }
      this._handleInputEvent = (e) => {
        if (this.isAndroid && e?.data === "+" && separateDialCode && allowDropdown && countrySearch) {
          const currentCaretPos = this.telInput.selectionStart || 0;
          const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos - 1);
          const valueAfterCaret = this.telInput.value.substring(currentCaretPos);
          this.telInput.value = valueBeforeCaret + valueAfterCaret;
          this._openDropdownWithPlus();
          return;
        }
        if (this._updateCountryFromNumber(this.telInput.value)) {
          this._triggerCountryChange();
        }
        const isFormattingChar = e?.data && /[^+0-9]/.test(e.data);
        const isPaste = e?.inputType === "insertFromPaste" && this.telInput.value;
        if (isFormattingChar || isPaste && !strictMode) {
          userOverrideFormatting = true;
        } else if (!/[^+0-9]/.test(this.telInput.value)) {
          userOverrideFormatting = false;
        }
        const disableFormatOnSetNumber = e?.detail && e.detail["isSetNumber"] && !formatOnDisplay;
        if (formatAsYouType && !userOverrideFormatting && !disableFormatOnSetNumber) {
          const currentCaretPos = this.telInput.selectionStart || 0;
          const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos);
          const relevantCharsBeforeCaret = valueBeforeCaret.replace(/[^+0-9]/g, "").length;
          const isDeleteForwards = e?.inputType === "deleteContentForward";
          const formattedValue = this._formatNumberAsYouType();
          const newCaretPos = translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
          this.telInput.value = formattedValue;
          this.telInput.setSelectionRange(newCaretPos, newCaretPos);
        }
      };
      this.telInput.addEventListener("input", this._handleInputEvent);
      if (strictMode || separateDialCode) {
        this._handleKeydownEvent = (e) => {
          if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
            if (separateDialCode && allowDropdown && countrySearch && e.key === "+") {
              e.preventDefault();
              this._openDropdownWithPlus();
              return;
            }
            if (strictMode) {
              const value = this.telInput.value;
              const alreadyHasPlus = value.charAt(0) === "+";
              const isInitialPlus = !alreadyHasPlus && this.telInput.selectionStart === 0 && e.key === "+";
              const isNumeric = /^[0-9]$/.test(e.key);
              const isAllowedChar = separateDialCode ? isNumeric : isInitialPlus || isNumeric;
              const newValue = value.slice(0, this.telInput.selectionStart) + e.key + value.slice(this.telInput.selectionEnd);
              const newFullNumber = this._getFullNumber(newValue);
              const coreNumber = intlTelInput.utils.getCoreNumber(newFullNumber, this.selectedCountryData.iso2);
              const hasExceededMaxLength = this.maxCoreNumberLength && coreNumber.length > this.maxCoreNumberLength;
              let isChangingDialCode = false;
              if (alreadyHasPlus) {
                const currentCountry = this.selectedCountryData.iso2;
                const newCountry = this._getCountryFromNumber(newFullNumber);
                isChangingDialCode = newCountry !== currentCountry;
              }
              if (!isAllowedChar || hasExceededMaxLength && !isChangingDialCode && !isInitialPlus) {
                e.preventDefault();
              }
            }
          }
        };
        this.telInput.addEventListener("keydown", this._handleKeydownEvent);
      }
    }
    //* Adhere to the input's maxlength attr.
    _cap(number) {
      const max = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
      return max && number.length > max ? number.substr(0, max) : number;
    }
    //* Trigger a custom event on the input.
    _trigger(name, detailProps = {}) {
      const e = new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        detail: detailProps
      });
      this.telInput.dispatchEvent(e);
    }
    //* Open the dropdown.
    _openDropdown() {
      const { fixDropdownWidth, countrySearch } = this.options;
      if (fixDropdownWidth) {
        this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`;
      }
      this.dropdownContent.classList.remove("iti__hide");
      this.selectedCountry.setAttribute("aria-expanded", "true");
      this._setDropdownPosition();
      if (countrySearch) {
        const firstCountryItem = this.countryList.firstElementChild;
        if (firstCountryItem) {
          this._highlightListItem(firstCountryItem, false);
          this.countryList.scrollTop = 0;
        }
        this.searchInput.focus();
      }
      this._bindDropdownListeners();
      this.dropdownArrow.classList.add("iti__arrow--up");
      this._trigger("open:countrydropdown");
    }
    //* Set the dropdown position
    _setDropdownPosition() {
      if (this.options.dropdownContainer) {
        this.options.dropdownContainer.appendChild(this.dropdown);
      }
      if (!this.options.useFullscreenPopup) {
        const inputPosRelativeToVP = this.telInput.getBoundingClientRect();
        const inputHeight = this.telInput.offsetHeight;
        if (this.options.dropdownContainer) {
          this.dropdown.style.top = `${inputPosRelativeToVP.top + inputHeight}px`;
          this.dropdown.style.left = `${inputPosRelativeToVP.left}px`;
          this._handleWindowScroll = () => this._closeDropdown();
          window.addEventListener("scroll", this._handleWindowScroll);
        }
      }
    }
    //* We only bind dropdown listeners when the dropdown is open.
    _bindDropdownListeners() {
      this._handleMouseoverCountryList = (e) => {
        const listItem = e.target?.closest(".iti__country");
        if (listItem) {
          this._highlightListItem(listItem, false);
        }
      };
      this.countryList.addEventListener(
        "mouseover",
        this._handleMouseoverCountryList
      );
      this._handleClickCountryList = (e) => {
        const listItem = e.target?.closest(".iti__country");
        if (listItem) {
          this._selectListItem(listItem);
        }
      };
      this.countryList.addEventListener("click", this._handleClickCountryList);
      let isOpening = true;
      this._handleClickOffToClose = () => {
        if (!isOpening) {
          this._closeDropdown();
        }
        isOpening = false;
      };
      document.documentElement.addEventListener(
        "click",
        this._handleClickOffToClose
      );
      let query = "";
      let queryTimer = null;
      this._handleKeydownOnDropdown = (e) => {
        if (["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            this._handleUpDownKey(e.key);
          } else if (e.key === "Enter") {
            this._handleEnterKey();
          } else if (e.key === "Escape") {
            this._closeDropdown();
          }
        }
        if (!this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
          e.stopPropagation();
          if (queryTimer) {
            clearTimeout(queryTimer);
          }
          query += e.key.toLowerCase();
          this._searchForCountry(query);
          queryTimer = setTimeout(() => {
            query = "";
          }, 1e3);
        }
      };
      document.addEventListener("keydown", this._handleKeydownOnDropdown);
      if (this.options.countrySearch) {
        const doFilter = () => {
          const inputQuery = this.searchInput.value.trim();
          if (inputQuery) {
            this._filterCountries(inputQuery);
          } else {
            this._filterCountries("", true);
          }
        };
        let keyupTimer = null;
        this._handleSearchChange = () => {
          if (keyupTimer) {
            clearTimeout(keyupTimer);
          }
          keyupTimer = setTimeout(() => {
            doFilter();
            keyupTimer = null;
          }, 100);
        };
        this.searchInput.addEventListener("input", this._handleSearchChange);
        this.searchInput.addEventListener("click", (e) => e.stopPropagation());
      }
    }
    //* Hidden search (countrySearch disabled): Find the first list item whose name starts with the query string.
    _searchForCountry(query) {
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        const startsWith = c.name.substr(0, query.length).toLowerCase() === query;
        if (startsWith) {
          const listItem = c.nodeById[this.id];
          this._highlightListItem(listItem, false);
          this._scrollTo(listItem);
          break;
        }
      }
    }
    //* Country search enabled: Filter the countries according to the search query.
    _filterCountries(query, isReset = false) {
      let noCountriesAddedYet = true;
      this.countryList.innerHTML = "";
      const normalisedQuery = normaliseString(query);
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        const normalisedCountryName = normaliseString(c.name);
        const countryInitials = c.name.split(/[^a-zA-ZÀ-ÿа-яА-Я]/).map((word) => word[0]).join("").toLowerCase();
        const fullDialCode = `+${c.dialCode}`;
        if (isReset || normalisedCountryName.includes(normalisedQuery) || fullDialCode.includes(normalisedQuery) || c.iso2.includes(normalisedQuery) || countryInitials.includes(normalisedQuery)) {
          const listItem = c.nodeById[this.id];
          if (listItem) {
            this.countryList.appendChild(listItem);
          }
          if (noCountriesAddedYet) {
            this._highlightListItem(listItem, false);
            noCountriesAddedYet = false;
          }
        }
      }
      if (noCountriesAddedYet) {
        this._highlightListItem(null, false);
      }
      this.countryList.scrollTop = 0;
      this._updateSearchResultsText();
    }
    //* Update search results text (for a11y).
    _updateSearchResultsText() {
      const { i18n } = this.options;
      const count = this.countryList.childElementCount;
      let searchText;
      if (count === 0) {
        searchText = i18n.zeroSearchResults;
      } else if (count === 1) {
        searchText = i18n.oneSearchResult;
      } else {
        searchText = i18n.multipleSearchResults.replace("${count}", count.toString());
      }
      this.searchResultsA11yText.textContent = searchText;
    }
    //* Highlight the next/prev item in the list (and ensure it is visible).
    _handleUpDownKey(key) {
      let next = key === "ArrowUp" ? this.highlightedItem?.previousElementSibling : this.highlightedItem?.nextElementSibling;
      if (!next && this.countryList.childElementCount > 1) {
        next = key === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild;
      }
      if (next) {
        this._scrollTo(next);
        this._highlightListItem(next, false);
      }
    }
    //* Select the currently highlighted item.
    _handleEnterKey() {
      if (this.highlightedItem) {
        this._selectListItem(this.highlightedItem);
      }
    }
    //* Update the input's value to the given val (format first if possible)
    //* NOTE: this is called from _setInitialState, handleUtils and setNumber.
    _updateValFromNumber(fullNumber) {
      let number = fullNumber;
      if (this.options.formatOnDisplay && intlTelInput.utils && this.selectedCountryData) {
        const useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.separateDialCode;
        const { NATIONAL, INTERNATIONAL } = intlTelInput.utils.numberFormat;
        const format = useNational ? NATIONAL : INTERNATIONAL;
        number = intlTelInput.utils.formatNumber(
          number,
          this.selectedCountryData.iso2,
          format
        );
      }
      number = this._beforeSetNumber(number);
      this.telInput.value = number;
    }
    //* Check if need to select a new country based on the given number
    //* Note: called from _setInitialState, keyup handler, setNumber.
    _updateCountryFromNumber(fullNumber) {
      const iso2 = this._getCountryFromNumber(fullNumber);
      if (iso2 !== null) {
        return this._setCountry(iso2);
      }
      return false;
    }
    _ensureHasDialCode(number) {
      const { dialCode, nationalPrefix } = this.selectedCountryData;
      const alreadyHasPlus = number.charAt(0) === "+";
      if (alreadyHasPlus || !dialCode) {
        return number;
      }
      const hasPrefix = nationalPrefix && number.charAt(0) === nationalPrefix && !this.options.separateDialCode;
      const cleanNumber = hasPrefix ? number.substring(1) : number;
      return `+${dialCode}${cleanNumber}`;
    }
    _getCountryFromNumber(fullNumber) {
      const plusIndex = fullNumber.indexOf("+");
      let number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
      const selectedIso2 = this.selectedCountryData.iso2;
      const selectedDialCode = this.selectedCountryData.dialCode;
      number = this._ensureHasDialCode(number);
      const dialCodeMatch = this._getDialCode(number, true);
      const numeric = getNumeric(number);
      if (dialCodeMatch) {
        const dialCodeMatchNumeric = getNumeric(dialCodeMatch);
        const iso2Codes = this.dialCodeToIso2Map[dialCodeMatchNumeric];
        if (!selectedIso2 && this.defaultCountry && iso2Codes.includes(this.defaultCountry)) {
          return this.defaultCountry;
        }
        const alreadySelected = selectedIso2 && iso2Codes.includes(selectedIso2) && (numeric.length === dialCodeMatchNumeric.length || !this.selectedCountryData.areaCodes);
        const isRegionlessNanpNumber = selectedDialCode === "1" && isRegionlessNanp(numeric);
        if (!isRegionlessNanpNumber && !alreadySelected) {
          for (let j = 0; j < iso2Codes.length; j++) {
            if (iso2Codes[j]) {
              return iso2Codes[j];
            }
          }
        }
      } else if (number.charAt(0) === "+" && numeric.length) {
        return "";
      } else if ((!number || number === "+") && !this.selectedCountryData.iso2) {
        return this.defaultCountry;
      }
      return null;
    }
    //* Remove highlighting from other list items and highlight the given item.
    _highlightListItem(listItem, shouldFocus) {
      const prevItem = this.highlightedItem;
      if (prevItem) {
        prevItem.classList.remove("iti__highlight");
        prevItem.setAttribute("aria-selected", "false");
      }
      this.highlightedItem = listItem;
      if (this.highlightedItem) {
        this.highlightedItem.classList.add("iti__highlight");
        this.highlightedItem.setAttribute("aria-selected", "true");
        const activeDescendant = this.highlightedItem.getAttribute("id") || "";
        this.selectedCountry.setAttribute("aria-activedescendant", activeDescendant);
        if (this.options.countrySearch) {
          this.searchInput.setAttribute("aria-activedescendant", activeDescendant);
        }
      }
      if (shouldFocus) {
        this.highlightedItem.focus();
      }
    }
    //* Find the country data for the given iso2 code
    //* the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
    _getCountryData(iso2, allowFail) {
      for (let i = 0; i < this.countries.length; i++) {
        if (this.countries[i].iso2 === iso2) {
          return this.countries[i];
        }
      }
      if (allowFail) {
        return null;
      }
      throw new Error(`No country data for '${iso2}'`);
    }
    //* Update the selected country, dial code (if separateDialCode), placeholder, title, and active list item.
    //* Note: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry.
    _setCountry(iso2) {
      const { separateDialCode, showFlags, i18n } = this.options;
      const prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
      this.selectedCountryData = iso2 ? this._getCountryData(iso2, false) || {} : {};
      if (this.selectedCountryData.iso2) {
        this.defaultCountry = this.selectedCountryData.iso2;
      }
      if (this.selectedCountryInner) {
        let flagClass = "";
        let a11yText = "";
        if (iso2 && showFlags) {
          flagClass = `iti__flag iti__${iso2}`;
          a11yText = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`;
        } else {
          flagClass = "iti__flag iti__globe";
          a11yText = i18n.noCountrySelected;
        }
        this.selectedCountryInner.className = flagClass;
        this.selectedCountryA11yText.textContent = a11yText;
      }
      this._setSelectedCountryTitleAttribute(iso2, separateDialCode);
      if (separateDialCode) {
        const dialCode = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
        this.selectedDialCode.innerHTML = dialCode;
        this._updateInputPadding();
      }
      this._updatePlaceholder();
      this._updateMaxLength();
      return prevCountry.iso2 !== iso2;
    }
    //* Update the input padding to make space for the selected country/dial code.
    _updateInputPadding() {
      if (this.selectedCountry) {
        const selectedCountryWidth = this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth();
        const inputPadding = selectedCountryWidth + 6;
        if (this.showSelectedCountryOnLeft) {
          this.telInput.style.paddingLeft = `${inputPadding}px`;
        } else {
          this.telInput.style.paddingRight = `${inputPadding}px`;
        }
      }
    }
    //* Update the maximum valid number length for the currently selected country.
    _updateMaxLength() {
      const { strictMode, placeholderNumberType, validationNumberTypes } = this.options;
      const { iso2 } = this.selectedCountryData;
      if (strictMode && intlTelInput.utils) {
        if (iso2) {
          const numberType = intlTelInput.utils.numberType[placeholderNumberType];
          let exampleNumber = intlTelInput.utils.getExampleNumber(
            iso2,
            false,
            numberType,
            true
          );
          let validNumber = exampleNumber;
          while (intlTelInput.utils.isPossibleNumber(exampleNumber, iso2, validationNumberTypes)) {
            validNumber = exampleNumber;
            exampleNumber += "0";
          }
          const coreNumber = intlTelInput.utils.getCoreNumber(validNumber, iso2);
          this.maxCoreNumberLength = coreNumber.length;
          if (iso2 === "by") {
            this.maxCoreNumberLength = coreNumber.length + 1;
          }
        } else {
          this.maxCoreNumberLength = null;
        }
      }
    }
    _setSelectedCountryTitleAttribute(iso2 = null, separateDialCode) {
      if (!this.selectedCountry) {
        return;
      }
      let title;
      if (iso2 && !separateDialCode) {
        title = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`;
      } else if (iso2) {
        title = this.selectedCountryData.name;
      } else {
        title = "Unknown";
      }
      this.selectedCountry.setAttribute("title", title);
    }
    //* When the input is in a hidden container during initialisation, we must inject some markup
    //* into the end of the DOM to calculate the correct offsetWidth.
    //* NOTE: this is only used when separateDialCode is enabled, so countryContainer and selectedCountry
    //* will definitely exist.
    _getHiddenSelectedCountryWidth() {
      if (this.telInput.parentNode) {
        const containerClone = this.telInput.parentNode.cloneNode(false);
        containerClone.style.visibility = "hidden";
        document.body.appendChild(containerClone);
        const countryContainerClone = this.countryContainer.cloneNode();
        containerClone.appendChild(countryContainerClone);
        const selectedCountryClone = this.selectedCountry.cloneNode(true);
        countryContainerClone.appendChild(selectedCountryClone);
        const width = selectedCountryClone.offsetWidth;
        document.body.removeChild(containerClone);
        return width;
      }
      return 0;
    }
    //* Update the input placeholder to an example number from the currently selected country.
    _updatePlaceholder() {
      const {
        autoPlaceholder,
        placeholderNumberType,
        nationalMode,
        customPlaceholder
      } = this.options;
      const shouldSetPlaceholder = autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && autoPlaceholder === "polite";
      if (intlTelInput.utils && shouldSetPlaceholder) {
        const numberType = intlTelInput.utils.numberType[placeholderNumberType];
        let placeholder = this.selectedCountryData.iso2 ? intlTelInput.utils.getExampleNumber(
          this.selectedCountryData.iso2,
          nationalMode,
          numberType
        ) : "";
        placeholder = this._beforeSetNumber(placeholder);
        if (typeof customPlaceholder === "function") {
          placeholder = customPlaceholder(placeholder, this.selectedCountryData);
        }
        this.telInput.setAttribute("placeholder", placeholder);
      }
    }
    //* Called when the user selects a list item from the dropdown.
    _selectListItem(listItem) {
      const countryChanged = this._setCountry(
        listItem.getAttribute("data-country-code")
      );
      this._closeDropdown();
      this._updateDialCode(listItem.getAttribute("data-dial-code"));
      this.telInput.focus();
      if (countryChanged) {
        this._triggerCountryChange();
      }
    }
    //* Close the dropdown and unbind any listeners.
    _closeDropdown() {
      this.dropdownContent.classList.add("iti__hide");
      this.selectedCountry.setAttribute("aria-expanded", "false");
      this.selectedCountry.removeAttribute("aria-activedescendant");
      if (this.highlightedItem) {
        this.highlightedItem.setAttribute("aria-selected", "false");
      }
      if (this.options.countrySearch) {
        this.searchInput.removeAttribute("aria-activedescendant");
      }
      this.dropdownArrow.classList.remove("iti__arrow--up");
      document.removeEventListener("keydown", this._handleKeydownOnDropdown);
      if (this.options.countrySearch) {
        this.searchInput.removeEventListener("input", this._handleSearchChange);
      }
      document.documentElement.removeEventListener(
        "click",
        this._handleClickOffToClose
      );
      this.countryList.removeEventListener(
        "mouseover",
        this._handleMouseoverCountryList
      );
      this.countryList.removeEventListener("click", this._handleClickCountryList);
      if (this.options.dropdownContainer) {
        if (!this.options.useFullscreenPopup) {
          window.removeEventListener("scroll", this._handleWindowScroll);
        }
        if (this.dropdown.parentNode) {
          this.dropdown.parentNode.removeChild(this.dropdown);
        }
      }
      if (this._handlePageLoad) {
        window.removeEventListener("load", this._handlePageLoad);
      }
      this._trigger("close:countrydropdown");
    }
    //* Check if an element is visible within it's container, else scroll until it is.
    _scrollTo(element) {
      const container = this.countryList;
      const scrollTop = document.documentElement.scrollTop;
      const containerHeight = container.offsetHeight;
      const containerTop = container.getBoundingClientRect().top + scrollTop;
      const containerBottom = containerTop + containerHeight;
      const elementHeight = element.offsetHeight;
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const elementBottom = elementTop + elementHeight;
      const newScrollTop = elementTop - containerTop + container.scrollTop;
      if (elementTop < containerTop) {
        container.scrollTop = newScrollTop;
      } else if (elementBottom > containerBottom) {
        const heightDifference = containerHeight - elementHeight;
        container.scrollTop = newScrollTop - heightDifference;
      }
    }
    //* Replace any existing dial code with the new one
    //* Note: called from _selectListItem and setCountry
    _updateDialCode(newDialCodeBare) {
      const inputVal = this.telInput.value;
      const newDialCode = `+${newDialCodeBare}`;
      let newNumber;
      if (inputVal.charAt(0) === "+") {
        const prevDialCode = this._getDialCode(inputVal);
        if (prevDialCode) {
          newNumber = inputVal.replace(prevDialCode, newDialCode);
        } else {
          newNumber = newDialCode;
        }
        this.telInput.value = newNumber;
      }
    }
    //* Try and extract a valid international dial code from a full telephone number.
    //* Note: returns the raw string inc plus character and any whitespace/dots etc.
    _getDialCode(number, includeAreaCode) {
      let dialCode = "";
      if (number.charAt(0) === "+") {
        let numericChars = "";
        for (let i = 0; i < number.length; i++) {
          const c = number.charAt(i);
          if (!isNaN(parseInt(c, 10))) {
            numericChars += c;
            if (includeAreaCode) {
              if (this.dialCodeToIso2Map[numericChars]) {
                dialCode = number.substr(0, i + 1);
              }
            } else {
              if (this.dialCodes[numericChars]) {
                dialCode = number.substr(0, i + 1);
                break;
              }
            }
            if (numericChars.length === this.dialCodeMaxLen) {
              break;
            }
          }
        }
      }
      return dialCode;
    }
    //* Get the input val, adding the dial code if separateDialCode is enabled.
    _getFullNumber(overrideVal) {
      const val = overrideVal || this.telInput.value.trim();
      const { dialCode } = this.selectedCountryData;
      let prefix;
      const numericVal = getNumeric(val);
      if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
        prefix = `+${dialCode}`;
      } else {
        prefix = "";
      }
      return prefix + val;
    }
    //* Remove the dial code if separateDialCode is enabled also cap the length if the input has a maxlength attribute
    _beforeSetNumber(fullNumber) {
      let number = fullNumber;
      if (this.options.separateDialCode) {
        let dialCode = this._getDialCode(number);
        if (dialCode) {
          dialCode = `+${this.selectedCountryData.dialCode}`;
          const start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
          number = number.substr(start);
        }
      }
      return this._cap(number);
    }
    //* Trigger the 'countrychange' event.
    _triggerCountryChange() {
      this._trigger("countrychange");
    }
    //* Format the number as the user types.
    _formatNumberAsYouType() {
      const val = this._getFullNumber();
      const result = intlTelInput.utils ? intlTelInput.utils.formatNumberAsYouType(val, this.selectedCountryData.iso2) : val;
      const { dialCode } = this.selectedCountryData;
      if (this.options.separateDialCode && this.telInput.value.charAt(0) !== "+" && result.includes(`+${dialCode}`)) {
        const afterDialCode = result.split(`+${dialCode}`)[1] || "";
        return afterDialCode.trim();
      }
      return result;
    }
    //**************************
    //*  SECRET PUBLIC METHODS
    //**************************
    //* This is called when the geoip call returns.
    handleAutoCountry() {
      if (this.options.initialCountry === "auto" && intlTelInput.autoCountry) {
        this.defaultCountry = intlTelInput.autoCountry;
        const hasSelectedCountryOrGlobe = this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains("iti__globe");
        if (!hasSelectedCountryOrGlobe) {
          this.setCountry(this.defaultCountry);
        }
        this.resolveAutoCountryPromise();
      }
    }
    //* This is called when the utils request completes.
    handleUtils() {
      if (intlTelInput.utils) {
        if (this.telInput.value) {
          this._updateValFromNumber(this.telInput.value);
        }
        if (this.selectedCountryData.iso2) {
          this._updatePlaceholder();
          this._updateMaxLength();
        }
      }
      this.resolveUtilsScriptPromise();
    }
    //********************
    //*  PUBLIC METHODS
    //********************
    //* Remove plugin.
    destroy() {
      const { allowDropdown, separateDialCode } = this.options;
      if (allowDropdown) {
        this._closeDropdown();
        this.selectedCountry.removeEventListener(
          "click",
          this._handleClickSelectedCountry
        );
        this.countryContainer.removeEventListener(
          "keydown",
          this._handleCountryContainerKeydown
        );
        const label = this.telInput.closest("label");
        if (label) {
          label.removeEventListener("click", this._handleLabelClick);
        }
      }
      const { form } = this.telInput;
      if (this._handleHiddenInputSubmit && form) {
        form.removeEventListener("submit", this._handleHiddenInputSubmit);
      }
      this.telInput.removeEventListener("input", this._handleInputEvent);
      if (this._handleKeydownEvent) {
        this.telInput.removeEventListener("keydown", this._handleKeydownEvent);
      }
      this.telInput.removeAttribute("data-intl-tel-input-id");
      if (separateDialCode) {
        if (this.isRTL) {
          this.telInput.style.paddingRight = this.originalPaddingRight;
        } else {
          this.telInput.style.paddingLeft = this.originalPaddingLeft;
        }
      }
      const wrapper = this.telInput.parentNode;
      wrapper?.parentNode?.insertBefore(this.telInput, wrapper);
      wrapper?.parentNode?.removeChild(wrapper);
      delete intlTelInput.instances[this.id];
    }
    //* Get the extension from the current number.
    getExtension() {
      if (intlTelInput.utils) {
        return intlTelInput.utils.getExtension(
          this._getFullNumber(),
          this.selectedCountryData.iso2
        );
      }
      return "";
    }
    //* Format the number to the given format.
    getNumber(format) {
      if (intlTelInput.utils) {
        const { iso2 } = this.selectedCountryData;
        return intlTelInput.utils.formatNumber(
          this._getFullNumber(),
          iso2,
          format
        );
      }
      return "";
    }
    //* Get the type of the entered number e.g. landline/mobile.
    getNumberType() {
      if (intlTelInput.utils) {
        return intlTelInput.utils.getNumberType(
          this._getFullNumber(),
          this.selectedCountryData.iso2
        );
      }
      return -99;
    }
    //* Get the country data for the currently selected country.
    getSelectedCountryData() {
      return this.selectedCountryData;
    }
    //* Get the validation error.
    getValidationError() {
      if (intlTelInput.utils) {
        const { iso2 } = this.selectedCountryData;
        return intlTelInput.utils.getValidationError(this._getFullNumber(), iso2);
      }
      return -99;
    }
    //* Validate the input val
    isValidNumber() {
      if (!this.selectedCountryData.iso2) {
        return false;
      }
      const val = this._getFullNumber();
      const alphaCharPosition = val.search(/\p{L}/u);
      if (alphaCharPosition > -1) {
        const beforeAlphaChar = val.substring(0, alphaCharPosition);
        const beforeAlphaIsValid = this._utilsIsPossibleNumber(beforeAlphaChar);
        const isValid = this._utilsIsPossibleNumber(val);
        return beforeAlphaIsValid && isValid;
      }
      return this._utilsIsPossibleNumber(val);
    }
    _utilsIsPossibleNumber(val) {
      return intlTelInput.utils ? intlTelInput.utils.isPossibleNumber(val, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null;
    }
    //* Validate the input val (precise)
    isValidNumberPrecise() {
      if (!this.selectedCountryData.iso2) {
        return false;
      }
      const val = this._getFullNumber();
      const alphaCharPosition = val.search(/\p{L}/u);
      if (alphaCharPosition > -1) {
        const beforeAlphaChar = val.substring(0, alphaCharPosition);
        const beforeAlphaIsValid = this._utilsIsValidNumber(beforeAlphaChar);
        const isValid = this._utilsIsValidNumber(val);
        return beforeAlphaIsValid && isValid;
      }
      return this._utilsIsValidNumber(val);
    }
    _utilsIsValidNumber(val) {
      return intlTelInput.utils ? intlTelInput.utils.isValidNumber(val, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null;
    }
    //* Update the selected country, and update the input val accordingly.
    setCountry(iso2) {
      const iso2Lower = iso2?.toLowerCase();
      const currentCountry = this.selectedCountryData.iso2;
      const isCountryChange = iso2 && iso2Lower !== currentCountry || !iso2 && currentCountry;
      if (isCountryChange) {
        this._setCountry(iso2Lower);
        this._updateDialCode(this.selectedCountryData.dialCode);
        this._triggerCountryChange();
      }
    }
    //* Set the input value and update the country.
    setNumber(number) {
      const countryChanged = this._updateCountryFromNumber(number);
      this._updateValFromNumber(number);
      if (countryChanged) {
        this._triggerCountryChange();
      }
      this._trigger("input", { isSetNumber: true });
    }
    //* Set the placeholder number typ
    setPlaceholderNumberType(type) {
      this.options.placeholderNumberType = type;
      this._updatePlaceholder();
    }
    setDisabled(disabled) {
      this.telInput.disabled = disabled;
      if (disabled) {
        this.selectedCountry.setAttribute("disabled", "true");
      } else {
        this.selectedCountry.removeAttribute("disabled");
      }
    }
  };
  var attachUtils = (source) => {
    if (!intlTelInput.utils && !intlTelInput.startedLoadingUtilsScript) {
      let loadCall;
      if (typeof source === "function") {
        try {
          loadCall = Promise.resolve(source());
        } catch (error) {
          return Promise.reject(error);
        }
      } else {
        return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof source}`));
      }
      intlTelInput.startedLoadingUtilsScript = true;
      return loadCall.then((module) => {
        const utils = module?.default;
        if (!utils || typeof utils !== "object") {
          throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
        }
        intlTelInput.utils = utils;
        forEachInstance("handleUtils");
        return true;
      }).catch((error) => {
        forEachInstance("rejectUtilsScriptPromise", error);
        throw error;
      });
    }
    return null;
  };
  var intlTelInput = Object.assign(
    (input, options) => {
      const iti = new Iti(input, options);
      iti._init();
      input.setAttribute("data-intl-tel-input-id", iti.id.toString());
      intlTelInput.instances[iti.id] = iti;
      return iti;
    },
    {
      defaults,
      //* Using a static var like this allows us to mock it in the tests.
      documentReady: () => document.readyState === "complete",
      //* Get the country data object.
      getCountryData: () => data_default,
      //* A getter for the plugin instance.
      getInstance: (input) => {
        const id2 = input.getAttribute("data-intl-tel-input-id");
        return id2 ? intlTelInput.instances[id2] : null;
      },
      //* A map from instance ID to instance object.
      instances: {},
      attachUtils,
      startedLoadingUtilsScript: false,
      startedLoadingAutoCountry: false,
      version: "25.3.1"
    }
  );
  var intl_tel_input_default = intlTelInput;
  return __toCommonJS(intl_tel_input_exports);
})();

// UMD
  return factoryOutput.default;
}));


/***/ }),

/***/ "./source/scss/admin/login.scss":
/*!**************************************!*\
  !*** ./source/scss/admin/login.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/scss/admin/colorScheme-tmdr.scss":
/*!*************************************************!*\
  !*** ./source/scss/admin/colorScheme-tmdr.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/scss/admin/colorScheme-client.scss":
/*!***************************************************!*\
  !*** ./source/scss/admin/colorScheme-client.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/scss/layout.scss":
/*!*********************************!*\
  !*** ./source/scss/layout.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/scss/pages/404.scss":
/*!************************************!*\
  !*** ./source/scss/pages/404.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/scss/pages/home.scss":
/*!*************************************!*\
  !*** ./source/scss/pages/home.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/scss/pages/thankyou.scss":
/*!*****************************************!*\
  !*** ./source/scss/pages/thankyou.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/scss/pages/term-conditions.scss":
/*!************************************************!*\
  !*** ./source/scss/pages/term-conditions.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/layout": 0,
/******/ 			"assets/css/pages/home": 0,
/******/ 			"assets/css/layout": 0,
/******/ 			"assets/css/pages/term-conditions": 0,
/******/ 			"assets/css/pages/thankyou": 0,
/******/ 			"assets/css/pages/404": 0,
/******/ 			"assets/css/admin/colorScheme-client": 0,
/******/ 			"assets/css/admin/colorScheme-tmdr": 0,
/******/ 			"assets/css/admin/login": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/js/layout.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/scss/layout.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/scss/pages/404.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/scss/pages/home.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/scss/pages/thankyou.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/scss/pages/term-conditions.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/scss/admin/login.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/scss/admin/colorScheme-tmdr.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/pages/home","assets/css/layout","assets/css/pages/term-conditions","assets/css/pages/thankyou","assets/css/pages/404","assets/css/admin/colorScheme-client","assets/css/admin/colorScheme-tmdr","assets/css/admin/login"], () => (__webpack_require__("./source/scss/admin/colorScheme-client.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=layout.js.map