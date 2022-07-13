<style>

  :root {

    /* fonts */

      --text-size-large-h1-xs: <?php echo $options["large_h1"]['text']["xs"];?>  !important;
      --text-size-large-h1-sm: <?php echo $options["large_h1"]['text']["sm"];?>  !important;
      --text-size-large-h1-md: <?php echo $options["large_h1"]['text']["md"];?>  !important;
      --text-size-large-h1-lg: <?php echo $options["large_h1"]['text']["lg"];?>  !important;
      --text-size-large-h1-xl: <?php echo $options["large_h1"]['text']["xl"];?>  !important;
      --text-size-large-h1-xxl: <?php echo $options["large_h1"]['text']["xxl"];?>  !important;
      --text-size-large-h1-xs-p: <?php echo $options["large_h1"]['text']["xs_p"];?>  !important;
      --text-size-large-h1-sm-p: <?php echo $options["large_h1"]['text']["sm_p"];?>  !important;
      --text-size-large-h1-md-p: <?php echo $options["large_h1"]['text']["md_p"];?>  !important;
      --text-size-large-h1-lg-p: <?php echo $options["large_h1"]['text']["lg_p"];?>  !important;
      --text-size-large-h1-xl-p: <?php echo $options["large_h1"]['text']["xl_p"];?>  !important;
      --text-size-large-h1-xxl-p: <?php echo $options["large_h1"]['text']["xxl_p"];?>  !important;
      --text-size-large-h1-lh: <?php echo $options["large_h1"]['text']["line_height"];?>  !important;
      --text-size-large-h1-ls: <?php echo $options["large_h1"]['text']["letter_spacing"];?>  !important;
      --text-size-large-h1-w: <?php echo $options["large_h1"]['text']["weight"];?>  !important;
      --text-size-large-h1-t: <?php echo $options["large_h1"]['text']["transform"];?>  !important;

      --text-size-large-h2-xs: <?php echo $options["large_h2"]['text']["xs"];?>  !important;
      --text-size-large-h2-sm: <?php echo $options["large_h2"]['text']["sm"];?>  !important;
      --text-size-large-h2-md: <?php echo $options["large_h2"]['text']["md"];?>  !important;
      --text-size-large-h2-lg: <?php echo $options["large_h2"]['text']["lg"];?>  !important;
      --text-size-large-h2-xl: <?php echo $options["large_h2"]['text']["xl"];?>  !important;
      --text-size-large-h2-xxl: <?php echo $options["large_h2"]['text']["xxl"];?>  !important;
      --text-size-large-h2-xs-p: <?php echo $options["large_h2"]['text']["xs_p"];?>  !important;
      --text-size-large-h2-sm-p: <?php echo $options["large_h2"]['text']["sm_p"];?>  !important;
      --text-size-large-h2-md-p: <?php echo $options["large_h2"]['text']["md_p"];?>  !important;
      --text-size-large-h2-lg-p: <?php echo $options["large_h2"]['text']["lg_p"];?>  !important;
      --text-size-large-h2-xl-p: <?php echo $options["large_h2"]['text']["xl_p"];?>  !important;
      --text-size-large-h2-xxl-p: <?php echo $options["large_h2"]['text']["xxl_p"];?>  !important;
      --text-size-large-h2-lh: <?php echo $options["large_h2"]['text']["line_height"];?>  !important;
      --text-size-large-h2-ls: <?php echo $options["large_h2"]['text']["letter_spacing"];?>  !important;
      --text-size-large-h2-w: <?php echo $options["large_h2"]['text']["weight"];?>  !important;
      --text-size-large-h2-t: <?php echo $options["large_h2"]['text']["transform"];?>  !important;

      --text-size-large-h3-xs: <?php echo $options["large_h3"]['text']["xs"];?>  !important;
      --text-size-large-h3-sm: <?php echo $options["large_h3"]['text']["sm"];?>  !important;
      --text-size-large-h3-md: <?php echo $options["large_h3"]['text']["md"];?>  !important;
      --text-size-large-h3-lg: <?php echo $options["large_h3"]['text']["lg"];?>  !important;
      --text-size-large-h3-xl: <?php echo $options["large_h3"]['text']["xl"];?>  !important;
      --text-size-large-h3-xxl: <?php echo $options["large_h3"]['text']["xxl"];?>  !important;
      --text-size-large-h3-xs-p: <?php echo $options["large_h3"]['text']["xs_p"];?>  !important;
      --text-size-large-h3-sm-p: <?php echo $options["large_h3"]['text']["sm_p"];?>  !important;
      --text-size-large-h3-md-p: <?php echo $options["large_h3"]['text']["md_p"];?>  !important;
      --text-size-large-h3-lg-p: <?php echo $options["large_h3"]['text']["lg_p"];?>  !important;
      --text-size-large-h3-xl-p: <?php echo $options["large_h3"]['text']["xl_p"];?>  !important;
      --text-size-large-h3-xxl-p: <?php echo $options["large_h3"]['text']["xxl_p"];?>  !important;
      --text-size-large-h3-lh: <?php echo $options["large_h3"]['text']["line_height"];?>  !important;
      --text-size-large-h3-ls: <?php echo $options["large_h3"]['text']["letter_spacing"];?>  !important;
      --text-size-large-h3-w: <?php echo $options["large_h3"]['text']["weight"];?>  !important;
      --text-size-large-h3-t: <?php echo $options["large_h3"]['text']["transform"];?>  !important;

      --text-size-large-h4-xs: <?php echo $options["large_h4"]['text']["xs"];?>  !important;
      --text-size-large-h4-sm: <?php echo $options["large_h4"]['text']["sm"];?>  !important;
      --text-size-large-h4-md: <?php echo $options["large_h4"]['text']["md"];?>  !important;
      --text-size-large-h4-lg: <?php echo $options["large_h4"]['text']["lg"];?>  !important;
      --text-size-large-h4-xl: <?php echo $options["large_h4"]['text']["xl"];?>  !important;
      --text-size-large-h4-xxl: <?php echo $options["large_h4"]['text']["xxl"];?>  !important;
      --text-size-large-h4-xs-p: <?php echo $options["large_h4"]['text']["xs_p"];?>  !important;
      --text-size-large-h4-sm-p: <?php echo $options["large_h4"]['text']["sm_p"];?>  !important;
      --text-size-large-h4-md-p: <?php echo $options["large_h4"]['text']["md_p"];?>  !important;
      --text-size-large-h4-lg-p: <?php echo $options["large_h4"]['text']["lg_p"];?>  !important;
      --text-size-large-h4-xl-p: <?php echo $options["large_h4"]['text']["xl_p"];?>  !important;
      --text-size-large-h4-xxl-p: <?php echo $options["large_h4"]['text']["xxl_p"];?>  !important;
      --text-size-large-h4-lh: <?php echo $options["large_h4"]['text']["line_height"];?>  !important;
      --text-size-large-h4-ls: <?php echo $options["large_h4"]['text']["letter_spacing"];?>  !important;
      --text-size-large-h4-w: <?php echo $options["large_h4"]['text']["weight"];?>  !important;
      --text-size-large-h4-t: <?php echo $options["large_h4"]['text']["transform"];?>  !important;

      --text-size-large-h5-xs: <?php echo $options["large_h5"]['text']["xs"];?>  !important;
      --text-size-large-h5-sm: <?php echo $options["large_h5"]['text']["sm"];?>  !important;
      --text-size-large-h5-md: <?php echo $options["large_h5"]['text']["md"];?>  !important;
      --text-size-large-h5-lg: <?php echo $options["large_h5"]['text']["lg"];?>  !important;
      --text-size-large-h5-xl: <?php echo $options["large_h5"]['text']["xl"];?>  !important;
      --text-size-large-h5-xxl: <?php echo $options["large_h5"]['text']["xxl"];?>  !important;
      --text-size-large-h5-xs-p: <?php echo $options["large_h5"]['text']["xs_p"];?>  !important;
      --text-size-large-h5-sm-p: <?php echo $options["large_h5"]['text']["sm_p"];?>  !important;
      --text-size-large-h5-md-p: <?php echo $options["large_h5"]['text']["md_p"];?>  !important;
      --text-size-large-h5-lg-p: <?php echo $options["large_h5"]['text']["lg_p"];?>  !important;
      --text-size-large-h5-xl-p: <?php echo $options["large_h5"]['text']["xl_p"];?>  !important;
      --text-size-large-h5-xxl-p: <?php echo $options["large_h5"]['text']["xxl_p"];?>  !important;
      --text-size-large-h5-lh: <?php echo $options["large_h5"]['text']["line_height"];?>  !important;
      --text-size-large-h5-ls: <?php echo $options["large_h5"]['text']["letter_spacing"];?>  !important;
      --text-size-large-h5-w: <?php echo $options["large_h5"]['text']["weight"];?>  !important;
      --text-size-large-h5-t: <?php echo $options["large_h5"]['text']["transform"];?>  !important;

      --text-size-large-p-xs: <?php echo $options["large_p"]['text']["xs"];?>  !important;
      --text-size-large-p-sm: <?php echo $options["large_p"]['text']["sm"];?>  !important;
      --text-size-large-p-md: <?php echo $options["large_p"]['text']["md"];?>  !important;
      --text-size-large-p-lg: <?php echo $options["large_p"]['text']["lg"];?>  !important;
      --text-size-large-p-xl: <?php echo $options["large_p"]['text']["xl"];?>  !important;
      --text-size-large-p-xxl: <?php echo $options["large_p"]['text']["xxl"];?>  !important;
      --text-size-large-p-xs-p: <?php echo $options["large_p"]['text']["xs_p"];?>  !important;
      --text-size-large-p-sm-p: <?php echo $options["large_p"]['text']["sm_p"];?>  !important;
      --text-size-large-p-md-p: <?php echo $options["large_p"]['text']["md_p"];?>  !important;
      --text-size-large-p-lg-p: <?php echo $options["large_p"]['text']["lg_p"];?>  !important;
      --text-size-large-p-xl-p: <?php echo $options["large_p"]['text']["xl_p"];?>  !important;
      --text-size-large-p-xxl-p: <?php echo $options["large_p"]['text']["xxl_p"];?>  !important;
      --text-size-large-p-lh: <?php echo $options["large_p"]['text']["line_height"];?>  !important;
      --text-size-large-p-ls: <?php echo $options["large_p"]['text']["letter_spacing"];?>  !important;
      --text-size-large-p-w: <?php echo $options["large_p"]['text']["weight"];?>  !important;
      --text-size-large-p-t: <?php echo $options["large_p"]['text']["transform"];?>  !important;

      --text-size-large-q-xs: <?php echo $options["large_q"]['text']["xs"];?>  !important;
      --text-size-large-q-sm: <?php echo $options["large_q"]['text']["sm"];?>  !important;
      --text-size-large-q-md: <?php echo $options["large_q"]['text']["md"];?>  !important;
      --text-size-large-q-lg: <?php echo $options["large_q"]['text']["lg"];?>  !important;
      --text-size-large-q-xl: <?php echo $options["large_q"]['text']["xl"];?>  !important;
      --text-size-large-q-xxl: <?php echo $options["large_q"]['text']["xxl"];?>  !important;
      --text-size-large-q-xs-p: <?php echo $options["large_q"]['text']["xs_p"];?>  !important;
      --text-size-large-q-sm-p: <?php echo $options["large_q"]['text']["sm_p"];?>  !important;
      --text-size-large-q-md-p: <?php echo $options["large_q"]['text']["md_p"];?>  !important;
      --text-size-large-q-lg-p: <?php echo $options["large_q"]['text']["lg_p"];?>  !important;
      --text-size-large-q-xl-p: <?php echo $options["large_q"]['text']["xl_p"];?>  !important;
      --text-size-large-q-xxl-p: <?php echo $options["large_q"]['text']["xxl_p"];?>  !important;
      --text-size-large-q-lh: <?php echo $options["large_q"]['text']["line_height"];?>  !important;
      --text-size-large-q-ls: <?php echo $options["large_q"]['text']["letter_spacing"];?>  !important;
      --text-size-large-q-w: <?php echo $options["large_q"]['text']["weight"];?>  !important;
      --text-size-large-q-t: <?php echo $options["large_q"]['text']["transform"];?>  !important;

      --text-size-large-c-xs: <?php echo $options["large_c"]['text']["xs"];?>  !important;
      --text-size-large-c-sm: <?php echo $options["large_c"]['text']["sm"];?>  !important;
      --text-size-large-c-md: <?php echo $options["large_c"]['text']["md"];?>  !important;
      --text-size-large-c-lg: <?php echo $options["large_c"]['text']["lg"];?>  !important;
      --text-size-large-c-xl: <?php echo $options["large_c"]['text']["xl"];?>  !important;
      --text-size-large-c-xxl: <?php echo $options["large_c"]['text']["xxl"];?>  !important;
      --text-size-large-c-xs-p: <?php echo $options["large_c"]['text']["xs_p"];?>  !important;
      --text-size-large-c-sm-p: <?php echo $options["large_c"]['text']["sm_p"];?>  !important;
      --text-size-large-c-md-p: <?php echo $options["large_c"]['text']["md_p"];?>  !important;
      --text-size-large-c-lg-p: <?php echo $options["large_c"]['text']["lg_p"];?>  !important;
      --text-size-large-c-xl-p: <?php echo $options["large_c"]['text']["xl_p"];?>  !important;
      --text-size-large-c-xxl-p: <?php echo $options["large_c"]['text']["xxl_p"];?>  !important;
      --text-size-large-c-lh: <?php echo $options["large_c"]['text']["line_height"];?>  !important;
      --text-size-large-c-ls: <?php echo $options["large_c"]['text']["letter_spacing"];?>  !important;
      --text-size-large-c-w: <?php echo $options["large_c"]['text']["weight"];?>  !important;
      --text-size-large-c-t: <?php echo $options["large_c"]['text']["transform"];?>  !important;

  }
</style>
