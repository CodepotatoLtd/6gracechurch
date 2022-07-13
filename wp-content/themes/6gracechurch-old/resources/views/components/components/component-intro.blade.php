<?php $how_intro = (isset($sectionData ->introGroup-> show_intro) ? $sectionData ->introGroup-> show_intro : false);?>

<?php if ($how_intro == "yes") {?>

<div class="intro
          p-b-mobile-<?php echo $sectionData -> introOptions->padding_bottom_mobile;?>
          p-b-desktop-<?php echo $sectionData -> introOptions->padding_bottom_desktop;?>
  ">

  <div class="<?php echo $sectionData-> introOptions->container_type;?>">

      <div class="row <?php echo $sectionData-> introOptions->container_position;?>">

        <div class="<?php echo $sectionData-> introOptions->container_width ;?>" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="250">

              <?php echo $sectionData->introGroup->text ?>

        </div>

      </div>

  </div>

</div>

<?php } ?>
