<section class="section-highlights section p-t-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section bg-colour-<?php the_sub_field('background_colour');?> text-<?php the_sub_field('text_colour');?>">

  <div class="container-fluid">
    <div class="row">

          <div class="col-lg-3 medium p-b-mobile-section">

            <?php the_sub_field('text');?>

          </div>

          <div class="col-lg-9 small">
            <div class="row">
              <div class="triangles">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 758.3 904.4" style="enable-background:new 0 0 758.3 904.4;" xml:space="preserve">
          <style type="text/css">
            .tri0{opacity:0.41;fill:#D7F9ED;}
            .tri1{opacity:0.41;fill:#89EECA;}
            .tri2{opacity:0.41;fill:#B0F3DC;}
          </style>
                  <g id="t1">
                    <path id="Path_53" class="tri0" d="M0,452.2h150.7V301.4L0,452.2z"/>
                  </g>
                  <g id="t2">
                    <path id="Path_54" class="tri1" d="M0,602.9h150.7V452.2L0,602.9z"/>
                  </g>
                  <g id="t3">
                    <path id="Path_50" class="tri2" d="M0,753.6h150.7V602.9L0,753.6z"/>
                  </g>
                  <g id="t4">
                    <path id="Path_51" class="tri0" d="M0,904.4h150.7V753.6L0,904.4z"/>
                  </g>
                  <g id="t5">
                    <path id="Path_46" class="tri1" d="M150.7,452.2h150.7V301.4L150.7,452.2z"/>
                  </g>
                  <g id="t6">
                    <path id="Path_47" class="tri0" d="M150.7,602.9h150.7V452.2L150.7,602.9z"/>
                  </g>
                  <g id="t7">
                    <path id="Path_48" class="tri1" d="M150.7,753.6h150.7V602.9L150.7,753.6z"/>
                  </g>
                  <g id="t8">
                    <path id="Path_49" class="tri1" d="M150.7,904.4h150.7V753.6L150.7,904.4z"/>
                  </g>
                  <g id="t9">
                    <path id="Path_52" class="tri1" d="M301.5,753.6h150.7V602.9L301.5,753.6z"/>
                  </g>
                  <g id="t10">
                    <path id="Path_61" class="tri0" d="M456.9,150.7h150.7V0L456.9,150.7z"/>
                  </g>
                  <g id="t11">
                    <path id="Path_62" class="tri1" d="M456.9,301.4h150.7V150.7L456.9,301.4z"/>
                  </g>
                  <g id="t12">
                    <path id="Path_59" class="tri2" d="M456.9,452.2h150.7V301.5L456.9,452.2z"/>
                  </g>
                  <g id="t13">
                    <path id="Path_60" class="tri0" d="M456.9,602.9h150.7V452.2L456.9,602.9z"/>
                  </g>
                  <g id="t14">
                    <path id="Path_55" class="tri1" d="M607.6,150.7h150.7V0L607.6,150.7z"/>
                  </g>
                  <g id="t15">
                    <path id="Path_56" class="tri0" d="M607.6,301.4h150.7V150.7L607.6,301.4z"/>
                  </g>
                  <g id="t16">
                    <path id="Path_57" class="tri1" d="M607.6,452.2h150.7V301.5L607.6,452.2z"/>
                  </g>
                  <g id="t17">
                    <path id="Path_58" class="tri1" d="M607.6,602.9h150.7V452.2L607.6,602.9z"/>
                  </g>
          </svg>
              </div>

              <?php if (have_rows('highlights')) : ?>
                    <?php while (have_rows('highlights')) :
                        the_row(); ?>

                  <div class="col-lg-4 full-height ">

                    <div class="card-highlight">

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

                <?php endwhile; ?>

              <?php endif; ?>

            </div>

          </div>

        </div>



  </div>

</section>
