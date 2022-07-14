<?php $navVisible = get_field('navigation', 'options')?>

<?php if ($navVisible == "show") { ?>

<header class="burger-menu-style">

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

<?php }?>
