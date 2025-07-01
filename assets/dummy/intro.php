<?php 

$scss = [
    'title' => 'SCSS Mixins and Functions Starter',
    'description' => 'SCSS Starter Kit is a collection of essential SCSS functions and mixins compiled into a single file. This toolkit is designed to jumpstart your application by providing a robust, consistent, and straightforward baseline for building sophisticated PHP applications.',
    'functions' => [
        [
            'name' => 'color()',
            'description' => '
                This SCSS function retrieves the value of a specified color variable. <br>
                The <code>$colorName</code> parameter specifies the name of the color variable to retrieve. <br>
                The <code>$colorValue</code> parameter is an optional fallback value if the color variable is not found.
            ',
            'usage' => 'color($colorName, $colorValue: default)'
        ],
        [
            'name' => 'desktopStart()',
            'description' => '
                This SCSS function returns the starting breakpoint value for desktop view. <br>
                It provides the first registered responsive data point for desktop screens
            ',
            'usage' => '@media (max-width: desktopStart())'
        ],
        [
            'name' => 'mobileStart()',
            'description' => '
                This SCSS function returns the starting breakpoint value for mobile view. <br>
                It provides the first registered responsive data point for mobile screens
            ',
            'usage' => '@media (max-width: mobileStart())'
        ],
    ],
    'mixins' => [
        [
            'name' => 'imageRatio()',
            'description' => '
                This mixin creates ratio-based container classes for images, providing <br>
                @param {List} <code>$desktopDimension</code> - The dimensions (width, height) for desktop view. <br>
                @param {List|Boolean} <code>$mobileDimension</code> - The optional dimensions (width, height) for mobile view.<br>
                @param {Boolean|Unit} <code>$maxWidth</code> - An optional maximum width value. Can be a boolean or a specific unit. <br>
                @param {String} <code>$objectFit</code> - The object-fit property value for the image (default: contain). <br>
                @param {String} <code>$className</code> - The base class name for the container (default: "image"). <br>
            ',
            'usage' => '@include imageRatio($desktopDimension, $mobileDimension, $maxWidth, $objectFit, $className);'
        ],
        [
            'name' => 'typo()',
            'description' => '
                This mixin creates typography styles with responsive handling for ellipsis and font sizes.<br>
                It iterates over desktop and mobile breakpoints to apply specific styles based on the given parameters.<br>
                @param {String} <code>$fontName</code> - The name of the font style to apply.<br>
                @param {Boolean} <code>$elypsis</code> - Enable ellipsis for text overflow (default: false).<br>
                @param {Number} <code>$line-to-show</code> - The number of lines to show before truncating with ellipsis (default: 1).<br>
                @param {Number} <code>$line-height</code> - The line height for the text (default: 1.6),<br>
            ',
            'usage' => '@include typo($fontName, $elypsis: true, $line-to-show: 2, $line-height: 1.4);'
        ],
        [
            'name' => 'vwUnit()',
            'description' => '
                This mixin sets a CSS property using viewport width (vw) units for both desktop and mobile breakpoints.<br>
                @param {String} <code>$property</code> - The CSS property to apply. <br>
                @param {Number} <code>$valueD</code> - The value for the property in vw units for desktop view. <br>
                @param {Number|null} <code>$valueM</code> - The optional value for the property in vw units for mobile view. Defaults to the desktop value if not provided.<br>
            ',
            'usage' => '
                @include vwUnit(font-size, 5, 4);
                <br>
                <br>
                /** OR */
                <br>
                <br>
                @include vwUnit(padding, 10 20, 5 10);
            '
        ],
        [
            'name' => 'vwDesktop()',
            'description' => '
                This mixin sets a CSS property using viewport width (vw) units for desktop breakpoints.<br>
                @param {String} <code>$property</code> - The CSS property to apply. <br>
                @param {Number} <code>$value</code> - The value for the property in vw units. <br>
            ',
            'usage' => '
                @include vwDesktop(font-size, 5);
                <br>
                <br>
                /** OR */
                <br>
                <br>
                @include vwDesktop(padding, 10 20);
            '
        ],
        [
            'name' => 'vwMobile()',
            'description' => '
                This mixin sets a CSS property using viewport width (vw) units for mobile breakpoints.<br>
                @param {String} <code>$property</code> - The CSS property to apply. <br>
                @param {Number} <code>$value</code> - The value for the property in vw units. <br>
            ',
            'usage' => '
                @include vwMobile(font-size, 5);
                <br>
                <br>
                /** OR */
                <br>
                <br>
                @include vwMobile(padding, 10 20);
            '
        ],
    ],
];

