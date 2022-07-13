<?php $sectionData = get_section_data($sectionFieldData); ?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-col-content-icon-cards
         bg-colour-<?php echo $sectionData->sectionOptions->bg_colour;?>
           padding-top-<?php echo $sectionData->sectionOptions->section_padding_top;?>
           padding-bottom-<?php echo $sectionData->sectionOptions->section_padding_bottom;?>
           <?php echo $sectionData -> sectionOptions->section_class;?>
         h-<?php echo $sectionData -> sectionOptions->section_height;?>"
>

  @include('components.components.component-background-image-portrait-landscape')

  <div class="text-<?php echo $sectionData->sectionOptions->text_colour;?> <?php echo $sectionData->sectionOptions->text_size;?> " >

    @include('components.components.component-intro')

  </div>

  <div class="<?php echo $sectionData->cardOptions->container_type;?> full-height ">

    <div class="row full-height align-items-center <?php echo $sectionData->cardOptions->container_position;?>">

      <div class="<?php echo $sectionData->cardOptions->container_width;?>">

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

                            <?php $image = get_sub_field('image');?>
                            <?php $linkStyle = get_sub_field("link_style");?>
                            <?php //$linkTitle = get_sub_field("link_title");?>

                      <div class="<?php echo $sectionData->cardOptions->column_class;?> padding-bottom-element">

                            <?php $id = "c" . $count +1;?>

                            @include('components.cards.card-col-content-download-link')

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

  <!-- end of .container-->
</section>
