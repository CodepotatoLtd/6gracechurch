<?php $has_logo = (isset($sectionData ->logoGroup-> has_logo) ? $sectionData ->logoGroup-> has_logo : false);?>

<?php if ($has_logo  == "yes") {?>
<div class="row <?php echo $sectionData ->logoGroup->wrapper_position;?>">

  <div class="<?php echo $sectionData ->logoGroup-> wrapper_class;?> ">

  <?php $image = $sectionData ->logoGroup -> image?>

  <?php if (!empty($image)) :
    // vars
    $url = $image['url'];
    $title = $image['title'];
    $alt = $image['alt'];
    $caption = $image['caption'];?>

    <img id="header-logo" class="img-fluid padding-bottom-element" src="<?php echo $url; ?>" alt="<?php echo $alt; ?>" />

  <?php endif; ?>

  </div>
</div>

<?php } ?>

