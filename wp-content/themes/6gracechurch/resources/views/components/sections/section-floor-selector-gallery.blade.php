<?php $sectionData = get_section_data($sectionFieldData); ?>

<?php $textGroup = $sectionData -> text;?>

<?php if (have_rows('section')) : while (have_rows('section')) : the_row();?>

<section id="<?php echo $sectionData->sectionOptions->section_id;?>" class="section section-floor-selector-gallery bg-colour-secondary  <?php echo $sectionData->sectionOptions->text_size;?> text-<?php echo $sectionData->sectionOptions->text_colour;?>">

  <div class="container-fluid">

    <div class="row align-items-center">

      <div class="col-lg-6">

        <div class="selector-wrapper p-mobile-intro p-desktop-intro">

          <div class="background bg-colour-<?php echo $sectionData->sectionOptions->bg_colour;?>"></div>

          <div class="inner">

          <?php the_sub_field('title')?>

          <?php the_sub_field('svg')?>

          </div>

        </div>

      </div>

      <div class="col-lg-6">

        <div class="floor-wrapper p-t-mobile-element p-b-mobile-element">

          <div class="background bg-colour-secondary"></div>

          <div class="inner">

          <?php $count = 1;?>

          <?php
          $images = get_sub_field('floors');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if( $images ): ?>

            <div class="swiper-container floor-selector-gallery-swiper">
              <div class="swiper-wrapper">

            <?php foreach( $images as $image ): ?>

                <div class="swiper-slide bg-colour-secondary">

                  <div class="row">

                    <div class="col-6">
                      <div class="caption
                     text-<?php echo $sectionData->sectionOptions->text_colour;?> p-l-mobile-element p-l-desktop-element">
                        <p><?php echo esc_html($image['title']); ?><br>
                          <?php echo esc_html($image['caption']); ?><br>
                          <?php echo esc_html($image['description']); ?>
                        </p>
                      </div>
                    </div>

                    <div class="col-6 text-right">
                      <div class="compass-wrapper p-r-mobile-intro p-r-desktop-intro">
                      <?php the_sub_field('compass')?>
                      </div>
                    </div>

                  </div>



              <img src="<?php echo esc_url($image['url']); ?>" alt="Thumbnail of <?php echo esc_url($image['alt']); ?>" />

                </div>
          <?php endforeach; ?>

              </div>

            </div>


          <?php endif; ?>

            <div class="row">

              <div class="col-6 ">
                <div class="p-l-mobile-element p-l-desktop-element">
                <?php the_sub_field('key')?>
                </div>
              </div>

              <div class="col-6">
                <div class="p-r-mobile-element p-r-desktop-element">
                <?php the_sub_field('footnote')?>
                </div>
              </div>

            </div>


          </div>
        </div>

      </div>



    </div>

  </div>

</section>
<?php endwhile; endif; ?>
