<?php if (get_field('footer_cta_use_main') != "no") { ?>
@include('partials.flexible-footer')
<?php } ?>


<footer class="content-info">

  <?php if (is_active_sidebar('footer-nav')) : ?>
  <div class="section-footer-nav bg-colour-secondary padding-top-element padding-bottom-element text-dark ">

    <div class="container-fluid">

      <div class="row">
        <div class="col-12 text-center menu-inline">
          @php dynamic_sidebar('footer-nav') @endphp
        </div>

      </div>

    </div>
  </div>
  <?php endif; ?>
  <?php if (is_active_sidebar('sidebar-footer')) : ?>

  <div class="section-lower-footer padding-top-element padding-bottom-element text-white small">

    <div class="container">

      <div class="row">
        <div class="col-sm-12 text-center">
          @php dynamic_sidebar('sidebar-footer') @endphp
        </div>
      </div>

    </div>
  </div>

  <?php endif; ?>
  <?php if (is_active_sidebar('lower-footer-1') || is_active_sidebar('lower-footer-2')) : ?>
  <div class="section-lower-footer bg-colour-dark

   p-t-mobile-element
    p-r-mobile-element
    p-b-mobile-element
    p-l-mobile-element

    p-t-desktop-element
    p-r-desktop-element
    p-b-desktop-element
    p-l-desktop-element
   text-white">

    <div class="container-fluid">

      <div class="row align-items-center">
        <div class="col-lg-9 text-lg-left p-b-mobile-element p-b-desktop-none small">
          @php dynamic_sidebar('lower-footer-1') @endphp
        </div>
        <div class="col-lg-3 text-lg-right medium">
          @php dynamic_sidebar('lower-footer-2') @endphp
        </div>
      </div>

    </div>
  </div>

  <?php endif; ?>


</footer>
