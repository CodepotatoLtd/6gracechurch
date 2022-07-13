<header class="burger-menu-style">
  <!--<div class="banner">

    <a class="brand" href="{{ home_url('/') }}">
      <?php

      $image = get_field('logo', 'options'); ?>

      <?php if( !empty($image) ):

        // vars
        $url = $image['url'];
        $title = $image['title'];
        $alt = $image['alt'];
        $caption = $image['caption'];

        // thumbnail
        // $size = 'full';
        // $thumb = $image['sizes'][ $size ];

      endif;

      ?>

      <img class="menu-logo" src="<?php echo $url;?>" alt="<?php echo $alt; ?>">

    </a>
    <a id="show-menu">

      <span></span>
      <span></span>
      <span></span>

    </a>
  </div>-->
    <a id="show-menu" class="fixed">

      <span></span>
      <span></span>
      <span></span>

    </a>
  <nav class="nav-primary">

    @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'container' => '', 'menu_class' => 'nav']) !!}
    @endif

  </nav>
</header>



