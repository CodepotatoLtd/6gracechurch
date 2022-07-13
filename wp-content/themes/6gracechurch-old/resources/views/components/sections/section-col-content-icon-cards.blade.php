<?php $sectionData = get_section_data($sectionFieldData); ?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-col-content-icon-cards
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


         <?php echo $sectionData -> sectionOptions->section_class;?>
          " >

  @include('components.components.component-background-image-portrait-landscape')

  <div class="text-<?php echo $sectionData->sectionOptions->text_colour;?> <?php echo $sectionData->sectionOptions->text_size;?> " >

    @include('components.components.component-intro')

  </div>

  <div class="<?php echo $sectionData->cardOptions->container_type;?> full-height ">

    <div class="row full-height align-items-center <?php echo $sectionData->cardOptions->container_position;?>">

      <div class="<?php echo $sectionData->cardOptions->container_width;?>">

        <div class="card-wrapper" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="0"  data-aos-anchor="<?php echo $sectionData->sectionOptions->animation_trigger;?>">

          <div class="row <?php echo $sectionData->cardOptions->container_align;?>">

          <?php if (have_rows('section')) :
                while (have_rows('section')) :
                    the_row();?>

                    <?php $count = 0;
                          // check if the repeater field has rows of data
                    if (have_rows('columns')) :
                      // loop through the rows of data
                        while (have_rows('columns')) :
                            the_row(); ?>

                            <?php $delay = ($count * 150 ) ;?>

                            <?php $link = get_sub_field('has_link');?>
                            <?php $font_icon = get_sub_field('font_icon');?>
                            <?php $image = get_sub_field('image');?>
                            <?php $linkStyle = get_sub_field("link_style");?>
                            <?php //$linkTitle = get_sub_field("link_title");?>

                      <div class="<?php echo $sectionData->cardOptions->column_class;?> padding-bottom-element" data-aos="fade-up"  data-aos-duration="750" data-aos-delay="<?php echo $delay;?>"  data-aos-anchor="<?php echo $sectionData->sectionOptions->animation_trigger;?>">

                            <?php if ($link === "yes") {?>
                            <!-- start of link card -->

                            @include('components.cards.card-col-content-icon-link')

                            <!-- end of of link card -->

                            <?php } else { ?>
                            <!-- start of image card -->

                            @include('components.cards.card-col-content-icon-image')

                            <!-- end of image card -->

                            <?php } ?>

                      </div>

                            <?php $count++;?>

                        <?php endwhile;
                    endif; ?>

                <?php endwhile;
          endif; ?>

        </div>

        </div>

      </div>

    </div>

  </div>

  <!-- end of .container-->
</section>
