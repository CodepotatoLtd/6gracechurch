<?php $sectionData = get_section_data($sectionFieldData); ?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-intro
            bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>
            padding-top-<?php echo $sectionData ->sectionOptions->section_padding_top;?>
            padding-bottom-<?php echo $sectionData -> sectionOptions->section_padding_bottom;?>
            <?php echo $sectionData -> sectionOptions->text_size;?>
            <?php echo $sectionData -> sectionOptions->section_class;?>" >

  @include('components.components.component-background-image-portrait-landscape')

  <div class="<?php echo $sectionData->contentOptions->container_type;?> full-height">

    <div class="row full-height align-items-center <?php echo $sectionData->contentOptions->container_position;?>">

      <div class="<?php echo $sectionData->contentOptions->container_width;?>">

        <div class="text-<?php echo $sectionData ->sectionOptions->text_colour;?> <?php echo $sectionData->sectionOptions->text_size;?>" >

          <?php echo $sectionData -> textGroup -> text; ?>

        </div>

      </div>

    </div>

  </div>

</section>
