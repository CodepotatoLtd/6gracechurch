<?php $options = get_fields("options"); ?>

<?php echo $options["fonts"];?>

<style>

  :root {

    /* BG Colours */

      --background-color-white: <?php echo $options["bg_white"];?>  !important;
      --background-color-black: <?php echo $options["bg_black"];?>  !important;
      --background-color-light: <?php echo $options["bg_light"];?>  !important;
      --background-color-dark: <?php echo $options["bg_dark"];?>  !important;

      --background-color-primary: <?php echo $options["bg_primary"];?>  !important;
      --background-color-primary-alt: <?php echo $options["bg_primary-alt"];?>  !important;
      --background-color-secondary: <?php echo $options["bg_secondary"];?>  !important;
      --background-color-secondary-alt: <?php echo $options["bg_secondary-alt"];?>  !important;

      --theme-primary-colour: <?php echo $options['site_primary'];?> !important;
      --theme-secondary-colour: <?php echo $options['site_secondary'];?> !important;
      --theme-background-colour: <?php echo $options['site_background'];?> !important;

  }
</style>
