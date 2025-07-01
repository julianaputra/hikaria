<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Timedoor
 */

get_header();
?>

<?php
get_header();
?>

<?php require_once('assets/dummy/intro.php'); ?>

<style>
    pre {
        white-space: normal;
        margin-bottom: 0;
    }

    .highlight {
        background-color: #ebebeb;
        padding: 10px;
        border-radius: 8px;
    }

    .highlight pre {
        white-space: normal;
    }

    .nav-pills .nav-link.active,
    .nav-pills .show>.nav-link {
        background-color: #242e3a;
    }

    .nav-link {
        color: #242e3a;
    }

    .nav-link:hover,
    .nav-link:focus {
        color: #242e3a;
    }
</style>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="nav flex-column nav-pills me-md-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link text-start active" data-bs-toggle="pill" data-bs-target="#v-intro" type="button" role="tab" aria-controls="v-intro" aria-selected="true">Introduction</button>
                    <button class="nav-link text-start" data-bs-toggle="pill" data-bs-target="#v-scss" type="button" role="tab" aria-controls="v-scss" aria-selected="true">SCSS Mixins and Functions</button>
                    <button class="nav-link text-start" data-bs-toggle="pill" data-bs-target="#v-php-func" type="button" role="tab" aria-controls="v-php-func" aria-selected="true">PHP Functions</button>
                    <button class="nav-link text-start" data-bs-toggle="pill" data-bs-target="#v-js-func" type="button" role="tab" aria-controls="v-js-func" aria-selected="true">JS Functions</button>
                    <button class="nav-link text-start" data-bs-toggle="pill" data-bs-target="#v-comps" type="button" role="tab" aria-controls="v-comps" aria-selected="true">Initial Components</button>
                    <button class="nav-link text-start" data-bs-toggle="pill" data-bs-target="#v-coding" type="button" role="tab" aria-controls="v-coding" aria-selected="true">Coding Standard</button>
                </div>
            </div>
            <div class="col-md-9">
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-intro" role="tabpanel" aria-labelledby="v-intro-tab" tabindex="0">
                        <h1>Welcome to Timedoor WordPress Theme Starter!</h1>
                        <p>Greetings, team!</p>
                        <p>
                            We are thrilled to introduce the <strong>Timedoor WordPress Theme Starter</strong>, a robust and efficient foundation 
                            designed to streamline your theme development process. Powered by <strong>Laravel Mix</strong>, this starter kit offers 
                            a modern workflow to compile and optimize SCSS, JavaScript, and other assets with ease.
                        </p>
                        <p>
                            This starter kit is built with <strong>best practices</strong> and <strong>scalable architecture</strong> in mind, 
                            enabling us to maintain high-quality standards across all projects while delivering exceptional performance.
                        </p>

                        <br>
                        <hr>
                        <br>

                        <h2>Why Use the Timedoor WordPress Theme Starter?</h2>
                        <ul>
                            <li><strong>Laravel Mix Integration:</strong> Simplified asset compilation using an intuitive, developer-friendly tool.</li>
                            <li><strong>Modular File Structure:</strong> A well-organized structure that promotes scalability and ease of navigation.</li>
                            <li><strong>Customizable Components:</strong> Pre-built components to accelerate project-specific customizations.</li>
                            <li><strong>Responsive Design:</strong> Mobile-first styling ensures your themes look great on any device.</li>
                            <li><strong>Performance Optimization:</strong> Built-in minification and optimization for faster load times.</li>
                            <li><strong>Clean and Maintainable Code:</strong> Adherence to coding standards for consistent and reliable development.</li>
                        </ul>

                        <br>
                        <hr>
                        <br>

                        <h2>Key Features</h2>
                        <ul>
                            <li><strong>Modern Development Workflow:</strong> Uses Laravel Mix to compile SCSS and JavaScript with support for versioning and source maps.</li>
                            <li><strong>Live Development:</strong> Watch files and recompile assets instantly for faster feedback during development.</li>
                            <li><strong>Environment-Specific Builds:</strong> Separate commands for development and production to maximize efficiency.</li>
                            <li><strong>Cross-Browser Compatibility:</strong> Ensures assets perform consistently across different browsers.</li>
                        </ul>

                        <br>
                        <hr>
                        <br>

                        <h2>Installation and Usage</h2>
                        <ol>
                            <li>
                                Clone the Repository <br>
                                Get the latest version of the Timedoor WordPress Theme Starter from our repository:

                                <div class="highlight">
                                    <pre>
                                        <code>
                                            git clone &lt;repository_url&gt; timedoor-theme <br> 
                                            cd timedoor-theme  
                                        </code>
                                    </pre>
                                </div>
                            </li>
                            <li>
                                Install Dependencies <br>
                                Make sure Node.js and npm are installed. Then, run:

                                <div class="highlight">
                                    <pre>
                                        <code>npm install</code>
                                    </pre>
                                </div>
                            </li>
                            <li>
                                Build Commands<br>
                                <ul>
                                    <li>
                                        Start Development Mode: <br>
                                        Watches SCSS and JavaScript files for changes and automatically recompiles them:
                                        
                                        <div class="highlight">
                                            <pre>
                                                <code>npm run watch</code>
                                            </pre>
                                        </div>
                                    </li>
                                    <li>
                                        Build for Production: <br>
                                        Compiles, minifies, and versionizes assets for a production-ready build:

                                        <div class="highlight">
                                            <pre>
                                                <code>npm run prod</code>
                                            </pre>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Customize the Theme<br>
                                Use the SCSS, JavaScript, and PHP files provided as a base. Laravel Mix handles the asset bundling and ensures smooth integration with your WordPress theme.
                            </li>
                        </ol>

                        <br>
                        <hr>
                        <br>

                        <h2>Laravel Mix Configuration</h2>
                        <p>Laravel Mix simplifies the build process with a <code>webpack.mix.js</code> file located at the root of the theme directory.</p>
                        File Locations:
                        <ul>
                            <li>SCSS: <code>resources/scss</code></li>
                            <li>JavaScript: <code>resources/js</code></li>
                            <li>Compiled Assets: <code>assets/css and assets/js</code></li>
                        </ul>

                        <br>
                        <hr>
                        <br>

                        <h2>Getting Started</h2>
                        <ol>
                            <li><strong>Set Up Local Environment:</strong> Activate the theme by placing it in the <code>wp-content/themes</code> directory of your WordPress installation.</li>
                            <li><strong>Edit Metadata:</strong> Update the <code>style.css</code> file header with project-specific details like theme name and author.</li>
                            <li><strong>Run Development Mode:</strong> Use <code>npm run watch</code> to automatically compile changes during development.</li>
                            <li><strong>Deploy Production Build:</strong> Run <code>npm run prod</code> before deployment to generate optimized assets.</li>
                        </ol>

                        <br>
                        <hr>
                        <br>

                        <h2>Final Thoughts</h2>
                        <p>With <strong>Laravel Mix</strong> powering our development workflow, creating high-quality, performant, and maintainable WordPress themes has never been easier. 
                        Let's leverage this tool to build exceptional websites that delight our clients and exceed their expectations.</p>
                    </div>
                    <div class="tab-pane fade" id="v-scss" role="tabpanel" aria-labelledby="v-scss-tab" tabindex="0">
                        <h1><?php echo $scss['title'] ?></h1>
                        <p>
                            <?php echo $scss['description'] ?>
                        </p>
                        <br>

                        <h2>Functions <sup>v1.3.1</sup></h2>
                        <hr>
                        <?php foreach ($scss['functions'] as $key => $function) : ?>
                            <h3><?php echo $function['name'] ?></h3>
                            <p><?php echo $function['description'] ?></p>
                            <h4>Usage</h4>
                            <div class="highlight">
                                <pre>
                                    <code><?php echo $function['usage'] ?></code>
                                </pre>
                            </div>

                            <br>
                            <br>
                        <?php endforeach; ?>
                        <br>
                        <h2>Mixins <sup>v3.1.1</sup></h2>
                        <hr>
                        <?php foreach ($scss['mixins'] as $key => $mixin) : ?>
                            <h3><?php echo $mixin['name'] ?></h3>
                            <p><?php echo $mixin['description'] ?></p>
                            <h4>Usage</h4>
                            <div class="highlight">
                                <pre>
                                    <code><?php echo $mixin['usage'] ?></code>
                                </pre>
                            </div>

                            <br>
                            <br>
                        <?php endforeach; ?>

                    </div>
                    <div class="tab-pane fade" id="v-php-func" role="tabpanel" aria-labelledby="v-php-func-tab" tabindex="0">
                        <h1><?php echo $php['title'] ?> <sup>v1.0.0</sup></h1>
                        <p>
                            <?php echo $php['description'] ?>
                        </p>

                        <br>

                        <?php foreach ($php['functions'] as $key => $function) : ?>
                            <h3><?php echo $function['name'] ?></h3>
                            <p>
                                <?php echo $function['description'] ?>
                            </p>
                            <h4>Usage</h4>
                            <div class="highlight">
                                <pre>
                                    <code><?php echo $function['usage'] ?></code>
                                </pre>
                            </div>

                            <br>
                            <br>
                        <?php endforeach; ?>
                    </div>
                    <div class="tab-pane fade" id="v-js-func" role="tabpanel" aria-labelledby="v-js-func-tab" tabindex="0">
                        <h1><?php echo $js['title'] ?></h1>
                        <p>
                            <?php echo $js['description'] ?>
                        </p>
                        <br>

                        <h2>Transitions <sup>v1.0.1</sup></h2>
                        <hr>
                        <?php foreach ($js['transitions'] as $key => $function) : ?>
                            <h3><?php echo $function['name'] ?></h3>
                            <p>
                                <?php echo $function['description'] ?>
                            </p>
                            <h4>Usage</h4>
                            <div class="highlight">
                                <pre>
                                    <code><?php echo $function['usage'] ?></code>
                                </pre>
                            </div>

                            <br>
                            <br>
                        <?php endforeach; ?>
                    </div>
                    <div class="tab-pane fade" id="v-comps" role="tabpanel" aria-labelledby="v-comps-tab" tabindex="0">
                        <h1><?php echo $comps['title'] ?></h1>
                        <p>
                            <?php echo $comps['description'] ?>
                        </p>

                        <br>

                        <?php foreach ($comps['list'] as $key => $list) : ?>
                            <h3><?php echo $list['name'] ?></h3>
                            <?php eval("?>" . htmlspecialchars_decode($list['example']) . "<?php "); ?>
                            <br>
                            <br>
                            <h4>Usage</h4>
                            <div class="highlight">
                                <pre>
                                    <code>
                                        <?php echo $list['usage'] ?>
                                    </code>
                                </pre>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="tab-pane fade" id="v-coding" role="tabpanel" aria-labelledby="v-coding-tab" tabindex="0">
                        <h1><?php echo $standard['title'] ?></h1>
                        <br>
                        <?php foreach ($standard['list'] as $key => $s) : ?>
                            <h2><?php echo $s['name'] ?></h2>
                            <?php echo $s['content'] ?>

                            <br>
                            <hr>
                            <br>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php
get_footer()
?>

<?php
get_footer();
?>