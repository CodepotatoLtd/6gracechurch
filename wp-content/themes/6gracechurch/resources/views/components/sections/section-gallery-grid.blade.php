<?php $sectionData = get_section_data($sectionFieldData);?>
<?php if (have_rows('section')) :
while (have_rows('section')) :
the_row();?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-gallery-grid
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
         <?php echo $sectionData -> sectionOptions->section_class;?>">

  @include('components.components.component-background-image-portrait-landscape')

  <div class="text-<?php echo $sectionData->sectionOptions->text_colour;?>
  <?php echo $sectionData->sectionOptions->text_size;?> "
       data-aos="fade-up" data-aos-duration="750">

    @include('components.components.component-intro')

  </div>

  <div class="<?php echo $sectionData->galleryOptions->container_type;?>">
    <div class="row align-items-center <?php echo $sectionData->galleryOptions->container_position;?>">
      <div class="<?php echo $sectionData->galleryOptions->container_width;?> text-<?php echo $sectionData->sectionOptions->text_colour;?>">

        <?php if (have_rows('content')) : ?>
        <?php while (have_rows('content')) :
        the_row();?>

        <?php $count = count(get_sub_field('gallery')); ?>

        <?php
        $images = get_sub_field('gallery');?>

          <div class="row justify-content-between">
            <div class="col-lg-7">
              <div class="row">
                <div class="col-lg-12">
                  <div class="image-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">

                    <div class="image-wrapper">
                      <img src="<?php echo $images[0]['url']; ?>" alt="<?php echo $images[0]['alt']; ?>" />

                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="image-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" >

                    <div class="image-wrapper">
                      <img src="<?php echo $images[1]['url']; ?>" alt="<?php echo $images[1]['alt']; ?>" />

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-lg-5">
              <div class="row">
                <div class="col-lg-12">
                  <div class="image-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">

                    <div class="image-wrapper">
                      <img src="<?php echo $images[2]['url']; ?>" alt="<?php echo $images[2]['alt']; ?>" />

                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="image-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" >

                    <div class="image-wrapper">
                      <img src="<?php echo $images[3]['url']; ?>" alt="<?php echo $images[3]['alt']; ?>" />

                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="image-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" >

                    <div class="image-wrapper">
                      <img src="<?php echo $images[4]['url']; ?>" alt="<?php echo $images[4]['alt']; ?>" />

                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>



        <?php endwhile; ?>
        <?php endif; ?>

      </div>
    </div>
  </div>
</section>

<?php endwhile;
endif; ?>
