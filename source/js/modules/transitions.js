/**
 * transitions.js 
 * Animation module for sliding and fading effects.
 * Created by Timedoor Indonesia
 * Version 1.0.2
 */

const initialDuration = 400;

/**
 * Function to slide up an element
 * @param {Element} target - The DOM element to slide up.
 * @param {number} [duration=initialDuration] - Duration of the animation in milliseconds.
 * @param {Function} [callback] - Optional callback function to be executed after the animation completes.
 */
let slideUp = (target, duration = initialDuration, callback, callbackTiming = 'end') => {
    if (target.isAnimating) return; // Prevent overlapping animations
    target.isAnimating = true;

    if (callbackTiming === 'start' && typeof callback === 'function') callback(); // Trigger callback at the start

    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = `${duration}ms`;
    target.style.boxSizing = "border-box";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight; // Force reflow
    target.style.overflow = "hidden";
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";

    window.setTimeout(() => {
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
let slideDown = (target, duration = initialDuration, callback, callbackTiming = 'end') => {
    if (target.isAnimating) return; // Prevent overlapping animations
    target.isAnimating = true;

    if (callbackTiming === 'start' && typeof callback === 'function') callback(); // Trigger callback at the start

    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";

    target.style.display = display;
    const height = target.offsetHeight; // Get full height
    target.style.overflow = "hidden";
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    target.offsetHeight; // Force reflow
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = `${duration}ms`;
    target.style.height = `${height}px`;
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");

    window.setTimeout(() => {
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
let slideToggle = (target, duration = initialDuration, callback, callbackTiming = 'end') => {
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
let fadeOut = (target, duration = initialDuration, callback, callbackTiming = 'end') => {
    if (target.isAnimating) return; // Prevent overlapping animations
    target.isAnimating = true;

    if (callbackTiming === 'start' && typeof callback === 'function') callback(); // Trigger callback at the start

    target.style.transitionProperty = "opacity";
    target.style.transitionDuration = `${duration}ms`;
    target.style.opacity = "1";

    window.setTimeout(() => {
        target.style.opacity = "0";
    }, 0);

    window.setTimeout(() => {
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
let fadeIn = (target, duration = initialDuration, callback, callbackTiming = 'end') => {
    if (target.isAnimating) return; // Prevent overlapping animations
    target.isAnimating = true;

    if (callbackTiming === 'start' && typeof callback === 'function') callback(); // Trigger callback at the start

    target.style.display = "block";
    target.style.opacity = "0";
    target.style.transitionProperty = "opacity";
    target.style.transitionDuration = `${duration}ms`;

    window.setTimeout(() => {
        target.style.opacity = "1";
    }, 0);

    window.setTimeout(() => {
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
let fadeToggle = (target, duration = initialDuration, callback, callbackTiming = 'end') => {
    if (window.getComputedStyle(target).display === "none") {
        fadeIn(target, duration, callback, callbackTiming);
    } else {
        fadeOut(target, duration, callback, callbackTiming);
    }
};

// Export for the namespace
export { slideUp, slideDown, slideToggle, fadeOut, fadeIn, fadeToggle };

// Example Usage
// document.querySelector('.button').addEventListener('click', () => {
//     fadeToggle(document.querySelector('.target'), 200);
// });
