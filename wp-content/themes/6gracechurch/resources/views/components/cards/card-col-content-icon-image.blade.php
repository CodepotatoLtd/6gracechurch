<div class="card card-icon orientation-<?php echo $sectionData->cardOptions->orientation?> <?php echo $sectionData->cardOptions -> card_padding;?> bg-colour-<?php echo $sectionData->cardOptions->bg_colour;?>" >

  <?php if ($font_icon === "no") {?>
        <?php if (!empty($image)) :
            // vars
            $url = $image['url'];
            $title = $image['title'];
            $alt = $image['alt'];
            $caption = $image['caption'];

            // thumbnail
            if ($sectionData->cardOptions->override_image == 'full' ){
              $thumb = $url;
            } else {
              $size = 'acf-icon-image';
              $thumb = $image['sizes'][ $size ];
            }
           ?>

            <img class="icon icon-<?php echo $sectionData->cardOptions->icon_align;?>"
                 style="width:<?php echo $sectionData->cardOptions->icon_width;?>;"
                 src="<?php echo $thumb; ?>"
                 alt="<?php echo $alt; ?>" />

        <?php endif; ?>
  <?php }?>

    <?php if (get_sub_field('text')) {?>
    <div class="card-meta text-<?php echo $sectionData->cardOptions -> text_align;?> <?php echo $sectionData->cardOptions -> text_size;?> <?php echo $sectionData->cardOptions -> card_padding;?> text-<?php echo $sectionData->cardOptions -> text_colour;?> link-<?php the_sub_field('has_link');?>" >

      <div class="info">
        <?php if ($font_icon === "yes") {?>
        <p class="font-icon"><?php the_sub_field('icon');?></p>
        <?php }?>

        <?php the_sub_field('text');?>
      </div>

    </div>
    <?php }?>



</div>
