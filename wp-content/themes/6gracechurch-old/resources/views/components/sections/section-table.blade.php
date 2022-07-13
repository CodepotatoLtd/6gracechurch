<?php $sectionData = get_section_data($sectionFieldData); ?>

<?php if (have_rows('section')) : while (have_rows('section')) : the_row();?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-table
              h-<?php echo $sectionData-> sectionOptions->section_height;?>-mobile
           h-<?php echo $sectionData-> sectionOptions->section_height_desktop;?>-desktop

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
            <?php echo $sectionData -> sectionOptions->section_class;?>" >

  @include('components.components.component-background-image-portrait-landscape')

  <div class="text-<?php echo $sectionData->sectionOptions->text_colour;?> <?php echo $sectionData->sectionOptions->text_size;?> " >

    @include('components.components.component-intro')

  </div>

  <div class="<?php echo $sectionData->contentOptions->container_type;?> full-height">

    <div class="row full-height align-items-center <?php echo $sectionData->contentOptions->container_position;?>">

      <div class="<?php echo $sectionData->contentOptions->container_width;?>">

        <div class="code text-<?php echo $sectionData ->sectionOptions->text_colour;?> small" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="250">

          <?php the_sub_field('table_field')?>

        </div>

      </div>

    </div>

  </div>

</section>

<?php endwhile; endif; ?>
