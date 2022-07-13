<?php $sectionData = get_section_data($sectionFieldData); ?>

<?php if (have_rows('section')) : while (have_rows('section')) : the_row();?>

<section class="section section-map overflow-hidden text-center bg-colour-<?php echo $sectionData->sectionOptions->bg_colour;?> text-<?php echo $sectionData->sectionOptions->text_colour;?> <?php echo $sectionData->sectionOptions->text_size;?>  padding-top-<?php echo $sectionData->sectionOptions->section_padding_top;?> padding-bottom-<?php echo $sectionData->sectionOptions->section_padding_bottom;?>">



  <div class="container-fluid">

    <div class="row align-items-center justify-content-center">

      <div class="col-lg-7">

        <div id="map" class="contact-map">



        </div>

      </div>

      <div class="col-lg-5
          padding-top-xs-element
          padding-top-lg-none
          padding-bottom-xs-element
          padding-bottom-lg-none
">

        <?php if( have_rows('map_info') ):?>

        <?php while ( have_rows('map_info') ) : the_row(); ?>

        <div class="map-info"
             data-zoom="<?php the_sub_field("zoom");?>"
             data-lat="<?php the_sub_field("lat");?>"
             data-lon="<?php the_sub_field("lon");?>"
             data-title="<?php the_sub_field("title");?>"
             data-description="<?php the_sub_field("description");?>"
             data-marker="<?php the_sub_field("marker");?>"


        ></div>

        <?php endwhile;

        endif;

        ?>


        <?php if( have_rows('amenity_types') ):?>

        <?php while ( have_rows('amenity_types') ) : the_row(); ?>

        <?php $type = get_sub_field("type");?>
        <?php $colour = get_sub_field("colour");?>

        <h3 class="marker-type" style="color:<?php echo $colour; ?>" data-type="<?php echo sanitize_title($type);?>"><?php echo $type;?></h3>

        <?php $count = 1; ?>

        <?php if( have_rows('locations') ):?>

        <?php while ( have_rows('locations') ) : the_row(); ?>

        <div class="map-marker"
             data-lat="<?php the_sub_field("lat");?>"
             data-lon="<?php the_sub_field("lon");?>"
             data-title="<?php the_sub_field("title");?>"
             data-description="<?php the_sub_field("description");?>"
             data-type="<?php echo sanitize_title($type);?>"
             data-colour="<?php echo $colour; ?>"
             data-label="<?php echo $count; ?>"


        ><?php the_sub_field("title");?></div>

        <?php $count ++; ?>

        <?php endwhile;

        endif;

        ?>


        <?php endwhile;

        endif;

        ?>


        <div class="markers">

        </div>

      </div>

    </div>

  </div>


</section>

<?php endwhile; endif; ?>
