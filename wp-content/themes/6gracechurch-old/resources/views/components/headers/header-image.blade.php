<?php $sectionData = get_section_data($sectionFieldData);?>

<section  id="<?php echo $sectionData->sectionOptions->section_id;?>" class="header-image section overflow-hidden
bg-colour-<?php echo $sectionData -> sectionOptions->bg_colour;?>
  padding-top-<?php echo $sectionData ->sectionOptions->section_padding_top;?>
  text-<?php echo $sectionData->sectionOptions->text_colour;?>">


<?php
  $section = get_sub_field('section');

  if ($section) : ?>

<?php
    $image = $section['image'];


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

        <img src="<?php echo esc_url($thumb); ?>" alt="<?php echo esc_attr($alt); ?>" />

    <?php } ?>

  <?php endif; ?>

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