$php = [
    'title' => 'PHP Functions Starter',
    'description' => 'PHP Functions Starter is a collection of essential PHP functions compiled into a single file. This toolkit is designed to jumpstart your application by providing a robust, consistent, and straightforward baseline for building sophisticated PHP applications.',
    'functions' => [
        [
            'name' => 'components()',
            'description' => '
                This function loads a component template part located in the <code>/template-parts/components/</code> directory. <br>
                The <code>$name</code> parameter specifies the name of the component to load, while the <code>$args</code> parameter is an optional array of arguments to pass to the component. <br>
                @param {string} <code>$name</code> - The name of the component to load. <br>
                @param {array} <code>$args</code> - Optional. An array of arguments to pass to the component. Default is an empty array. <br>
                @return void
            ',
            'usage' => "
                &lt;?php components('TheHeader'); ?&gt;
                <br>
                <br>
                /** OR */
                <br>
                <br>
                &lt;?php components('BaseButton', array('arg1' => 'value1')); ?&gt;
            "
        ],
        [
            'name' => 'getPageData()',
            'description' => '
                Retrieves the page data object by the given page title. <br>
                This function searches through the "page_links" field for an entry with a matching page title and returns the corresponding page object. <br>
                Ensure that the page title exists in the page option general settings -> page link. <br>
                @param {string} <code>$page_title</code> - The title of the page to search for. <br>
                @return mixed The page object if found, or an error message if not found.
            ',
            'usage' => "&lt;?php getPageData('Contact Us'); ?&gt;"
        ],
        [
            'name' => 'getCurrentLang()',
            'description' => '
                Retrieves the current language of the WordPress site. <br>
                This function can be called within templates to obtain the current language setting. <br>
                It is particularly useful when working with the Polylang plugin. <br>
                @return string The current language in the format "en_us".
            ',
            'usage' => '&lt;?php getCurrentLang(); ?&gt;'
        ],
    ],
];

