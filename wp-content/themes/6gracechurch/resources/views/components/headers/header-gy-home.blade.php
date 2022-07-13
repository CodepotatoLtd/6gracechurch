<?php
$section = get_sub_field('section');

if ($section) : ?>
<header class="header-gy-home bg-colour-secondary text-black">

  <div id="bg" class="animated-background bg-colour-primary">

  </div>

  <?php

    $count = 0 ;
    //$images = get_sub_field('animation');
    $images = $section['animation'];
    $size = 'full'; // (thumbnail, medium, large, full or custom size)
    if ($images) : ?>
  <div id="goat" class="goat-image">
    <div class="animated-image">
        <?php foreach ($images as $image) : ?>
            <?php if ($count === 0) {?>
              <img id="sprite"
                   src="<?php echo esc_url($image['url']); ?>"
                   alt="<?php echo esc_attr($image['alt']); ?>"
                   height="280" width="400" />
            <?php } else {?>
              <img src="<?php echo esc_url($image['url']); ?>"
                   alt="<?php echo esc_attr($image['alt']); ?>"
                   height="280" width="400" />
            <?php } ?>
            <?php  $count++ ?>
        <?php endforeach; ?>
    </div>
  </div>
    <?php endif; ?>

  <div class="title-wrapper">

    <div class="container-fluid full-height">
      <div class="row justify-content-center full-height align-items-center">
        <div class="col-8 col-md-4">
          <div class="image-wrapper">

            <?php
            $image = $section['logo'];


            if ($image) {
            // Image variables.
            $url = $image['url'];
            $title = $image['title'];
            $alt = $image['alt'];
            $caption = $image['caption'];

            // Thumbnail size attributes.
            $size = 'acf-large-image';
            $thumb = $image['sizes'][ $size ];
            $width = $image['sizes'][ $size . '-width' ];
            $height = $image['sizes'][ $size . '-height' ];

            // Begin caption wrap.?>

            <img class="img-fluid" src="<?php echo esc_url($thumb); ?>" alt="<?php echo esc_attr($alt); ?>" />

            <?php } ?>


          </div>
        </div>
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
</header>

<?php endif; ?>
