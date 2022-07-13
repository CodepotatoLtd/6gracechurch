<?php if ($sectionData -> ctaGroup-> cta == "yes") { ?>

  <?php $linkStyle = $sectionData -> ctaGroup-> button_type;?>

  <?php if ($sectionData -> ctaGroup->css_class) { $ctaColour = $sectionData -> ctaGroup->css_class;} else {$ctaColour = "text-" . $sectionData-> sectionOptions->text_colour;} ?>

  <div class="<?php echo $ctaColour;?> <?php echo $sectionData-> sectionOptions->text_size;?>">

    <div class="cta-wrapper padding-top-element">

      <div class="button-cta <?php echo $linkStyle;?> text-<?php echo $sectionData -> ctaGroup->position;?>">

        <?php if ($sectionData -> ctaGroup->type== "internal") { ?>

          <a href="<?php echo $sectionData -> ctaGroup->internal; ?>"><?php echo $sectionData -> ctaGroup->cta_text; ?></a>

        <?php } elseif ($sectionData -> ctaGroup->type== "external") { ?>

          <a  target="_blank" href="<?php echo $sectionData -> ctaGroup->external; ?>"><?php echo$sectionData -> ctaGroup->cta_text; ?></a>

        <?php } elseif ($sectionData -> ctaGroup->type== "mailto") { ?>

          <a href="mailto:<?php echo $sectionData -> ctaGroup->email; ?><?php echo $sectionData -> ctaGroup->parameter; ?>"><?php echo $sectionData -> ctaGroup->cta_text; ?></a>

        <?php } elseif ($sectionData -> ctaGroup->type== "anchor") { ?>

          <a class="anchor-button" href="<?php echo $sectionData -> ctaGroup->anchor; ?>"><?php echo $sectionData -> ctaGroup->cta_text; ?></a>

        <?php }?>

      </div>

    </div>

  </div>

<?php }?>
