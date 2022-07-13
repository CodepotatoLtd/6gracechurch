<?php $sectionData = get_section_data($sectionFieldData); ?>

<?php $textGroup = $sectionData -> text;?>
<?php $imageGroup = $sectionData -> image;?>

<?php if ($imageGroup->image_type == "portrait") {
  $imageClass = "col-lg-5";
  $image = $imageGroup->image_portrait;

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

     if ($textGroup->text_position == "left") {
      $textOrder = "order-2 order-lg-1 offset-lg-1";
      $imageOrder = "order-1 order-lg-2 offset-lg-1";
      $textAnimation = 'data-aos="fade-left"  data-aos-duration="750" data-aos-delay="200"';
      $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
    } else {
      $textOrder = "order-2 order-md-2 offset-lg-1";
      $imageOrder = "order-1 order-md-1";
      $textAnimation = 'data-aos="fade-right"  data-aos-duration="750" data-aos-delay="200"';
      $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
    }
} else {
  $imageClass = "col-lg-6";
  $image = $imageGroup->image_landscape;

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

  if ($textGroup->text_position == "left") {
    $textOrder = "order-2 order-lg-1";
    $imageOrder = "order-1 order-lg-2 offset-lg-1";
    $textAnimation = 'data-aos="fade-left"  data-aos-duration="750" data-aos-delay="200"';
    $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
  } else {
    $textOrder = "order-2 order-md-2 offset-lg-1";
    $imageOrder = "order-1 order-md-1";
    $textAnimation = 'data-aos="fade-right"  data-aos-duration="750" data-aos-delay="200"';
    $imageAnimation = 'data-aos="fade"  data-aos-duration="750" data-aos-delay="100"';
  }
}?>


<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section overflow-hidden
         section-text-image
         section-text-image-<?php echo $textGroup->text_position;?>
           bg-colour-<?php echo $sectionData->sectionOptions->bg_colour;?>
           padding-top-<?php echo $sectionData->sectionOptions->section_padding_top;?>
           padding-bottom-<?php echo $sectionData->sectionOptions->section_padding_bottom;?>
         <?php echo $sectionData->sectionOptions->text_size;?>
           h-<?php echo $sectionData-> sectionOptions->section_height;?>-mobile
           h-<?php echo $sectionData-> sectionOptions->section_height_desktop;?>-desktop
           text-<?php echo $sectionData->sectionOptions->text_colour;?>" >

  @include('components.components.component-background-image-portrait-landscape')

  <div class="inner">

    <div class="<?php echo $sectionData->contentOptions->container_type;?> full-height">

      <div class="row full-height align-items-center <?php echo $sectionData->contentOptions->container_position;?>">

        <div class="<?php echo $sectionData->contentOptions->container_width;?>">

          <div class="text-<?php echo $sectionData ->sectionOptions->text_colour;?> <?php echo $sectionData->sectionOptions->text_size;?>" >

            <?php echo $sectionData -> textGroup -> text; ?>

          </div>

        </div>

      </div>

    </div>

  </div>
  <!-- end of .container-->
</section>
