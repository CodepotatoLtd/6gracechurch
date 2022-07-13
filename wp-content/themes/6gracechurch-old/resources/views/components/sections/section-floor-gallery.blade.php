<?php $sectionData = get_section_data($sectionFieldData);?>
<?php if (have_rows('section')) :
while (have_rows('section')) :
the_row();?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-floor-gallery
            bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>


           p-t-mobile-<?php echo $sectionData -> sectionOptions->section_padding_top_mobile;?>
           p-r-mobile-<?php echo $sectionData -> sectionOptions->section_padding_right_mobile;?>
           p-b-mobile-<?php echo $sectionData -> sectionOptions->section_padding_bottom_mobile;?>
           p-l-mobile-<?php echo $sectionData -> sectionOptions->section_padding_left_mobile;?>

           p-t-desktop-<?php echo $sectionData -> sectionOptions->section_padding_top_desktop;?>
           p-r-desktop-<?php echo $sectionData -> sectionOptions->section_padding_right_desktop;?>
           p-b-desktop-<?php echo $sectionData -> sectionOptions->section_padding_bottom_desktop;?>
           p-l-desktop-<?php echo $sectionData -> sectionOptions->section_padding_left_desktop;?>

           h-<?php echo $sectionData-> sectionOptions->section_height;?>-mobile
           h-<?php echo $sectionData-> sectionOptions->section_height_desktop;?>-desktop

         <?php echo $sectionData -> sectionOptions->text_size;?>
         <?php echo $sectionData -> sectionOptions->section_class;?>" >

  @include('components.components.component-background-image-portrait-landscape')

  <div class="text-<?php echo $sectionData->sectionOptions->text_colour;?>
  <?php echo $sectionData->sectionOptions->text_size;?> "
       data-aos="fade-up" data-aos-duration="750">

    @include('components.components.component-intro')

  </div>

  <div class="<?php echo $sectionData->galleryOptions->container_type;?> full-height">
    <div class="row align-items-center <?php echo $sectionData->galleryOptions->container_position;?> full-height">
      <div class="<?php echo $sectionData->galleryOptions->container_width;?> text-<?php echo $sectionData->sectionOptions->text_colour;?> full-height">

        <?php if (have_rows('content')) : ?>
        <?php while (have_rows('content')) :
        the_row();?>

        <?php $count = count(get_sub_field('gallery')); ?>

        <?php
        $images = get_sub_field('gallery');
        if ($images) :
        if ($count > 1) { ?>
        <div class="swiper-container floor-gallery">
          <div class="swiper-wrapper">
            <?php foreach ($images as $image) : ?>
            <div class="swiper-slide bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>">
              <div class="info">
                <h3><?php echo esc_html($image['title']); ?></h3>
                <?php if ($image['description']){?>
                <p class="description"><?php echo htmlspecialchars_decode(esc_html($image['description'])); ?></p>
                <?php } ?>
                <?php if ($image['caption']){?>
                <p><?php echo esc_html($image['caption']); ?></p>
                <?php } ?>
              </div>

              <img src="<?php echo esc_url($image['sizes']['acf-floor-gallery-image']); ?>"
                   alt="<?php echo esc_attr($image['alt']); ?>" />
              <?php  if ($sectionData->galleryOptions->caption == "yes") {?>

              <?php }?>
            </div>
            <?php endforeach; ?>
          </div>

          <div class="compass">

            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 43.4 73.8" style="enable-background:new 0 0 43.4 73.8;" xml:space="preserve">
            <style type="text/css">
              .st2{fill:#085042;}
              .st3{fill:none;stroke:#60B4A1;stroke-width:2;}
              .st4{fill:none;stroke:#085042;stroke-width:1.4;}
            </style>
              <g id="Group_8973" transform="translate(0 44.248)">
                <g id="Group_8969" transform="translate(15.004 7.894)">
                  <path id="Path_9061" class="st2" d="M11.1,0v14.7L2.6,0H0v18.7h2.3V4l8.5,14.7h2.6V0H11.1z"/>
                </g>
                <g>
                  <g id="Group_8971" transform="translate(0 -44.248)">
                    <g id="Group_8970" transform="translate(0.583 0.585)">
                      <path id="Path_9062" class="st3" d="M21.1,42.2c11.7,0,21.1-9.4,21.1-21.1c0,0,0,0,0,0C42.2,9.5,32.8,0,21.1,0
					C9.5,0,0,9.4,0,21.1C0,32.8,9.4,42.2,21.1,42.2C21.1,42.2,21.1,42.2,21.1,42.2z"/>
                    </g>
                  </g>
                </g>
                <g id="Group_8972" transform="translate(21.687 -38.292)">
                  <path id="Path_9064" class="st4" d="M0,15.7L14.9,0"/>
                </g>
              </g>
            </svg>

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
          <div class="swiper-pagination"></div>
          <?php }?>
        </div>

        <?php } else { ?>
        <div class="gallery-single-image">
          <?php foreach ($images as $image) : ?>
          <img src="<?php echo esc_url($image['sizes']['acf-floor-gallery-image']); ?>"
               alt="<?php echo esc_attr($image['alt']); ?>" />
          <?php endforeach; ?>
        </div>

        <?php } ?>

          <div class="small">
            <?php echo get_sub_field('footnote'); ?>
          </div>

        <?php endif; ?>
        <?php endwhile; ?>
        <?php endif; ?>

      </div>
    </div>
  </div>
</section>

<?php endwhile;
endif; ?>
