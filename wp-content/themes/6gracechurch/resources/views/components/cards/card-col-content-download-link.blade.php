<div class="card-download" data-aos="fade-up" data-aos-duration="1000">
<a href="<?php the_sub_field('link');?>" title="<?php the_sub_field('link_title');?>" class="card card-icon card-link <?php echo $sectionData->cardOptions -> card_padding;?> bg-colour-<?php echo $sectionData->cardOptions->bg_colour;?>"  >
    <?php the_sub_field('svg');?>
    <?php the_sub_field('link_text');?>
</a>
</div>

