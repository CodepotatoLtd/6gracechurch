<?php

add_action('init', 'register_testimonials_post_type');

function register_testimonials_post_type()
{
    $labels = array(
    'name'               => _x('Testimonials', 'post type general name', 'theme'),
    'singular_name'      => _x('Testimonial', 'post type singular name', 'theme'),
    'menu_name'          => _x('Testimonials', 'admin menu', 'theme'),
    'name_admin_bar'     => _x('Testimonials', 'add new on admin bar', 'theme'),
    'add_new'            => _x('Add New', 'Testimonial', 'theme'),
    'add_new_item'       => __('Add New', 'theme'),
    'new_item'           => __('New', 'theme'),
    'edit_item'          => __('Edit', 'theme'),
    'view_item'          => __('View', 'theme'),
    'all_items'          => __('All', 'theme'),
    'search_items'       => __('Search', 'theme'),
    'parent_item_colon'  => __('Parent:', 'theme'),
    'not_found'          => __('None found.', 'theme'),
    'not_found_in_trash' => __('None found in Trash.', 'theme')
    );

    $args = array(
    'labels'             => $labels,
    'description'        => __('Description.', 'theme'),
    'public'             => true,
    'publicly_queryable' => true,
//'taxonomies' => array( 'form_types'),
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => false,
    'rewrite'            => array( 'slug' => 'testimonials','with_front' => false ),
    'capability_type'    => 'post',
    'has_archive'        => false,
    'exclude_from_search' => false,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'menu_icon'              => 'dashicons-editor-quote',
    'rest_base'          => '',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
    );

    register_post_type('testimonials', $args);
}
