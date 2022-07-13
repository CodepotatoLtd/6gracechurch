<?php $sectionData = get_section_data($sectionFieldData);?>

<?php if (have_rows('section')) : while (have_rows('section')) : the_row();?>

<section class="section section-floor-gallery
section-gallery fullscreen-height-menu-desktop
bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>

  p-t-mobile-<?php echo $sectionData -> sectionOptions->section_padding_top_mobile;?>
  p-r-mobile-<?php echo $sectionData -> sectionOptions->section_padding_right_mobile;?>
  p-b-mobile-<?php echo $sectionData -> sectionOptions->section_padding_bottom_mobile;?>
  p-l-mobile-<?php echo $sectionData -> sectionOptions->section_padding_left_mobile;?>

  p-t-desktop-<?php echo $sectionData -> sectionOptions->section_padding_top_desktop;?>
  p-r-desktop-<?php echo $sectionData -> sectionOptions->section_padding_right_desktop;?>
  p-b-desktop-<?php echo $sectionData -> sectionOptions->section_padding_bottom_desktop;?>
  p-l-desktop-<?php echo $sectionData -> sectionOptions->section_padding_left_desktop;?>

  h-<?php echo $sectionData->sectionOptions->section_height;?>
  h-<?php echo $sectionData->sectionOptions->section_height;?>-desktop


   " >

  @include('components.components.component-background-image-portrait-landscape')



    <div class="<?php echo $sectionData->galleryOptions->container_type;?>">
      <div class="row align-items-center <?php echo $sectionData->galleryOptions->container_position;?>">
        <div class="<?php echo $sectionData->galleryOptions->container_width;?> text-<?php echo $sectionData->sectionOptions->text_colour;?>">



        <?php if (have_rows('content')) : ?>

        <?php while (have_rows('content')) : the_row();?>

        <?php $count = count(get_sub_field('gallery')); ?>

        <?php
        $images = get_sub_field('gallery');
        if ($images) :

        if ($count> 1) { ?>


        <div class="swiper-container floor-gallery full-height">
          <div class="swiper-wrapper">
            <?php foreach ($images as $image) : ?>
            <div class="swiper-slide bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>">
              <div class="info">
                <h3><?php echo esc_html($image['title']); ?></h3>
                <?php if ($image['caption']){?>
                  <p><?php echo esc_html($image['caption']); ?></p>
                <?php } ?>
                <?php if ($image['description']){?>
                <p class="description"><?php echo htmlspecialchars_decode(esc_html($image['description'])); ?></p>
                <?php } ?>
              </div>

              <!--<img src="<?php echo esc_url($image['sizes']['acf-floor-gallery-image']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />-->
          u    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
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

          <?php  if ( $sectionData->galleryOptions->pagination == "yes") {?>
          <div class="swiper-pagination"></div>
          <?php }?>
        </div>





        <?php } else { ?>

        <div class="gallery-single-image">
          <?php foreach ($images as $image) : ?>
          <!--<img src="<?php echo esc_url($image['sizes']['acf-floor-gallery-image']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />-->
            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
          <?php endforeach; ?>
        </div>

        <?php } ?>

        <?php endif; ?>

          <div class="small padding-top-element padding-bottom-element">
            <?php echo get_sub_field('footnote'); ?>
          </div>

        <?php endwhile; ?>

        <?php endif; ?>

        <div class="compass padding-top-section">

          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 50.5 87.2" style="enable-background:new 0 0 50.5 87.2;" xml:space="preserve">
          <style type="text/css">
            .st0{fill:none;stroke:#E7423C;}
            .st1{enable-background:new    ;}
            .st2{fill:#E7423C;}
          </style>
                      <g id="Group_7234" transform="translate(-946.5 -3455.955)">
                        <g id="Group_7233" transform="translate(947 3488.342)">
                          <path id="Path_7290" class="st0" d="M24.7,54.3c13.7,0,24.7-11.1,24.7-24.7c0-13.7-11.1-24.7-24.7-24.7c0,0,0,0,0,0
                C11.1,4.8,0,15.9,0,29.6c0,0,0,0,0,0C0,43.3,11.1,54.3,24.7,54.3C24.7,54.3,24.7,54.3,24.7,54.3z"/>
                          <path id="Path_7292" class="st0" d="M24.7,29.6V-2.9"/>
                        </g>
                        <g class="st1">
                          <path class="st2" d="M975.4,3470.2L975.4,3470.2l0-11.3h2v14.2H975l-7.5-11.6h0v11.6h-2v-14.2h2.6L975.4,3470.2z"/>
                        </g>
                      </g>
          </svg>

        </div>

        </div>



    </div>

  </div>



</section>

<?php endwhile; endif; ?>
