<?php $sectionData = get_section_data($sectionFieldData);?>
<?php if (have_rows('section')) :
    while (have_rows('section')) :
        the_row();?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-gallery
            bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>
           h-<?php echo $sectionData-> sectionOptions->section_height;?>-mobile
           h-<?php echo $sectionData-> sectionOptions->section_height_desktop;?>-desktop

           p-t-mobile-<?php echo $sectionData -> sectionOptions->section_padding_top_mobile;?>
           p-r-mobile-<?php echo $sectionData -> sectionOptions->section_padding_right_mobile;?>
           p-b-mobile-<?php echo $sectionData -> sectionOptions->section_padding_bottom_mobile;?>
           p-l-mobile-<?php echo $sectionData -> sectionOptions->section_padding_left_mobile;?>

           p-t-desktop-<?php echo $sectionData -> sectionOptions->section_padding_top_desktop;?>
           p-r-desktop-<?php echo $sectionData -> sectionOptions->section_padding_right_desktop;?>
           p-b-desktop-<?php echo $sectionData -> sectionOptions->section_padding_bottom_desktop;?>
           p-l-desktop-<?php echo $sectionData -> sectionOptions->section_padding_left_desktop;?>

            <?php echo $sectionData -> sectionOptions->text_size;?>
            <?php echo $sectionData -> sectionOptions->section_class;?>" >

            @include('components.components.component-background-image-portrait-landscape')

  <div class="text-<?php echo $sectionData->sectionOptions->text_colour;?>
            <?php echo $sectionData->sectionOptions->text_size;?> "
            data-aos="fade-up" data-aos-duration="750">

            @include('components.components.component-intro')

  </div>

  <div class="gallery-wrapper">

    <div class="<?php echo $sectionData->galleryOptions->container_type;?>">
    <div class="row align-items-center <?php echo $sectionData->galleryOptions->container_position;?>">
      <div class="column <?php echo $sectionData->galleryOptions->container_width;?> text-<?php echo $sectionData->sectionOptions->text_colour;?>" data-aos="fade"  data-aos-duration="750" data-aos-delay="250">

            <?php if (have_rows('content')) : ?>
                <?php while (have_rows('content')) :
                    the_row();?>

                    <?php $count = count(get_sub_field('gallery')); ?>

                    <?php
                    $images = get_sub_field('gallery');
                    if ($images) :
                        if ($count > 1) { ?>
                          <div class="swiper-container gallery-swiper">
                            <div class="swiper-wrapper">
                                              <?php foreach ($images as $image) : ?>
                              <div class="swiper-slide bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>">

                                <!--<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />-->

                                <img src="<?php echo esc_url($image['sizes'][$sectionData->galleryOptions->image_size]); ?>"
                                     alt="<?php echo esc_attr($image['alt']); ?>" />
                                                    <?php  if ($sectionData->galleryOptions->caption == "yes") {?>
                                        <div class="caption
                                                    text-<?php echo $sectionData->sectionOptions->text_colour;?>
                                                    bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>">
                                                        <p><?php echo esc_html($image['caption']); ?></p>
                                                      </div>
                                                    <?php }?>
                              </div>
                                              <?php endforeach; ?>
                            </div>

                            <?php  if ($sectionData->galleryOptions->navigation == "yes") {?>
                              <div class="swiper-button-next">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 50 90" style="enable-background:new 0 0 50 90;" xml:space="preserve">
                                      <g id="Group_7236" transform="translate(122.478 86.432) rotate(-90)">
                                        <g>
                                          <g id="Group_56" transform="translate(0 -14.478)">
                                            <g id="Group_55" transform="translate(0.878 0.878)">
                                              <path id="Path_105" class="gallery-nav" d="M-1.8-105.5l42.3,42.3l42.3-42.3"/>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                </svg>
                              </div>
                              <div class="swiper-button-prev">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 50 90" style="enable-background:new 0 0 50 90;" xml:space="preserve">
                                        <g id="Group_7237" transform="translate(0 86.432) rotate(-90)">
                                          <g>
                                            <g id="Group_56-2" transform="translate(0 0)">
                                              <g id="Group_55-2" transform="translate(0.878 1.756)">
                                                <path id="Path_105-2" class="gallery-nav" d="M-1.8,44.9L40.6,2.5l42.3,42.3"/>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                    </svg>
                              </div>
                            <?php }?>

                            <?php  if ($sectionData->galleryOptions->pagination == "yes") {?>
                                <?php  if ($sectionData->galleryOptions->caption == "yes") {?>
                                <div class="gallery-pagination swiper-pagination has-caption"></div>

                                <?php } else {?>
                                <div class="gallery-pagination swiper-pagination"></div>

                                <?php }?>
                            <?php }?>
                          </div>

                        <?php } else { ?>
                          <div class="gallery-single-image">
                            <?php foreach ($images as $image) : ?>
                              <img src="<?php echo esc_url($image['sizes']['acf-gallery-image']); ?>"
                                   alt="<?php echo esc_attr($image['alt']); ?>" />
                            <?php endforeach; ?>
                          </div>

                        <?php } ?>
                    <?php endif; ?>
                <?php endwhile; ?>
            <?php endif; ?>

      </div>
    </div>
  </div>

  </div>
</section>

    <?php endwhile;
endif; ?>
