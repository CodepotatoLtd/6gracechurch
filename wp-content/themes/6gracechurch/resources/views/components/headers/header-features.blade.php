<section  id="header-features" class="header-features section p-t-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section bg-colour-<?php the_sub_field('background_colour');?> text-<?php the_sub_field('text_colour');?>">

  <div class="t1 triangle">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.42 295.42">

      <path id="Path_32" data-name="Path 32" class="tri-fill" d="M295.42,0L0,295.42H295.42V0Z"/>
    </svg>
  </div>

  <div class="t2 triangle">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.42 295.42">

      <path id="Path_32" data-name="Path 32" class="tri-fill" d="M295.42,0L0,295.42H295.42V0Z"/>
    </svg>
  </div>

  <div class="t3 triangle">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.42 295.42">

      <path id="Path_32" data-name="Path 32" class="tri-fill" d="M295.42,0L0,295.42H295.42V0Z"/>
    </svg>
  </div>

  <div class="content">

  <div class="container-fluid">
    <div class="row">

      <div class="col-lg-4 medium p-t-mobile-section p-b-mobile-section">
        <h1 class="p-t-mobile-section">
          <?php the_sub_field('title');?>

          <span><?php the_sub_field('sub_title');?></span>

        </h1>


        <?php the_sub_field('text');?>
      </div>

      <div class="col-1">
      </div>

      <div class="col-lg-7 small">

        <div class="cards-wrapper">
          <div class="row justify-content-between">

          <?php $count = 0;?>
        <?php if (have_rows('features')) : ?>
            <?php while (have_rows('features')) :
                the_row(); ?>



              <div class="col-md-6 col-lg-6">



                <div class="card-features">

                  <div class="inner">

                <?php
                $image = get_sub_field('icon');
                if ($image) :
                  // Image variables.
                    $url = $image['url'];
                    $title = $image['title'];
                    $alt = $image['alt']; ?>

                <img src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($alt); ?>">

                <?php endif; ?>

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

  </div>
  </div>

</section>

