<section class="section-logo-grid section p-t-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section bg-colour-<?php the_sub_field('background_colour');?> text-<?php the_sub_field('text_colour');?> ">
  <div class="container-fluid">
    <div class="row ">

      <div class="col-11 ">
        <div class="medium header p-b-desktop-intro">
          <?php the_sub_field('text');?>
        </div>

        <div class="row ">

          <?php
            $images = get_sub_field('logos');
            if ($images) : ?>
                <?php foreach ($images as $image) : ?>
            <div class="col-sm-4">

                <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />


            </div>
                <?php endforeach; ?>

            <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>
