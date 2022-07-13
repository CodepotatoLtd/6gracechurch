<section class="section-quote-image section p-t-mobile-section p-t-desktop-section p-t-desktop-section p-b-desktop-section bg-colour-<?php the_sub_field('background_colour');?> text-<?php the_sub_field('text_colour');?> ">
  <div class="container-fluid">
    <div class="row ">
      <div class="col-lg-4 quote medium p-b-mobile-section">
            <?php
            $featured_posts = get_sub_field('quote');
            if( $featured_posts ): ?>

            <?php foreach( $featured_posts as $post ):

            // Setup this post for WP functions (variable must be named $post).
            setup_postdata($post); ?>
            <blockquote>
              <?php the_field('testimonial', $post->ID);?>

              <cite>
                <?php the_field('company', $post->ID);?>
                <span><?php the_field('location', $post->ID);?></span>
              </cite>
            </blockquote>
            <?php endforeach; ?>

            <?php
            // Reset the global post object so that the rest of the page works correctly.
            wp_reset_postdata(); ?>
            <?php endif; ?>
          </div>

          <!-- add image col here -->

      <div class="col-1"></div>

      <div class="col-lg-7">
        <div class="image">
          <?php
          $image = get_sub_field('image');
          if ($image) :
          // Image variables.
          $url = $image['url'];
          $title = $image['title'];
          $alt = $image['alt']; ?>

          <img src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($alt); ?>">

          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>
