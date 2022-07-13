<section  id="header-contact" class="header-contact section p-t-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section bg-colour-<?php the_sub_field('background_colour');?> text-<?php the_sub_field('text_colour');?>">

  <div class="container-fluid">
    <div class="row">

      <div class="col-lg-4 medium p-t-mobile-section p-b-mobile-section">
        <h1 class="p-t-mobile-section">
          <?php the_sub_field('title');?>

          <span><?php the_sub_field('sub_title');?></span>

        </h1>

        <?php the_sub_field('text');?>

        <?php

        // Check rows exists.
        if( have_rows('contacts') ):

            // Loop through rows.
            while( have_rows('contacts') ) : the_row(); ?>

               <div class="contact">
               <?php  the_sub_field('info'); ?>
               </div>

                <?php
            // End loop.
            endwhile;

        // No value.
        else :
            // Do something...
        endif; ?>
      </div>


      <div class="col-2">

      </div>

      <div class="col-lg-5 quote medium p-t-mobile-section">
        <div class="triangles">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 607.6 904.4" style="enable-background:new 0 0 607.6 904.4;" xml:space="preserve">
              <style type="text/css">
                .tri0{opacity:0.41;fill:#D7F9ED;}
                .tri1{opacity:0.41;fill:#89EECA;}
                .tri2{opacity:0.41;fill:#B0F3DC;}
                .tri4{fill:#D7F9ED;}
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
              <path id="Path_60" class="tri4" d="M456.9,602.9h150.7V452.2L456.9,602.9z"/>
            </g>

            </svg>
        </div>
        <?php
        $featured_posts = get_sub_field('quote');
        if ($featured_posts) : ?>
        <?php foreach ($featured_posts as $post) :
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
    </div>

  </div>

</section>

