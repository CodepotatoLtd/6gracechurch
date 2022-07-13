<section  id="header-main" class="header-main  bg-colour-<?php echo get_sub_field('background_colour')?>">

  @include('components.components.component-desktop-anim')

  @include('components.components.component-mobile-anim')

  <div class="container full-height">
    <div class="row justify-content-center align-items-center full-height">
      <div class="col-8 col-lg-5">
        <?php
        $image = get_sub_field('logo');
        if( $image ):

        // Image variables.
        $url = $image['url'];
        $title = $image['title'];
        $alt = $image['alt'];
        $caption = $image['caption'];

        // Thumbnail size attributes.
        $size = 'thumbnail';
        $thumb = $image['sizes'][ $size ];
        $width = $image['sizes'][ $size . '-width' ];
        $height = $image['sizes'][ $size . '-height' ]; ?>

            <img src="<?php echo esc_url($thumb); ?>" alt="<?php echo esc_attr($alt); ?>" />

        <?php endif; ?>
      </div>
    </div>
  </div>

  <a class="down-arrow" href="#main">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 90 50" style="enable-background:new 0 0 90 50;" xml:space="preserve">

              <g id="Group_7236" transform="translate(122.478 86.432) rotate(-90)">
                <g>
                  <g id="Group_56" transform="translate(0 -14.478)">
                    <g id="Group_55" transform="translate(0.878 0.878)">
                      <path id="Path_105" class="down-nav" d="M82.1-106.2L39.7-63.9l42.3,42.3"/>
                    </g>
                  </g>
                </g>
              </g>
        </svg>

  </a>

</section>
