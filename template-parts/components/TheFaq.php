<?php
    $sectionTitle = get_field('faq_section_title');
    $sectionSubtitle = get_field('faq_section_subtitle');
?>

<section id="faq" class="section faq">
    <div class="container">
        <div class="row faq__row">
            <div class="col-md-3">
                <h2 class="section__title faq__section-title" data-aos="fade-up"><?php echo esc_html($sectionTitle);?></h2>
                <div class="section__subtitle faq__section-subtitle" data-aos="fade-up"><?php echo $sectionSubtitle; ?></div>
            </div>
            <div class="col-md-8">
                <div class="accordion faq-accordion faq__list" id="accordionFaq" data-aos="fade-up">
                    <?php if(have_rows('faq_list')): ?>
                        <?php $i = 1; $first = true; ?>
                        <?php while(have_rows('faq_list')) : the_row(); ?>
                            <?php
                            $questions = get_sub_field('questions');
                            $answers = get_sub_field('answers');
                            ?>
                            <div class="accordion-item faq-accordion__item">
                                <h3 class="accordion-header faq-accordion__header" id="heading<?php echo $i; ?>">
                                    <button class="accordion-button faq-accordion__button <?php echo $first ? '' : 'collapsed'; ?> paragraph paragraph--bold" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $i; ?>"
                                            aria-expanded="<?php echo $first ? 'true' : 'false'; ?>" aria-controls="collapse<?php echo $i; ?>">
                                        <?php echo $questions; ?>
                                    </button>
                                </h3>
                                <div id="collapse<?php echo $i; ?>" class="accordion-collapse collapse <?php echo $first ? 'show' : ''; ?>"
                                    aria-labelledby="heading<?php echo $i; ?>" data-bs-parent="#accordionFaq">
                                    <div class="accordion-body faq-accordion__body">
                                        <p class="paragraph faq-accordion__paragraph"><?php echo $answers; ?></p>
                                    </div>
                                </div>
                            </div>
                            <?php $first = false; $i++; ?>
                        <?php endwhile; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>
