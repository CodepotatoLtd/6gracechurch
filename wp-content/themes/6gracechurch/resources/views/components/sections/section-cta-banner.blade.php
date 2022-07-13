<?php $sectionData = get_section_data($sectionFieldData); ?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>"
         class="section section-cta-banner
         bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>
           padding-top-<?php echo $sectionData ->sectionOptions->section_padding_top;?>
           padding-bottom-<?php echo $sectionData -> sectionOptions->section_padding_bottom;?>
         <?php echo $sectionData -> sectionOptions->text_size;?>
           h-<?php echo $sectionData -> sectionOptions->section_height;?>
         <?php echo $sectionData -> sectionOptions->section_class;?>" >

  @include('components.components.component-background-image-portrait-landscape')

  <div class="inner full-height">

    <div class="container full-height">

      <div class="row full-height align-items-center <?php echo $sectionData -> containerOptions->container_position;?>">

        <div class="col-12">

          <div class="row <?php echo $sectionData -> containerOptions->container_position;?>">

            <div class="<?php echo $sectionData -> containerOptions->container_width;?>">

              <div class="text-<?php echo $sectionData ->sectionOptions->text_colour;?> <?php echo $sectionData -> sectionOptions->text_size;?>" data-aos="fade-up" data-aos-duration="750" data-aos-anchor="">

                <?php echo $sectionData -> textGroup -> text; ?>

              </div>

              @include('components.components.component-section-cta')

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>

</section>
