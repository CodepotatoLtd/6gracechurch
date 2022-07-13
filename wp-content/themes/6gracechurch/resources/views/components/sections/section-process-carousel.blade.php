<section class="section-process-carousel section p-t-mobile-section  section p-t-desktop-section p-b-desktop-section bg-colour-<?php the_sub_field('background_colour');?> ">

  <div class="container-fluid">
    <div class="row">


      <div class="col-lg-3 medium text-<?php the_sub_field('text_colour');?> p-b-mobile-section">

        <?php the_sub_field('text');?>

      </div>

    </div>
    <div class="row">
      <div class="col-lg-12 carousel-column p-t-mobile-element p-b-mobile-intro p-t-desktop-element">

        <div class="swiper-container process-swiper">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="card-process-initial">
                <div class="instructions">Drag to scroll
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 83.8 19.6" style="enable-background:new 0 0 83.8 19.6;" xml:space="preserve">
                  <style type="text/css">
                    .st0{fill:none;stroke:#041C3A;stroke-width:1.5;stroke-miterlimit:10;}
                  </style>
                  <g>
                    <g id="Group_342">
                      <line id="Line_148" class="st0" x1="0" y1="9.8" x2="82.3" y2="9.8"/>
                      <path id="Path_195" class="st0" d="M73.5,0.5l9.3,9.3l-9.3,9.3"/>
                    </g>
                  </g>
                  </svg>
                </div>
              </div>
            </div>

            <?php $count = 1;?>

            <?php if (have_rows('steps')) :
                while (have_rows('steps')) :
                    the_row();?>

                <div class="swiper-slide">

                  <div class="slide-number">
                    0<?php echo $count;?>
                  </div>

                    <?php if ($count == 6) {
                        $class = "apply-now";
                    } else {
                        $class = "";
                    }?>

                  <div class="card-process <?php echo $class;?> small bg-colour-<?php the_sub_field('background_colour');?> text-<?php the_sub_field('text_colour');?>">

                    <?php
                    $image = get_sub_field('icon');
                    if ($image) :
                    // Image variables.
                        $url = $image['url'];
                        $title = $image['title'];
                        $alt = $image['alt']; ?>

                    <img src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($alt); ?>">

                    <?php endif; ?>

                      <div class="info">

                        <?php the_sub_field('text');?>

                      </div>
                  </div>
                </div>

                    <?php $count++;?>

                <?php endwhile;
            endif; ?>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
