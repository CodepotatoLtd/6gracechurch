<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script   src="https://code.jquery.com/jquery-3.6.0.min.js"   integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="   crossorigin="anonymous"></script>
    <?php $options = get_fields("options"); ?>
    <?php echo $options["fonts"];?>
    <?php wp_head(); ?>

    <?php //include 'index-theme-fonts.php'; ?>
    <?php //include 'index-theme-css-vars.php'; ?>

    <?php include 'index-theme-fonts.php'; ?>

    <?php include 'index-theme-text-size-large.php'; ?>
    <?php include 'index-theme-text-size-medium.php'; ?>
    <?php include 'index-theme-text-size-small.php'; ?>
    <?php include 'index-theme-vertical-spacing.php'; ?>
    <?php include 'index-theme-text-colours.php'; ?>
    <?php include 'index-theme-carousel-settings.php'; ?>
    <?php include 'index-theme-colours.php'; ?>
    <?php include 'index-theme-buttons.php'; ?>
    <?php include 'index-theme-nav.php'; ?>

    <?php $options = get_fields("options"); ?>

    <?php if ($options["map_api"]){ ?>

      <!-- has map stuff  -->

      <script>

        var data = {};
        data.apiLoaded= false;
        data.map_styles = <?php echo $options["map_styles"];?>;
        data.map_marker = "<?php echo $options["map_marker"];?>";

        function mapAPILoaded(){
          data.apiLoaded = true;

          console.log("****************** api loaded");
        }

      </script>

      <script
        src="https://maps.googleapis.com/maps/api/js?key=<?php echo $options["map_api"];?>&callback=mapAPILoaded">
      </script>

    <?php } else { ?>

      <!-- no map stuff  -->
    <?php }?>

  </head>

  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <?php do_action('get_header'); ?>



      <?php echo view(app('sage.view'), app('sage.data'))->render(); ?>


    <?php do_action('get_footer'); ?>
    <?php wp_footer(); ?>
  </body>
</html>
