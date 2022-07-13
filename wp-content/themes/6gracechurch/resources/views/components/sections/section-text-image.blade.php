<?php $sectionData = get_section_data($sectionFieldData); ?>


<?php if (have_rows('section')) :
  while (have_rows('section')) :
    the_row();?>
            <?php $textGroup = get_sub_field("text");?>
            <?php $imageGroup = get_sub_field("image");?>

        <?php endwhile;
  endif; ?>

<?php if ($imageGroup['image_type'] == "portrait") {

    $image = $imageGroup['image_portrait'];

    if ($image) :
      // Image variables.
        $url = $image['url'];
        $title = $image['title'];
        $alt = $image['alt'];
        $caption = $image['caption'];

      // Thumbnail size attributes.
        $size = 'acf-text-image-portrait';
        $thumb = $image['sizes'][ $size ];
        $width = $image['sizes'][ $size . '-width' ];
        $height = $image['sizes'][ $size . '-height' ];
    endif;

    if ($textGroup['vertical_position'] === "top") {
      $vertical = "";
    } else {
      $vertical = "align-items-center";
    }

    if ($textGroup['text_position'] == "left") {
        $textOrder = "col-lg-5 order-2 order-lg-1 offset-lg-1";
        $textJustify = "justify-content-center";
        $imageOrder = "col-lg-5 order-1 order-lg-2";
        $textAnimation = 'data-aos="fade-left"  data-aos-duration="750" data-aos-delay="200"';
        $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
    } else {
        $textOrder = "col-lg-5 order-2 order-md-2";
        $textJustify = "justify-content-center";
        $imageOrder = "col-lg-5 order-1 order-md-1 offset-lg-1";
        $textAnimation = 'data-aos="fade-right"  data-aos-duration="750" data-aos-delay="200"';
        $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
    }
} else {
    $image = $imageGroup['image_landscape'];

    if ($image) :
      // Image variables.
        $url = $image['url'];
        $title = $image['title'];
        $alt = $image['alt'];
        $caption = $image['caption'];

      // Thumbnail size attributes.
        $size = 'acf-text-image-landscape';
        $thumb = $image['sizes'][ $size ];
        $width = $image['sizes'][ $size . '-width' ];
        $height = $image['sizes'][ $size . '-height' ];
    endif;

    if ($textGroup['text_position'] == "left") {
        $textOrder = "offset-lg-1 col-lg-5 order-2 order-lg-1";
        $textJustify = "justify-content-center justify-content-lg-start";
        $imageOrder = "col-lg-5 order-1 order-lg-2";
        $textAnimation = 'data-aos="fade-left"  data-aos-duration="750" data-aos-delay="200"';
        $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
    } else {
        $textOrder = "col-lg-5 order-2 order-md-2";
        $textJustify = "justify-content-center justify-content-lg-end";
        $imageOrder = "offset-lg-1 col-lg-5 order-1 order-md-1";
        $textAnimation = 'data-aos="fade-right"  data-aos-duration="750" data-aos-delay="200"';
        $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
    }
}?>


<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-text-image
            h-<?php echo $sectionData-> sectionOptions->section_height;?>
            image-<?php echo $imageGroup['image_type'];?>
            bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>

            p-t-mobile-<?php echo $sectionData -> sectionOptions->section_padding_top_mobile;?>
            p-r-mobile-<?php echo $sectionData -> sectionOptions->section_padding_right_mobile;?>
            p-b-mobile-<?php echo $sectionData -> sectionOptions->section_padding_bottom_mobile;?>
            p-l-mobile-<?php echo $sectionData -> sectionOptions->section_padding_left_mobile;?>

            p-t-desktop-<?php echo $sectionData -> sectionOptions->section_padding_top_desktop;?>
            p-r-desktop-<?php echo $sectionData -> sectionOptions->section_padding_right_desktop;?>
            p-b-desktop-<?php echo $sectionData -> sectionOptions->section_padding_bottom_desktop;?>
            p-l-desktop-<?php echo $sectionData -> sectionOptions->section_padding_left_desktop;?>

         <?php echo $sectionData -> sectionOptions->text_size;?>
         <?php echo $sectionData -> sectionOptions->section_class;?>
           text-<?php echo $sectionData ->sectionOptions->text_colour;?>
           " >

  @include('components.components.component-background-image-portrait-landscape')

  <div class="container-fluid">
    <div class="row">
      <div class="<?php echo $imageOrder;?>">
        <div class="animated-image-wrapper"  <?php echo $imageAnimation;?> >

          <?php
            if ($image) :
            // Begin caption wrap.
                if ($caption) : ?>
          <div class="wp-caption">
                <?php endif; ?>

            <img class="img-fluid" src="<?php echo esc_url($thumb); ?>" alt="<?php echo esc_attr($alt); ?>" />

                <?php
              // End caption wrap.
                if ($caption) : ?>
            <p class="wp-caption-text"><?php echo esc_html($caption); ?></p>
          </div>
                <?php endif; ?>
            <?php endif; ?>

        </div>

      </div>
      <div class="<?php echo $textOrder;?>">
        <div class="row <?php echo $vertical;?> <?php echo $textJustify;?> h-100">
          <div class="col-11 col-lg-9" <?php echo $textAnimation;?> >
            <div class="animated-text-wrapper">
              <?php echo $textGroup['text']; ?>
            </div>

            <div class="text-<?php echo $sectionData->text_colour;?> <?php echo $sectionData->text_size;?>">

              @include('components.components.component-section-cta')

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end of .container-->
</section>