$js = [
    'title' => 'JS Functions',
    'description' => 'JavaScript Functions Starter is a comprehensive collection of fundamental JavaScript functions, all curated in one convenient file. This toolkit is crafted to accelerate your development process by providing a reliable and versatile base for creating sophisticated JavaScript applications effortlessly.',
    'transitions' => [
        [
            'name' => 'slideUp()',
            'description' => '
                Function to slide up an element over a specified duration. <br>
                The element`s height, padding, and margin are animated to 0, creating a slide-up effect. After the animation, the element`s display property is set to "none" and all inline styles used for the animation are removed. <br>
                <br>
                @param {HTMLElement} <code>target</code> - The DOM element to slide up<br>
                @param {number} <code>default = 400</code> - Duration of the animation in milliseconds (optional). <br>
                @param {Function} [callback] - Callback function to be executed after the animation completes (optional).
            ',
            'usage' => "
                slideUp(document.querySelector('.target'))
                <br>
                <br>
                /** OR */
                <br>
                <br>
                slideUp(document.querySelector('.target'), 200)
                <br>
                <br>
                /** OR */
                <br>
                <br>
                slideUp(document.querySelector('.target'), 200, () => { <br>
                &nbsp;&nbsp; console.log('slide') <br>
                })
            "
        ],
        [
            'name' => 'slideDown()',
            'description' => '
                Function to slide down an element over a specified duration. <br>
                This function makes an element visible by expanding its height, padding, and margin from 0 to their original values. It also ensures that any previously set display property is restored. <br>
                <br>
                @param {HTMLElement} <code>target</code> - The DOM element to slide down<br>
                @param {number} <code>default = 400</code> - Duration of the animation in milliseconds (optional).<br>
                @param {Function} [callback] - Callback function to be executed after the animation completes (optional).
            ',
            'usage' => "
                slideDown(document.querySelector('.target'))
                <br>
                <br>
                /** OR */
                <br>
                <br>
                slideDown(document.querySelector('.target'), 200)
                <br>
                <br>
                /** OR */
                <br>
                <br>
                slideDown(document.querySelector('.target'), 200, () => { <br>
                &nbsp;&nbsp; console.log('slide') <br>
                })
            "
        ],
        [
            'name' => 'slideToggle()',
            'description' => '
                Function to toggle the slide up/down effect on an element. <br>
                If the element is currently hidden, it slides down; otherwise, it slides up.<br>
                <br>
                @param {HTMLElement} <code>target</code> - The DOM element to toggle <br>
                @param {number} <code>default = 400</code> - Duration of the animation in milliseconds (optional).<br>
                @param {Function} [callback] - Callback function to be executed after the animation completes (optional).
            ',
            'usage' => "
                slideToggle(document.querySelector('.target'))
                <br>
                <br>
                /** OR */
                <br>
                <br>
                slideToggle(document.querySelector('.target'), 200, () => { <br>
                &nbsp;&nbsp; console.log('slide') <br>
                })
            "
        ],
        [
            'name' => 'fadeIn()',
            'description' => '
                Function to gradually fade in an element over a specified duration. <br>
                This function increase the opacity of the target element from 0 to 1, creating a fade-in effect. After the animation, the element`s display property is set to "block" and all inline styles used for the animation are removed. <br>
                <br>
                @param {HTMLElement} <code>target</code> - The DOM element to fade out<br>
                @param {number} <code>default = 400</code> - Duration of the animation in milliseconds (optional).<br>
                @param {Function} [callback] - Callback function to be executed after the animation completes (optional).
            ',
            'usage' => "
                fadeIn(document.querySelector('.target'))
                <br>
                <br>
                /** OR */
                <br>
                <br>
                fadeIn(document.querySelector('.target'), 200)
                <br>
                <br>
                /** OR */
                <br>
                <br>
                fadeIn(document.querySelector('.target'), 200, () => { <br>
                &nbsp;&nbsp; console.log('fade') <br>
                })
            "
        ],
        [
            'name' => 'fadeOut()',
            'description' => '
                Function to gradually fade out an element over a specified duration. <br>
                This function decreases the opacity of the target element from 1 to 0, creating a fade-out effect. After the animation, the element`s display property is set to "none" and all inline styles used for the animation are removed. <br>
                <br>
                @param {HTMLElement} <code>target</code> - The DOM element to fade out<br>
                @param {number} <code>default = 400</code> - Duration of the animation in milliseconds (optional).<br>
                @param {Function} [callback] - Callback function to be executed after the animation completes (optional).
            ',
            'usage' => "
                fadeOut(document.querySelector('.target'))
                <br>
                <br>
                /** OR */
                <br>
                <br>
                fadeOut(document.querySelector('.target'), 200)
                <br>
                <br>
                /** OR */
                <br>
                <br>
                fadeOut(document.querySelector('.target'), 200, () => { <br>
                &nbsp;&nbsp; console.log('fade') <br>
                })
            "
        ],
        [
            'name' => 'fadeToggle()',
            'description' => '
                Function to toggle the fade in/out effect on an element. <br>
                If the element is currently hidden, it fades in; otherwise, it fades out.<br>
                <br>
                @param {HTMLElement} <code>target</code> - The DOM element to fade in<br>
                @param {number} <code>default = 400</code> - Duration of the animation in milliseconds (optional).<br>
                @param {Function} [callback] - Callback function to be executed after the animation completes (optional).
            ',
            'usage' => "
                fadeToggle(document.querySelector('.target'))
                <br>
                <br>
                /** OR */
                <br>
                <br>
                fadeToggle(document.querySelector('.target'), 200)
                <br>
                <br>
                /** OR */
                <br>
                <br>
                fadeToggle(document.querySelector('.target'), 200, () => { <br>
                &nbsp;&nbsp; console.log('fade') <br>
                })
            "
        ],
    ],
];

$comps = [
    'title' => 'Initial Components',
    'description' => 'This section contains the basic building blocks for your application. These components are reusable and easy to customize, helping you create a consistent user interface.',
    'list' => [
        [
            'name' => 'ThemeButton',
            'example' => '
                <?php components("ThemeButton", [
                    "text" => "Hello",
                ]) ?>
            ',
            'usage' => "
                &lt;?php components('ThemeButton', [ <br>
                &nbsp;&nbsp; 'text' => 'Hello', <br>
                ]) ?&gt;
            "
        ]
    ]
];

