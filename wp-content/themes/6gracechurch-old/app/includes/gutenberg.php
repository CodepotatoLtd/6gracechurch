<?php

function tabor_gutenberg_disable_all_colors()
{
    add_theme_support('editor-color-palette');
    add_theme_support('disable-custom-colors');
    add_theme_support('editor-font-sizes');
    add_theme_support('disable-custom-font-sizes');
}

add_action('after_setup_theme', 'tabor_gutenberg_disable_all_colors');
