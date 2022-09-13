<?php

function wpb_mce_buttons_2($buttons)
{
    array_unshift($buttons, 'styleselect');
    return $buttons;
}
add_filter('mce_buttons_2', 'wpb_mce_buttons_2');

function my_mce_before_init_insert_formats($init_array)
{

// Define the style_formats array

    $style_formats = array(
        /*
        * Each array child is a format with it's own settings
        * Notice that each array has title, block, classes, and wrapper arguments
        * Title is the label which will be visible in Formats menu
        * Block defines whether it is a span, div, selector, or inline style
        * Classes allows you to define CSS classes
        * Wrapper whether or not to add a new block-level element around any selected elements
        */
        array(
            'title' => 'Button CTA',
            'block' => 'span',
            'classes' => 'button-cta',
            'wrapper' => true,
        ),

        array(
            'title' => 'Inline Button CTA',
            'block' => 'span',
            'classes' => 'inline-button-cta',
            'wrapper' => true,
        ),

        array(
            'title' => 'Text CTA',
            'block' => 'span',
            'classes' => 'text-cta',
            'wrapper' => true,
        ),


        array(
            'title' => 'Heading - Strap Heading',
            'inline' => 'span',
            'classes' => 'lead-in-heading',
            'wrapper' => true,
        ),
        array(
            'title' => 'Heading - Sub Heading',
            'inline' => 'span',
            'classes' => 'sub-heading',
            'wrapper' => true,
        ),

        array(
            'title' => 'Block Text link',
            'inline' => 'span',
            'classes' => 'block-text-link',
            'wrapper' => true,
        ),

        array(
            'title' => 'Block Text link',
            'inline' => 'span',
            'classes' => 'block-text-link',
            'wrapper' => true,
        ),

        array(
            'title' => 'Metropolitan',
            'block' => 'div',
            'classes' => 'metropolitan station',
            'wrapper' => true,
        ),

        array(
            'title' => 'Hammersmith',
            'block' => 'div',
            'classes' => 'hammersmith station',
            'wrapper' => true,
        ),

        array(
            'title' => 'Circle',
            'block' => 'div',
            'classes' => 'circle station',
            'wrapper' => true,
        ),

        array(
            'title' => 'Central',
            'block' => 'div',
            'classes' => 'central station',
            'wrapper' => true,
        ),

        array(
            'title' => 'National Rail',
            'block' => 'div',
            'classes' => 'national station',
            'wrapper' => true,
        ),

        array(
            'title' => 'Elizabeth',
            'block' => 'div',
            'classes' => 'elizabeth station',
            'wrapper' => true,
        ),

        array(
            'title' => 'Northern',
            'block' => 'div',
            'classes' => 'northern station',
            'wrapper' => true,
        ),

        array(
            'title' => 'DLR',
            'block' => 'div',
            'classes' => 'dlr station',
            'wrapper' => true,
        ),

        array(
            'title' => 'Waterloo & City',
            'block' => 'div',
            'classes' => 'waterloo station',
            'wrapper' => true,
        ),

        array(
            'title' => 'District',
            'block' => 'div',
            'classes' => 'district station',
            'wrapper' => true,
        ),


    );
    // Insert the array, JSON ENCODED, into 'style_formats'
    $init_array['style_formats'] = json_encode($style_formats);

    return $init_array;
}
// Attach callback to 'tiny_mce_before_init'
add_filter('tiny_mce_before_init', 'my_mce_before_init_insert_formats');
