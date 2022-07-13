<?php

/**
* If the ACF options plugin is installed, setup an options page
*/

if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
    'page_title'    => 'Theme General Settings',
    'menu_title'    => 'Theme Settings',
    'menu_slug'     => 'theme-general-settings',
    'capability'    => 'edit_posts',
    'redirect'      => false
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Font Settings',
    'menu_title'    => 'Fonts',
    'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Type Settings',
    'menu_title'    => 'Type Settings',
    'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Colour Settings',
    'menu_title'    => 'Colours',
    'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Button Settings',
    'menu_title'    => 'Buttons',
    'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Card Settings',
    'menu_title'    => 'Cards',
    'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title'    => 'Carousel Settings',
        'menu_title'    => 'Carousels',
        'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Nav Settings',
    'menu_title'    => 'Nav',
    'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Image Sizes',
    'menu_title'    => 'Image Sizes',
    'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Theme Footer Settings',
    'menu_title'    => 'Footer',
    'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
    'page_title'    => 'Theme News Settings',
    'menu_title'    => 'Index',
//'parent_slug'   => 'theme-general-settings',
    'parent_slug'    => 'edit.php',

    ));

    acf_add_options_page(array(
    'page_title'    => 'Footer CTA',
    'menu_title'    => 'Footer CTA',
    'menu_slug'     => 'footer-cta',
    'capability'    => 'edit_posts',
    'redirect'      => false,
    'icon_url'      => 'dashicons-table-row-after',
    'position' => '40.5',
    ));
}
