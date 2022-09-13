<style>

  :root {

    /* fonts */

      --text-size-small-h1-xs: <?php echo $options["small_h1"]['text']["xs"];?>  !important;
      --text-size-small-h1-sm: <?php echo $options["small_h1"]['text']["sm"];?>  !important;
      --text-size-small-h1-md: <?php echo $options["small_h1"]['text']["md"];?>  !important;
      --text-size-small-h1-lg: <?php echo $options["small_h1"]['text']["lg"];?>  !important;
      --text-size-small-h1-xl: <?php echo $options["small_h1"]['text']["xl"];?>  !important;
      --text-size-small-h1-xxl: <?php echo $options["small_h1"]['text']["xxl"];?>  !important;
      --text-size-small-h1-xs-p: <?php echo $options["small_h1"]['text']["xs_p"];?>  !important;
      --text-size-small-h1-sm-p: <?php echo $options["small_h1"]['text']["sm_p"];?>  !important;
      --text-size-small-h1-md-p: <?php echo $options["small_h1"]['text']["md_p"];?>  !important;
      --text-size-small-h1-lg-p: <?php echo $options["small_h1"]['text']["lg_p"];?>  !important;
      --text-size-small-h1-xl-p: <?php echo $options["small_h1"]['text']["xl_p"];?>  !important;
      --text-size-small-h1-xxl-p: <?php echo $options["small_h1"]['text']["xxl_p"];?>  !important;
      --text-size-small-h1-lh: <?php echo $options["small_h1"]['text']["line_height"];?>  !important;
      --text-size-small-h1-ls: <?php echo $options["small_h1"]['text']["letter_spacing"];?>  !important;
      --text-size-small-h1-w: <?php echo $options["small_h1"]['text']["weight"];?>  !important;
      --text-size-small-h1-t: <?php echo $options["small_h1"]['text']["transform"];?>  !important;

      --text-size-small-h2-xs: <?php echo $options["small_h2"]['text']["xs"];?>  !important;
      --text-size-small-h2-sm: <?php echo $options["small_h2"]['text']["sm"];?>  !important;
      --text-size-small-h2-md: <?php echo $options["small_h2"]['text']["md"];?>  !important;
      --text-size-small-h2-lg: <?php echo $options["small_h2"]['text']["lg"];?>  !important;
      --text-size-small-h2-xl: <?php echo $options["small_h2"]['text']["xl"];?>  !important;
      --text-size-small-h2-xxl: <?php echo $options["small_h2"]['text']["xxl"];?>  !important;
      --text-size-small-h2-xs-p: <?php echo $options["small_h2"]['text']["xs_p"];?>  !important;
      --text-size-small-h2-sm-p: <?php echo $options["small_h2"]['text']["sm_p"];?>  !important;
      --text-size-small-h2-md-p: <?php echo $options["small_h2"]['text']["md_p"];?>  !important;
      --text-size-small-h2-lg-p: <?php echo $options["small_h2"]['text']["lg_p"];?>  !important;
      --text-size-small-h2-xl-p: <?php echo $options["small_h2"]['text']["xl_p"];?>  !important;
      --text-size-small-h2-xxl-p: <?php echo $options["small_h2"]['text']["xxl_p"];?>  !important;
      --text-size-small-h2-lh: <?php echo $options["small_h2"]['text']["line_height"];?>  !important;
      --text-size-small-h2-ls: <?php echo $options["small_h2"]['text']["letter_spacing"];?>  !important;
      --text-size-small-h2-w: <?php echo $options["small_h2"]['text']["weight"];?>  !important;
      --text-size-small-h2-t: <?php echo $options["small_h2"]['text']["transform"];?>  !important;

      --text-size-small-h3-xs: <?php echo $options["small_h3"]['text']["xs"];?>  !important;
      --text-size-small-h3-sm: <?php echo $options["small_h3"]['text']["sm"];?>  !important;
      --text-size-small-h3-md: <?php echo $options["small_h3"]['text']["md"];?>  !important;
      --text-size-small-h3-lg: <?php echo $options["small_h3"]['text']["lg"];?>  !important;
      --text-size-small-h3-xl: <?php echo $options["small_h3"]['text']["xl"];?>  !important;
      --text-size-small-h3-xxl: <?php echo $options["small_h3"]['text']["xxl"];?>  !important;
      --text-size-small-h3-xs-p: <?php echo $options["small_h3"]['text']["xs_p"];?>  !important;
      --text-size-small-h3-sm-p: <?php echo $options["small_h3"]['text']["sm_p"];?>  !important;
      --text-size-small-h3-md-p: <?php echo $options["small_h3"]['text']["md_p"];?>  !important;
      --text-size-small-h3-lg-p: <?php echo $options["small_h3"]['text']["lg_p"];?>  !important;
      --text-size-small-h3-xl-p: <?php echo $options["small_h3"]['text']["xl_p"];?>  !important;
      --text-size-small-h3-xxl-p: <?php echo $options["small_h3"]['text']["xxl_p"];?>  !important;
      --text-size-small-h3-lh: <?php echo $options["small_h3"]['text']["line_height"];?>  !important;
      --text-size-small-h3-ls: <?php echo $options["small_h3"]['text']["letter_spacing"];?>  !important;
      --text-size-small-h3-w: <?php echo $options["small_h3"]['text']["weight"];?>  !important;
      --text-size-small-h3-t: <?php echo $options["small_h3"]['text']["transform"];?>  !important;

      --text-size-small-h4-xs: <?php echo $options["small_h4"]['text']["xs"];?>  !important;
      --text-size-small-h4-sm: <?php echo $options["small_h4"]['text']["sm"];?>  !important;
      --text-size-small-h4-md: <?php echo $options["small_h4"]['text']["md"];?>  !important;
      --text-size-small-h4-lg: <?php echo $options["small_h4"]['text']["lg"];?>  !important;
      --text-size-small-h4-xl: <?php echo $options["small_h4"]['text']["xl"];?>  !important;
      --text-size-small-h4-xxl: <?php echo $options["small_h4"]['text']["xxl"];?>  !important;
      --text-size-small-h4-xs-p: <?php echo $options["small_h4"]['text']["xs_p"];?>  !important;
      --text-size-small-h4-sm-p: <?php echo $options["small_h4"]['text']["sm_p"];?>  !important;
      --text-size-small-h4-md-p: <?php echo $options["small_h4"]['text']["md_p"];?>  !important;
      --text-size-small-h4-lg-p: <?php echo $options["small_h4"]['text']["lg_p"];?>  !important;
      --text-size-small-h4-xl-p: <?php echo $options["small_h4"]['text']["xl_p"];?>  !important;
      --text-size-small-h4-xxl-p: <?php echo $options["small_h4"]['text']["xxl_p"];?>  !important;
      --text-size-small-h4-lh: <?php echo $options["small_h4"]['text']["line_height"];?>  !important;
      --text-size-small-h4-ls: <?php echo $options["small_h4"]['text']["letter_spacing"];?>  !important;
      --text-size-small-h4-w: <?php echo $options["small_h4"]['text']["weight"];?>  !important;
      --text-size-small-h4-t: <?php echo $options["small_h4"]['text']["transform"];?>  !important;

      --text-size-small-h5-xs: <?php echo $options["small_h5"]['text']["xs"];?>  !important;
      --text-size-small-h5-sm: <?php echo $options["small_h5"]['text']["sm"];?>  !important;
      --text-size-small-h5-md: <?php echo $options["small_h5"]['text']["md"];?>  !important;
      --text-size-small-h5-lg: <?php echo $options["small_h5"]['text']["lg"];?>  !important;
      --text-size-small-h5-xl: <?php echo $options["small_h5"]['text']["xl"];?>  !important;
      --text-size-small-h5-xxl: <?php echo $options["small_h5"]['text']["xxl"];?>  !important;
      --text-size-small-h5-xs-p: <?php echo $options["small_h5"]['text']["xs_p"];?>  !important;
      --text-size-small-h5-sm-p: <?php echo $options["small_h5"]['text']["sm_p"];?>  !important;
      --text-size-small-h5-md-p: <?php echo $options["small_h5"]['text']["md_p"];?>  !important;
      --text-size-small-h5-lg-p: <?php echo $options["small_h5"]['text']["lg_p"];?>  !important;
      --text-size-small-h5-xl-p: <?php echo $options["small_h5"]['text']["xl_p"];?>  !important;
      --text-size-small-h5-xxl-p: <?php echo $options["small_h5"]['text']["xxl_p"];?>  !important;
      --text-size-small-h5-lh: <?php echo $options["small_h5"]['text']["line_height"];?>  !important;
      --text-size-small-h5-ls: <?php echo $options["small_h5"]['text']["letter_spacing"];?>  !important;
      --text-size-small-h5-w: <?php echo $options["small_h5"]['text']["weight"];?>  !important;
      --text-size-small-h5-t: <?php echo $options["small_h5"]['text']["transform"];?>  !important;

      --text-size-small-p-xs: <?php echo $options["small_p"]['text']["xs"];?>  !important;
      --text-size-small-p-sm: <?php echo $options["small_p"]['text']["sm"];?>  !important;
      --text-size-small-p-md: <?php echo $options["small_p"]['text']["md"];?>  !important;
      --text-size-small-p-lg: <?php echo $options["small_p"]['text']["lg"];?>  !important;
      --text-size-small-p-xl: <?php echo $options["small_p"]['text']["xl"];?>  !important;
      --text-size-small-p-xxl: <?php echo $options["small_p"]['text']["xxl"];?>  !important;
      --text-size-small-p-xs-p: <?php echo $options["small_p"]['text']["xs_p"];?>  !important;
      --text-size-small-p-sm-p: <?php echo $options["small_p"]['text']["sm_p"];?>  !important;
      --text-size-small-p-md-p: <?php echo $options["small_p"]['text']["md_p"];?>  !important;
      --text-size-small-p-lg-p: <?php echo $options["small_p"]['text']["lg_p"];?>  !important;
      --text-size-small-p-xl-p: <?php echo $options["small_p"]['text']["xl_p"];?>  !important;
      --text-size-small-p-xxl-p: <?php echo $options["small_p"]['text']["xxl_p"];?>  !important;
      --text-size-small-p-lh: <?php echo $options["small_p"]['text']["line_height"];?>  !important;
      --text-size-small-p-ls: <?php echo $options["small_p"]['text']["letter_spacing"];?>  !important;
      --text-size-small-p-w: <?php echo $options["small_p"]['text']["weight"];?>  !important;
      --text-size-small-p-t: <?php echo $options["small_p"]['text']["transform"];?>  !important;

      --text-size-small-q-xs: <?php echo $options["small_q"]['text']["xs"];?>  !important;
      --text-size-small-q-sm: <?php echo $options["small_q"]['text']["sm"];?>  !important;
      --text-size-small-q-md: <?php echo $options["small_q"]['text']["md"];?>  !important;
      --text-size-small-q-lg: <?php echo $options["small_q"]['text']["lg"];?>  !important;
      --text-size-small-q-xl: <?php echo $options["small_q"]['text']["xl"];?>  !important;
      --text-size-small-q-xxl: <?php echo $options["small_q"]['text']["xxl"];?>  !important;
      --text-size-small-q-xs-p: <?php echo $options["small_q"]['text']["xs_p"];?>  !important;
      --text-size-small-q-sm-p: <?php echo $options["small_q"]['text']["sm_p"];?>  !important;
      --text-size-small-q-md-p: <?php echo $options["small_q"]['text']["md_p"];?>  !important;
      --text-size-small-q-lg-p: <?php echo $options["small_q"]['text']["lg_p"];?>  !important;
      --text-size-small-q-xl-p: <?php echo $options["small_q"]['text']["xl_p"];?>  !important;
      --text-size-small-q-xxl-p: <?php echo $options["small_q"]['text']["xxl_p"];?>  !important;
      --text-size-small-q-lh: <?php echo $options["small_q"]['text']["line_height"];?>  !important;
      --text-size-small-q-ls: <?php echo $options["small_q"]['text']["letter_spacing"];?>  !important;
      --text-size-small-q-w: <?php echo $options["small_q"]['text']["weight"];?>  !important;
      --text-size-small-q-t: <?php echo $options["small_q"]['text']["transform"];?>  !important;

      --text-size-small-c-xs: <?php echo $options["small_c"]['text']["xs"];?>  !important;
      --text-size-small-c-sm: <?php echo $options["small_c"]['text']["sm"];?>  !important;
      --text-size-small-c-md: <?php echo $options["small_c"]['text']["md"];?>  !important;
      --text-size-small-c-lg: <?php echo $options["small_c"]['text']["lg"];?>  !important;
      --text-size-small-c-xl: <?php echo $options["small_c"]['text']["xl"];?>  !important;
      --text-size-small-c-xxl: <?php echo $options["small_c"]['text']["xxl"];?>  !important;
      --text-size-small-c-xs-p: <?php echo $options["small_c"]['text']["xs_p"];?>  !important;
      --text-size-small-c-sm-p: <?php echo $options["small_c"]['text']["sm_p"];?>  !important;
      --text-size-small-c-md-p: <?php echo $options["small_c"]['text']["md_p"];?>  !important;
      --text-size-small-c-lg-p: <?php echo $options["small_c"]['text']["lg_p"];?>  !important;
      --text-size-small-c-xl-p: <?php echo $options["small_c"]['text']["xl_p"];?>  !important;
      --text-size-small-c-xxl-p: <?php echo $options["small_c"]['text']["xxl_p"];?>  !important;
      --text-size-small-c-lh: <?php echo $options["small_c"]['text']["line_height"];?>  !important;
      --text-size-small-c-ls: <?php echo $options["small_c"]['text']["letter_spacing"];?>  !important;
      --text-size-small-c-w: <?php echo $options["small_c"]['text']["weight"];?>  !important;
      --text-size-small-c-t: <?php echo $options["small_c"]['text']["transform"];?>  !important;

  }
</style>