$standard = [
    'title' => 'Coding Standards for WordPress Team',
    'list' => [
        [
            'name' => 'General Guidelines',
            'content' => '
                <ul>
                    <li><strong>Adherence to Standards:</strong> Always follow the official WordPress coding standards for HTML, PHP, JavaScript, and CSS to ensure compatibility, readability, and maintainability.</li>
                    <li><strong>Consistency in Code:</strong> Maintain uniformity in naming conventions, indentation, and formatting across all files to enhance collaboration and reduce potential errors.</li>
                    <li><strong>Modern Build Tools:</strong> Utilize npm for managing project dependencies, automating build processes, and streamlining workflows. This includes tasks like compiling SCSS, bundling JavaScript, and optimizing assets for production.</li>
                </ul>
            '
        ],
        [
            'name' => 'Component Naming Guidelines',
            'content' => '
                <ul>
                    <li><strong>Multi-Word Names:</strong> Ensure all component names are multi-word to prevent conflicts with PHP`s built-in classes or functions, and to improve clarity.</li>
                    <li><strong>PascalCase Convention:</strong> Use PascalCase (e.g., MyComponent) for naming components to distinguish them from other code entities.
                    </li>
                </ul>
                <strong>Examples:</strong>
                <div class="highlight">
                    <pre>
                        <code>
                            BaseButton.php<br>
                            SearchBar.php<br>
                            ProductDetail.php
                        </code>
                    </pre>
                </div>
            '
        ],
        [
            'name' => 'HTML',
            'content' => '
                <ul>
                    <li><strong>Semantic Structure:</strong> Leverage semantic HTML5 elements such as <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code> to enhance accessibility and SEO.</li>
                    <li><strong>Indentation:</strong> Use consistent indentation with 4 tabs to maintain code readability and structure.
                    </li>
                    <li><strong>External Stylesheets:</strong> Avoid using inline styles; instead, define styles in external SCSS files for maintainability.</li>
                    <li><strong>Minimize Redundancy:</strong> Use appropriate HTML elements and avoid unnecessary wrappers (e.g., replace <code>&lt;div&gt;</code> with  <code>&lt;section&gt;</code> where applicable).</li>
                </ul>
            '
        ],
        [
            'name' => 'PHP',
            'content' => '
                <ul>
                    <li><strong>Reusable Logic:</strong> Write reusable functions for common operations to reduce code duplication and ensure consistent behavior.</li>
                    <li><strong>Namespace Prefixing:</strong> Prefix custom functions, classes, and variables with a unique namespace (e.g., <code>mytheme_</code>) to avoid conflicts with WordPress core or third-party plugins/themes.</li>
                </ul>
            '
        ],
        [
            'name' => 'SCSS (Using BEM)',
            'content' => '
                <ul>
                    <li>
                        <strong>BEM Methodology:</strong> Follow the Block-Element-Modifier (BEM) convention for naming classes. This ensures clarity and consistency in style definitions.
                        <ul>
                            <li><strong>Block:</strong> Represents a standalone entity (e.g., <code>menu</code>).</li>
                            <li><strong>Element:</strong> Denotes a part of the block (e.g., <code>menu__item</code>).</li>
                            <li><strong>Modifier:</strong> Represents a variation of the block or element (e.g., <code>menu__item--active</code>).</li>
                        </ul>
                    </li>
                    <li><strong>Modular Organization:</strong> Keep SCSS files organized into components, layouts, and utilities to promote modularity and scalability.</li>
                    <li><strong>Optimized Usage:</strong> Use variables, mixins, and nesting sparingly to maintain readability and avoid overly complex styles.</li>
                </ul>
            '
        ],
        [
            'name' => 'JavaScript',
            'content' => '
                <ul>
                    <li>
                        <strong>Functionality Splitting:</strong>
                        <ul>
                            <li>Write small, reusable functions that handle specific tasks to promote clarity and reusability.</li>
                            <li>Keep each file focused on a single functionality to make debugging and updates easier.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Modular Imports:</strong>
                        <ul>
                            <li>Import only the required modules to reduce the overall bundle size and enhance code maintainability.</li>
                            <li>Use ES6 module syntax (<code>import</code> and <code>export</code>) for a clean, modular structure.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Event Listeners:</strong>
                        <ul>
                            <li>Always wrap initialization code inside the <code>DOMContentLoaded</code> event to ensure the DOM is fully loaded before executing scripts.</li>
                        </ul>
                    </li>
                </ul>
            '
        ],
    ]
]

?>