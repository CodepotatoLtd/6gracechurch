<?php $sectionData = get_section_data($sectionFieldData); ?>

<?php if (have_rows('section')) : while (have_rows('section')) : the_row();?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-code
            bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>
             p-t-mobile-<?php echo $sectionData -> sectionOptions->section_padding_top_mobile;?>
             p-b-mobile-<?php echo $sectionData -> sectionOptions->section_padding_bottom_mobile;?>

             p-t-desktop-<?php echo $sectionData -> sectionOptions->section_padding_top_desktop;?>
             p-b-desktop-<?php echo $sectionData -> sectionOptions->section_padding_bottom_desktop;?>
            <?php echo $sectionData -> sectionOptions->text_size;?>
            <?php echo $sectionData -> sectionOptions->section_class;?>" >

  @include('components.components.component-background-image-portrait-landscape')

  <div class="text-<?php echo $sectionData->sectionOptions->text_colour;?> <?php echo $sectionData->sectionOptions->text_size;?> " >

    @include('components.components.component-intro')

  </div>

  <div class="<?php echo $sectionData->contentOptions->container_type;?> full-height">

    <div class="row full-height align-items-center <?php echo $sectionData->contentOptions->container_position;?>">

      <div class="<?php echo $sectionData->contentOptions->container_width;?>">

        <div class="code text-<?php echo $sectionData ->sectionOptions->text_colour;?> <?php echo $sectionData->sectionOptions->text_size;?>" >

          <?php the_sub_field('code')?>

        </div>

      </div>

    </div>

  </div>

</section>

<?php endwhile; endif; ?>
