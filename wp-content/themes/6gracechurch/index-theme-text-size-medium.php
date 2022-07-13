<style>

  :root {

    /* fonts */

      --text-size-medium-h1-xs: <?php echo $options["medium_h1"]['text']["xs"];?>  !important;
      --text-size-medium-h1-sm: <?php echo $options["medium_h1"]['text']["sm"];?>  !important;
      --text-size-medium-h1-md: <?php echo $options["medium_h1"]['text']["md"];?>  !important;
      --text-size-medium-h1-lg: <?php echo $options["medium_h1"]['text']["lg"];?>  !important;
      --text-size-medium-h1-xl: <?php echo $options["medium_h1"]['text']["xl"];?>  !important;
      --text-size-medium-h1-xxl: <?php echo $options["medium_h1"]['text']["xxl"];?>  !important;
      --text-size-medium-h1-xs-p: <?php echo $options["medium_h1"]['text']["xs_p"];?>  !important;
      --text-size-medium-h1-sm-p: <?php echo $options["medium_h1"]['text']["sm_p"];?>  !important;
      --text-size-medium-h1-md-p: <?php echo $options["medium_h1"]['text']["md_p"];?>  !important;
      --text-size-medium-h1-lg-p: <?php echo $options["medium_h1"]['text']["lg_p"];?>  !important;
      --text-size-medium-h1-xl-p: <?php echo $options["medium_h1"]['text']["xl_p"];?>  !important;
      --text-size-medium-h1-xxl-p: <?php echo $options["medium_h1"]['text']["xxl_p"];?>  !important;
      --text-size-medium-h1-lh: <?php echo $options["medium_h1"]['text']["line_height"];?>  !important;
      --text-size-medium-h1-ls: <?php echo $options["medium_h1"]['text']["letter_spacing"];?>  !important;
      --text-size-medium-h1-w: <?php echo $options["medium_h1"]['text']["weight"];?>  !important;
      --text-size-medium-h1-t: <?php echo $options["medium_h1"]['text']["transform"];?>  !important;

      --text-size-medium-h2-xs: <?php echo $options["medium_h2"]['text']["xs"];?>  !important;
      --text-size-medium-h2-sm: <?php echo $options["medium_h2"]['text']["sm"];?>  !important;
      --text-size-medium-h2-md: <?php echo $options["medium_h2"]['text']["md"];?>  !important;
      --text-size-medium-h2-lg: <?php echo $options["medium_h2"]['text']["lg"];?>  !important;
      --text-size-medium-h2-xl: <?php echo $options["medium_h2"]['text']["xl"];?>  !important;
      --text-size-medium-h2-xxl: <?php echo $options["medium_h2"]['text']["xxl"];?>  !important;
      --text-size-medium-h2-xs-p: <?php echo $options["medium_h2"]['text']["xs_p"];?>  !important;
      --text-size-medium-h2-sm-p: <?php echo $options["medium_h2"]['text']["sm_p"];?>  !important;
      --text-size-medium-h2-md-p: <?php echo $options["medium_h2"]['text']["md_p"];?>  !important;
      --text-size-medium-h2-lg-p: <?php echo $options["medium_h2"]['text']["lg_p"];?>  !important;
      --text-size-medium-h2-xl-p: <?php echo $options["medium_h2"]['text']["xl_p"];?>  !important;
      --text-size-medium-h2-xxl-p: <?php echo $options["medium_h2"]['text']["xxl_p"];?>  !important;
      --text-size-medium-h2-lh: <?php echo $options["medium_h2"]['text']["line_height"];?>  !important;
      --text-size-medium-h2-ls: <?php echo $options["medium_h2"]['text']["letter_spacing"];?>  !important;
      --text-size-medium-h2-w: <?php echo $options["medium_h2"]['text']["weight"];?>  !important;
      --text-size-medium-h2-t: <?php echo $options["medium_h2"]['text']["transform"];?>  !important;

      --text-size-medium-h3-xs: <?php echo $options["medium_h3"]['text']["xs"];?>  !important;
      --text-size-medium-h3-sm: <?php echo $options["medium_h3"]['text']["sm"];?>  !important;
      --text-size-medium-h3-md: <?php echo $options["medium_h3"]['text']["md"];?>  !important;
      --text-size-medium-h3-lg: <?php echo $options["medium_h3"]['text']["lg"];?>  !important;
      --text-size-medium-h3-xl: <?php echo $options["medium_h3"]['text']["xl"];?>  !important;
      --text-size-medium-h3-xxl: <?php echo $options["medium_h3"]['text']["xxl"];?>  !important;
      --text-size-medium-h3-xs-p: <?php echo $options["medium_h3"]['text']["xs_p"];?>  !important;
      --text-size-medium-h3-sm-p: <?php echo $options["medium_h3"]['text']["sm_p"];?>  !important;
      --text-size-medium-h3-md-p: <?php echo $options["medium_h3"]['text']["md_p"];?>  !important;
      --text-size-medium-h3-lg-p: <?php echo $options["medium_h3"]['text']["lg_p"];?>  !important;
      --text-size-medium-h3-xl-p: <?php echo $options["medium_h3"]['text']["xl_p"];?>  !important;
      --text-size-medium-h3-xxl-p: <?php echo $options["medium_h3"]['text']["xxl_p"];?>  !important;
      --text-size-medium-h3-lh: <?php echo $options["medium_h3"]['text']["line_height"];?>  !important;
      --text-size-medium-h3-ls: <?php echo $options["medium_h3"]['text']["letter_spacing"];?>  !important;
      --text-size-medium-h3-w: <?php echo $options["medium_h3"]['text']["weight"];?>  !important;
      --text-size-medium-h3-t: <?php echo $options["medium_h3"]['text']["transform"];?>  !important;

      --text-size-medium-h4-xs: <?php echo $options["medium_h4"]['text']["xs"];?>  !important;
      --text-size-medium-h4-sm: <?php echo $options["medium_h4"]['text']["sm"];?>  !important;
      --text-size-medium-h4-md: <?php echo $options["medium_h4"]['text']["md"];?>  !important;
      --text-size-medium-h4-lg: <?php echo $options["medium_h4"]['text']["lg"];?>  !important;
      --text-size-medium-h4-xl: <?php echo $options["medium_h4"]['text']["xl"];?>  !important;
      --text-size-medium-h4-xxl: <?php echo $options["medium_h4"]['text']["xxl"];?>  !important;
      --text-size-medium-h4-xs-p: <?php echo $options["medium_h4"]['text']["xs_p"];?>  !important;
      --text-size-medium-h4-sm-p: <?php echo $options["medium_h4"]['text']["sm_p"];?>  !important;
      --text-size-medium-h4-md-p: <?php echo $options["medium_h4"]['text']["md_p"];?>  !important;
      --text-size-medium-h4-lg-p: <?php echo $options["medium_h4"]['text']["lg_p"];?>  !important;
      --text-size-medium-h4-xl-p: <?php echo $options["medium_h4"]['text']["xl_p"];?>  !important;
      --text-size-medium-h4-xxl-p: <?php echo $options["medium_h4"]['text']["xxl_p"];?>  !important;
      --text-size-medium-h4-lh: <?php echo $options["medium_h4"]['text']["line_height"];?>  !important;
      --text-size-medium-h4-ls: <?php echo $options["medium_h4"]['text']["letter_spacing"];?>  !important;
      --text-size-medium-h4-w: <?php echo $options["medium_h4"]['text']["weight"];?>  !important;
      --text-size-medium-h4-t: <?php echo $options["medium_h4"]['text']["transform"];?>  !important;

      --text-size-medium-h5-xs: <?php echo $options["medium_h5"]['text']["xs"];?>  !important;
      --text-size-medium-h5-sm: <?php echo $options["medium_h5"]['text']["sm"];?>  !important;
      --text-size-medium-h5-md: <?php echo $options["medium_h5"]['text']["md"];?>  !important;
      --text-size-medium-h5-lg: <?php echo $options["medium_h5"]['text']["lg"];?>  !important;
      --text-size-medium-h5-xl: <?php echo $options["medium_h5"]['text']["xl"];?>  !important;
      --text-size-medium-h5-xxl: <?php echo $options["medium_h5"]['text']["xxl"];?>  !important;
      --text-size-medium-h5-xs-p: <?php echo $options["medium_h5"]['text']["xs_p"];?>  !important;
      --text-size-medium-h5-sm-p: <?php echo $options["medium_h5"]['text']["sm_p"];?>  !important;
      --text-size-medium-h5-md-p: <?php echo $options["medium_h5"]['text']["md_p"];?>  !important;
      --text-size-medium-h5-lg-p: <?php echo $options["medium_h5"]['text']["lg_p"];?>  !important;
      --text-size-medium-h5-xl-p: <?php echo $options["medium_h5"]['text']["xl_p"];?>  !important;
      --text-size-medium-h5-xxl-p: <?php echo $options["medium_h5"]['text']["xxl_p"];?>  !important;
      --text-size-medium-h5-lh: <?php echo $options["medium_h5"]['text']["line_height"];?>  !important;
      --text-size-medium-h5-ls: <?php echo $options["medium_h5"]['text']["letter_spacing"];?>  !important;
      --text-size-medium-h5-w: <?php echo $options["medium_h5"]['text']["weight"];?>  !important;
      --text-size-medium-h5-t: <?php echo $options["medium_h5"]['text']["transform"];?>  !important;

      --text-size-medium-p-xs: <?php echo $options["medium_p"]['text']["xs"];?>  !important;
      --text-size-medium-p-sm: <?php echo $options["medium_p"]['text']["sm"];?>  !important;
      --text-size-medium-p-md: <?php echo $options["medium_p"]['text']["md"];?>  !important;
      --text-size-medium-p-lg: <?php echo $options["medium_p"]['text']["lg"];?>  !important;
      --text-size-medium-p-xl: <?php echo $options["medium_p"]['text']["xl"];?>  !important;
      --text-size-medium-p-xxl: <?php echo $options["medium_p"]['text']["xxl"];?>  !important;
      --text-size-medium-p-xs-p: <?php echo $options["medium_p"]['text']["xs_p"];?>  !important;
      --text-size-medium-p-sm-p: <?php echo $options["medium_p"]['text']["sm_p"];?>  !important;
      --text-size-medium-p-md-p: <?php echo $options["medium_p"]['text']["md_p"];?>  !important;
      --text-size-medium-p-lg-p: <?php echo $options["medium_p"]['text']["lg_p"];?>  !important;
      --text-size-medium-p-xl-p: <?php echo $options["medium_p"]['text']["xl_p"];?>  !important;
      --text-size-medium-p-xxl-p: <?php echo $options["medium_p"]['text']["xxl_p"];?>  !important;
      --text-size-medium-p-lh: <?php echo $options["medium_p"]['text']["line_height"];?>  !important;
      --text-size-medium-p-ls: <?php echo $options["medium_p"]['text']["letter_spacing"];?>  !important;
      --text-size-medium-p-w: <?php echo $options["medium_p"]['text']["weight"];?>  !important;
      --text-size-medium-p-t: <?php echo $options["medium_p"]['text']["transform"];?>  !important;

      --text-size-medium-q-xs: <?php echo $options["medium_q"]['text']["xs"];?>  !important;
      --text-size-medium-q-sm: <?php echo $options["medium_q"]['text']["sm"];?>  !important;
      --text-size-medium-q-md: <?php echo $options["medium_q"]['text']["md"];?>  !important;
      --text-size-medium-q-lg: <?php echo $options["medium_q"]['text']["lg"];?>  !important;
      --text-size-medium-q-xl: <?php echo $options["medium_q"]['text']["xl"];?>  !important;
      --text-size-medium-q-xxl: <?php echo $options["medium_q"]['text']["xxl"];?>  !important;
      --text-size-medium-q-xs-p: <?php echo $options["medium_q"]['text']["xs_p"];?>  !important;
      --text-size-medium-q-sm-p: <?php echo $options["medium_q"]['text']["sm_p"];?>  !important;
      --text-size-medium-q-md-p: <?php echo $options["medium_q"]['text']["md_p"];?>  !important;
      --text-size-medium-q-lg-p: <?php echo $options["medium_q"]['text']["lg_p"];?>  !important;
      --text-size-medium-q-xl-p: <?php echo $options["medium_q"]['text']["xl_p"];?>  !important;
      --text-size-medium-q-xxl-p: <?php echo $options["medium_q"]['text']["xxl_p"];?>  !important;
      --text-size-medium-q-lh: <?php echo $options["medium_q"]['text']["line_height"];?>  !important;
      --text-size-medium-q-ls: <?php echo $options["medium_q"]['text']["letter_spacing"];?>  !important;
      --text-size-medium-q-w: <?php echo $options["medium_q"]['text']["weight"];?>  !important;
      --text-size-medium-q-t: <?php echo $options["medium_q"]['text']["transform"];?>  !important;

      --text-size-medium-c-xs: <?php echo $options["medium_c"]['text']["xs"];?>  !important;
      --text-size-medium-c-sm: <?php echo $options["medium_c"]['text']["sm"];?>  !important;
      --text-size-medium-c-md: <?php echo $options["medium_c"]['text']["md"];?>  !important;
      --text-size-medium-c-lg: <?php echo $options["medium_c"]['text']["lg"];?>  !important;
      --text-size-medium-c-xl: <?php echo $options["medium_c"]['text']["xl"];?>  !important;
      --text-size-medium-c-xxl: <?php echo $options["medium_c"]['text']["xxl"];?>  !important;
      --text-size-medium-c-xs-p: <?php echo $options["medium_c"]['text']["xs_p"];?>  !important;
      --text-size-medium-c-sm-p: <?php echo $options["medium_c"]['text']["sm_p"];?>  !important;
      --text-size-medium-c-md-p: <?php echo $options["medium_c"]['text']["md_p"];?>  !important;
      --text-size-medium-c-lg-p: <?php echo $options["medium_c"]['text']["lg_p"];?>  !important;
      --text-size-medium-c-xl-p: <?php echo $options["medium_c"]['text']["xl_p"];?>  !important;
      --text-size-medium-c-xxl-p: <?php echo $options["medium_c"]['text']["xxl_p"];?>  !important;
      --text-size-medium-c-lh: <?php echo $options["medium_c"]['text']["line_height"];?>  !important;
      --text-size-medium-c-ls: <?php echo $options["medium_c"]['text']["letter_spacing"];?>  !important;
      --text-size-medium-c-w: <?php echo $options["medium_c"]['text']["weight"];?>  !important;
      --text-size-medium-c-t: <?php echo $options["medium_c"]['text']["transform"];?>  !important;

  }
</style>
