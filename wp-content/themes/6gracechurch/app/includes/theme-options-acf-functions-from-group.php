<?php


function get_section_data($s)
{

    $object = new stdClass();

    if (isset($s['section_content'])) {
        $object -> sectionOptions       = get_section_options_for_section_data($s['section_content']);
    }

    //if (isset($s['container_options'])) {
    //    $object -> containerOptions     = get_container_options_for_section_data($s['container_options']);
   // }

    if (isset($s['category_options'])) {
        $object -> categoryOptions     = get_category_options_for_section_data($s['category_options']);
    }

    if (isset($s['header_options'])) {
        $object -> headerOptions     = get_header_options_for_section_data($s['header_options']);
    }

    if (isset($s['intro_options'])) {
        $object -> introOptions     = get_intro_options_for_section_data($s['intro_options']);
    }

    if (isset($s['gallery_options'])) {
        $object -> galleryOptions     = get_gallery_options_for_section_data($s['gallery_options']);
    }

    if (isset($s['form_options'])) {
        $object -> formOptions     = get_form_options_for_section_data($s['form_options']);
    }

    if (isset($s['content_options'])) {
        $object -> contentOptions     = get_content_options_for_section_data($s['content_options']);
    }

    if (isset($s['intro_group'])) {
        $object -> introGroup           = get_intro_group_for_section_data($s['intro_group']);
    }

    if (isset($s['text_group'])) {
        $object -> textGroup            = get_text_group_for_section_data($s['text_group']);
    }

    if (isset($s['content'])) {
        $object -> contentGroup            = get_content_group_for_section_data($s['content']);
    }

    if (isset($s['text'])) {
        $object -> text                 = get_text_for_section_data($s['text']);
    }

    if (isset($s['image'])) {
        $object -> image                = get_image_for_section_data($s['image']);
    }

    if (isset($s['logo_group'])) {
        $object -> logoGroup            = get_logo_group_for_section_data($s['logo_group']);
    }

    if (isset($s['background_image'])) {
        $object -> backgroundGroup      = get_background_group_for_section_data($s['background_image']);
    }

    if (isset($s['top_gradient'])) {
        $object -> topGradientGroup     = get_top_gradient_group_for_section_data($s['top_gradient']);
    }

    if (isset($s['bottom_gradient'])) {
        $object -> bottomGradientGroup  = get_top_gradient_group_for_section_data($s['bottom_gradient']);
    }

    if (isset($s['card_options'])) {
        $object -> cardOptions          = get_card_options_for_section_data($s['card_options']);
    }

    //if ($s['card_button_options']) {
        //$object -> cardNuttonOptions          = get_card_button_options_for_section_data($s['card_button_options']);
    //}

    if (isset($s['cta_group'])) {
        $object -> ctaGroup             = get_cta_group_for_section_data($s['cta_group']);
    }

    if (isset($s['button_options'])) {
        $object -> buttonOptions             = get_button_options_for_section_data($s['button_options']);
    }

    if (isset($s['gallery_group'])) {
        $object -> gallery_group           = get_gallery_group_for_section_data($s['gallery_group']);
    }

    //get_card_options_for_section_dat

    return $object;
}

function get_section_options_for_section_data($options)
{
    $object = new stdClass();

    $object->section_id             = $options['section_id'];
    $object->text_colour            = $options['text_colour'];
    $object->bg_colour              = $options['bg_colour'];
    $object->text_size              = $options['text_size'];
    $object->section_padding_top    = $options['padding_top'];
    $object->section_padding_bottom = $options['padding_bottom'];
    $object->section_height         = $options['height'];
    $object->section_height_desktop = $options['height_desktop'];
    $object->animation_trigger      = $options['animation_trigger'];
    $object->animation_delay        = $options['animation_delay'];
    $object->section_class          = $options['section_class'];

    $object->section_padding_top_mobile     = $options['padding_top_mobile'];
    $object->section_padding_right_mobile   = $options['padding_right_mobile'];
    $object->section_padding_bottom_mobile  = $options['padding_bottom_mobile'];
    $object->section_padding_left_mobile    = $options['padding_left_mobile'];

    $object->section_padding_top_desktop    = $options['padding_top_desktop'];
    $object->section_padding_right_desktop  = $options['padding_right_desktop'];
    $object->section_padding_bottom_desktop = $options['padding_bottom_desktop'];
    $object->section_padding_left_desktop   = $options['padding_left_desktop'];

    return $object;
}

function get_card_options_for_section_data($options)
{

    $object = new stdClass();

    $object -> text_colour              = $options['text_colour']           ?? "";
    $object -> bg_colour                = $options['bg_colour']             ?? "";
    $object -> text_size                = $options['text_size']             ?? "";
    $object -> text_align               = $options['text_align']            ?? "";
    $object -> columns                  = $options['card_columns']          ?? "";
    $object -> image_as_background      = $options['image_as_background']   ?? "";
    $object -> use_overlay              = $options['use_overlay']           ?? "";
    $object -> icon_align               = $options['icon_align']            ?? "";
    $object -> icon_width               = $options['icon_width']            ?? "";
    $object -> link_style               = $options['link_style']            ?? "";
    $object -> link_text                = $options['link_text']             ?? "";
    $object -> animation_trigger        = $options['animation_trigger']     ?? "";

    $container_width                    = $options['container_width']       ?? "";
    $container_position                 = $options['container_position']    ?? "";
    $container_type                     = $options['container_type']        ?? "";
    $container_align                    = $options['container_align']       ?? "";

    $object -> override_container       = $options['override_container']        ?? "";
    $object -> override_card            = $options['override_card']             ?? "";
    $object -> orientation              = $options['orientation']               ?? "";
    $object -> override_image           = $options['override_image']           ?? "";

    $object->container_width            = get_container_width($container_width);
    $object->container_position         = get_container_position($container_position);
    $object->container_type             = get_container_type($container_type);
    $object->container_align            = get_container_align($container_align);



    $value        = $object->columns;
    $columnClass  = "";

    if ($value == "1") {
        $columnClass = "col-md-12";
    } elseif ($value == "2") {
        $columnClass = "col-md-6";
    } elseif ($value == "3") {
        $columnClass = "col-12 col-lg-4";
    } elseif ($value == "4") {
        $columnClass = "col-6 col-md-4 col-lg-3";
    } elseif ($value == "5") {
        $columnClass = "col-sm-6 col-lg-20";
    } elseif ($value == "6") {
        $columnClass = "col-sm-6 col-lg-2";
    }

    $object->column_class = $columnClass;

    if ($object -> override_card) {
        $object->column_class = $object -> override_card;
    }

    if ($object -> override_container) {
        $object->container_width = $object -> override_container;
    }

    if ($object-> bg_colour == "none") {
        $object-> card_padding = "no-card-padding";
    } else {
        $object-> card_padding = "card-padding";
    }



    return $object;
}


function get_container_options_for_section_data($options)
{
    $object = new stdClass();
    echo "container";

    $intro_width                        = isset($options['intro_container_width']);
    $intro_position                     = isset($options['intro_container_position']);
    $container_width                    = isset($options['container_width']);
    $container_position                 = isset($options['container_position']);
    $width                              = isset($options['container_width']);

    $container_type                     = $options['container_type']            ?? "";
    $container_align                    = $options['container_align']           ?? "";
    $object -> override_container       = $options['override_container']        ?? "";

    //$object->container_type             = get_container_type($container_type);
    //$object->container_align            = get_container_align($container_align);


    $position = (isset($options['container_position']) ? $options['container_position'] : false);

    //$position                    = isset($options['container_position']);
    $object-> v_m                       = isset($options['v_mobile']);
    $object-> v_d                       = isset($options['v_desktop']);
    $object->intro_width                = get_container_width($intro_width);
    $object->intro_position             = get_container_position($intro_position);
    $object->container_type             = get_container_type($container_type);
    $object->container_align            = get_container_align($container_align);

    if ($width) {
        $object->container_width = get_container_width($width);
    }

    if ($object -> override_container) {
        $object->container_width = $object -> override_container;
    }

    if ($position) {
        $object->container_position = get_container_position($position);
    }

    $v_mobile = "";

    if ($object-> v_m == "top") {
        $v_mobile = "align-items-start";
    } elseif ($object-> v_m == "middle") {
        $v_mobile = "align-items-center";
    } elseif ($object-> v_m == "bottom") {
        $v_mobile = "align-items-end";
    }

    $object->content_mobile_vertical = $v_mobile;

    $v_desktop = "";

    if ($object-> v_d == "top") {
        $v_desktop = "align-items-lg-start";
    } elseif ($object-> v_d == "middle") {
        $v_desktop = "align-items-lg-center";
    } elseif ($object-> v_d == "bottom") {
        $v_desktop = "align-items-lg-end";
    }

    $object->content_desktop_vertical = $v_desktop;

    return $object;
}

function get_gallery_options_for_section_data($options)
{
    $object = new stdClass();

    $object->pagination             = $options['pagination'];
    $object->navigation             = $options['navigation'];
    $object->caption                = $options['caption'];
    $container_width                = $options['container_width']       ?? "";
    $container_position             = $options['container_position']    ?? "";
    $container_type                 = $options['container_type']        ?? "";

    $object -> override_container   = $options['override_container']    ?? "";
    $object-> image_size             = $options['image_size'];
    $object->container_width        = get_container_width($container_width);
    $object->container_position     = get_container_position($container_position);
    $object->container_type         = get_container_type($container_type);

    if ($object -> override_container) {
        $object->container_width = $object -> override_container;
    }

    return $object;
}

function get_header_options_for_section_data($options)
{
    $object = new stdClass();

    $container_width             = $options['container_width'];
    $container_position          = $options['container_position'];

    $object->container_width         = get_container_width($container_width);
    $object->container_position      = get_container_position($container_position);

    return $object;
}

function get_category_options_for_section_data($options)
{
    $object = new stdClass();

    $object->show_categories      = $options['show_categories'];
    $container_width             = $options['container_width'];
    $container_position          = $options['container_position'];

    $object->container_width         = get_container_width($container_width);
    $object->container_position      = get_container_position($container_position);

    return $object;
}

function get_intro_options_for_section_data($options)
{
    $object = new stdClass();

    $container_width                    = $options['container_width'];
    $container_position                 = $options['container_position'];
    $container_type                     = $options['container_type']            ?? "";
    $object -> override_container       = $options['override_container']        ?? "";

    $object->padding_bottom_mobile      = $options['padding_bottom_mobile'];
    $object->padding_bottom_desktop     = $options['padding_bottom_desktop'];

    $object->container_width            = get_container_width($container_width);
    $object->container_position         = get_container_position($container_position);
    $object->container_type             = get_container_type($container_type);


    if ($object -> override_container) {
        $object->container_width = $object -> override_container;
    }

    return $object;
}

function get_content_options_for_section_data($options)
{
    $object = new stdClass();

    $container_width             = $options['container_width'];
    $container_position          = $options['container_position'];
    $container_type                     = $options['container_type']            ?? "";
    $container_align                    = $options['container_align']           ?? "";
    $object -> override_container       = $options['override_container']        ?? "";

    $object->container_width         = get_container_width($container_width);
    $object->container_position      = get_container_position($container_position);
    $object->container_type             = get_container_type($container_type);
    $object->container_align            = get_container_align($container_align);

    if ($object -> override_container) {
        $object->container_width = $object -> override_container;
    }

    return $object;
}

function get_form_options_for_section_data($options)
{
    $object = new stdClass();

    $container_width             =  (isset($options['container_width']) ? $options['container_width'] : false);
    $container_position          =  (isset($options['container_position']) ? $options['container_position'] : false);

    $object->bg_colour              = $options['bg_colour'];

    $object->container_width = get_container_width($container_width);
    $object->container_position = get_container_position($container_position);


    if ($object-> bg_colour == "none") {
        $object-> form_padding = "no-form-padding";
    } else {
        $object-> form_padding = "form-padding";
    }

    return $object;
}

function get_container_width($value)
{

    $wrapper_class = "";

    if ($value == "12") {
        $wrapper_class = "col-xxl-12";
    } elseif ($value == "11") {
        $wrapper_class = "col-xxl-11";
    } elseif ($value == "10") {
        $wrapper_class = "col-lg-12 col-xl-11 col-xxl-10";
    } elseif ($value == "9") {
        $wrapper_class = "col-lg-11 col-xl-10 col-xxl-9";
    } elseif ($value == "8") {
        $wrapper_class = "col-md-11 col-lg-10 col-xl-9 col-xxl-8";
    } elseif ($value == "7") {
        $wrapper_class = "col-md-10 col-lg-9 col-xl-8 col-xxl-7";
    } elseif ($value == "6") {
        $wrapper_class = "col-md-9 col-lg-8 col-xl-7 col-xxl-6";
    } elseif ($value == "5") {
        $wrapper_class = "col-md-8 col-lg-7 col-xl-6 col-xxl-5";
    } elseif ($value == "4") {
        $wrapper_class = "col-md-7 col-lg-6 col-xl-5 col-xxl-4";
    } elseif ($value == "3") {
        $wrapper_class = "col-md-6 col-lg-5 col-xl-4 col-xxl-3";
    } elseif ($value == "2") {
        $wrapper_class = "col-md-5 col-lg-4 col-xl-3 col-xxl-2";
    } elseif ($value == "1") {
        $wrapper_class = "col-md-4 col-lg-3 col-xl-2 col-xxl-1";
    }
    return $wrapper_class;
}

function get_container_position($value)
{
    $position_class = "";

    if ($value == "left") {
        $position_class = "justify-content-start";
    } elseif ($value == "center") {
        $position_class = "justify-content-center";
    } elseif ($value == "right") {
        $position_class = "justify-content-end";
    }
    return $position_class;
}

function get_container_type($value)
{
    $container_class = "";

    if ($value == "grid") {
        $container_class = "container";
    } elseif ($value == "fluid") {
        $container_class = "container-fluid";
    }
    return $container_class;
}

function get_container_align($value)
{
    $position_class = "";

    if ($value == "start") {
        $position_class = "justify-content-start";
    } elseif ($value == "center") {
        $position_class = "justify-content-center";
    } elseif ($value == "end") {
        $position_class = "justify-content-end";
    } elseif ($value == "between") {
        $position_class = "justify-content-center justify-content-lg-between";
    }
    return $position_class;
}




function get_intro_group_for_section_data($options)
{

    $object = new stdClass();

    if ($options['show_intro'] === "yes") {
        $object->show_intro = $options['show_intro'];
        $object->text = $options['text'];

        $width = $editor = (isset($options['container_width']) ? $options['container_width'] : false);
        $position = $editor = (isset($options['container_position']) ? $options['container_position'] : false);

        if ($width) {
            $object->container_width = get_container_width($options['container_width']) ;
        }

        if ($position) {
            $object->container_position = get_container_position($options['container_position']);
        }
    }

    return $object;
}

function get_text_group_for_section_data($options)
{

    $object = new stdClass();

    $width = $editor = (isset($options['container_width']) ? $options['container_width'] : false);
    $position = $editor = (isset($options['container_position']) ? $options['container_position'] : false);

    if ($width) {
        $object->container_width = get_container_width($options['container_width']) ;
    }

    if ($position) {
        $object->container_position = get_container_position($options['container_position']);
    }
    $editor = (isset($options['editor']) ? $options['editor'] : false);

    if ($editor === "code") {
        $object->text = $options['code'];
    } else {
        $object->text = $options['text'];
    }

    return $object;
}

function get_content_group_for_section_data($options)
{

    $object = new stdClass();

    $width = (isset($options['container_width']) ? $options['container_width'] : false);

    if ($width) {
        $object->container_width = get_container_width($options['container_width']);
    }

    $position = (isset($options['container_position']) ? $options['container_position'] : false);

    if ($position) {
        $object->container_position = get_container_position($options['container_position']);
    }

    return $object;
}

function get_text_for_section_data($options)
{

    $object = new stdClass();

    $object -> text           = $options['text'];
    //$object -> text_position  = $options['text_position'];

    $position = (isset($options['text_position']) ? $options['text_position'] : false);

    if ($position) {
        $object->text_position = $options['text_position'];
    }

    return $object;
}

function get_image_for_section_data($options)
{

    $object = new stdClass();

    $image_type = (isset($options['image_type']) ? $options['image_type'] : false);

    if ($image_type) {
        $object->image_type = $options['image_type'];
    }

    $image_landscape = (isset($options['landscape_image']) ? $options['landscape_image'] : false);

    if ($image_landscape) {
        $object->image_landscape = $options['landscape_image'];
    }

    $image_portrait = (isset($options['portrait_image']) ? $options['portrait_image'] : false);

    if ($image_portrait) {
        $object->image_portrait = $options['portrait_image'];
    }

    $image_fullsize = (isset($options['fullsize_image']) ? $options['fullsize_image'] : false);

    if ($image_fullsize) {
        $object->image_fullsize = $options['fullsize_image'];
    }

    $image = (isset($options['image']) ? $options['image'] : false);

    if ($image) {
        $object->image = $options['image'];
    }

    $background = (isset($options['background']) ? $options['background'] : false);

    if ($background) {
        $object->background = $options['background'];
    }

    //$object -> image_type      = $options['image_type'];
    //$object -> image_landscape = $options['image_landscape'];
    //$object -> image_portrait  = $options['image_portrait'];

    return $object;
}

function get_gallery_group_for_section_data($options)
{

    $object = new stdClass();

    $object -> image_pattern      = $options['image_pattern'];

    return $object;
}

function get_logo_group_for_section_data($options)
{

    $object = new stdClass();

    if ($options['has_logo'] === "yes") {
        $object->has_logo = $options['has_logo'];
        $object-> image = $options['image'];


        $wrapper_width = $options['logo_wrapper_width'];
        $wrapper_position = $options['logo_wrapper_position'];
        $wrapper_class = "";
        $wrapper_position_class = "";

        if ($wrapper_position == "left") {
            $wrapper_position_class = "justify-content-start";
        } elseif ($wrapper_position == "center") {
            $wrapper_position_class = "justify-content-center";
        } elseif ($wrapper_position == "right") {
            $wrapper_position_class = "justify-content-end";
        }

        $object-> wrapper_position = $wrapper_position_class;

        if ($wrapper_width == "12") {
            $wrapper_class = "col-xxl-12";
        } elseif ($wrapper_width == "11") {
            $wrapper_class = "col-xxl-11";
        } elseif ($wrapper_width == "10") {
            $wrapper_class = "col-lg-12 col-xl-11 col-xxl-10";
        } elseif ($wrapper_width == "9") {
            $wrapper_class = "col-lg-11 col-xl-10 col-xxl-9";
        } elseif ($wrapper_width == "8") {
            $wrapper_class = "col-md-11 col-lg-10 col-xl-9 col-xxl-8";
        } elseif ($wrapper_width == "7") {
            $wrapper_class = "col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7";
        } elseif ($wrapper_width == "6") {
            $wrapper_class = "col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6";
        } elseif ($wrapper_width == "5") {
            $wrapper_class = "col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5";
        } elseif ($wrapper_width == "4") {
            $wrapper_class = "col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4";
        } elseif ($wrapper_width == "3") {
            $wrapper_class = "col-8 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3";
        } elseif ($wrapper_width == "2") {
            $wrapper_class = "col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2";
        } elseif ($wrapper_width == "1") {
            $wrapper_class = "col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-1";
        }

        $object-> wrapper_class = $wrapper_class;
    }

    return $object;
}

function get_background_group_for_section_data($options)
{

    $object = new stdClass();

    if ($options['use_background'] === "yes") {
        $object->use_background = $options['use_background'];
        $object->landscape      = $options['landscape'];
        $object->portrait       = $options['portrait'];
        $object->overlay        = $options['use_overlay'];
    }

    return $object;
}

function get_top_gradient_group_for_section_data($options)
{
    $object = new stdClass();

    $object->use_gradient = $options['use_gradient'];
    $object->height       = $options['height'];
    $object->start_colour = $options['start_colour'];
    $object->start        = $options['start'];
    $object->end_colour   = $options['end_colour'];
    $object->end          = $options['end'];


    return $object;
}

function get_bottom_gradient_group_for_section_data($options)
{
    $object = new stdClass();

    $object->use_gradient = $options['use_gradient'];
    $object->height       = $options['height'];
    $object->start_colour = $options['start_colour'];
    $object->start        = $options['start'];
    $object->end_colour   = $options['end_colour'];
    $object->end          = $options['end'];

    return $object;
}

function get_cta_group_for_section_data($options)
{
    $object = new stdClass();

    $object->cta         = $options['cta'];
    $object->position    = $options['position'];
    $object->type        = $options['type'];
    $object->button_type = $options['button_type'];
    $object->css_class   = $options['css_class'];
    $object->cta_text    = $options['cta_text'];
    $object->internal    = $options['internal'];
    $object->external    = $options['external'];
    $object->anchor      = $options['anchor'];

    return $object;
}

function get_card_button_options_for_section_data($options)
{
    $object = new stdClass();

    $object->link_style             = $options['link_style'];
    $object->link_text              = $options['link_text'];

    return $object;
}

function get_button_options_for_section_data($options)
{
    $object = new stdClass();

    $object->link_style             = $options['link_style'];
    $object->button_text            = $options['button_text'];
    $object->link_text              = $options['link_text'];
    $object->pagination_text_colour = $options['pagination_text_colour'];
    $object->pagination_text_size   = $options['pagination_text_size'];
    $object->previous_link          = $options['previous_link'];
    $object->next_link              = $options['next_link'];

    return $object;
}
/*
function sectionOptions() {
    echo "bg-colour-" . $sectionData -> sectionOptions->bg_colour .


           p-t-mobile-<?php echo $sectionData -> sectionOptions->section_padding_top_mobile;?>
           p-r-mobile-<?php echo $sectionData -> sectionOptions->section_padding_right_mobile;?>
           p-b-mobile-<?php echo $sectionData -> sectionOptions->section_padding_bottom_mobile;?>
           p-l-mobile-<?php echo $sectionData -> sectionOptions->section_padding_left_mobile;?>

           p-t-desktop-<?php echo $sectionData -> sectionOptions->section_padding_top_desktop;?>
           p-r-desktop-<?php echo $sectionData -> sectionOptions->section_padding_right_desktop;?>
           p-b-desktop-<?php echo $sectionData -> sectionOptions->section_padding_bottom_desktop;?>
           p-l-desktop-<?php echo $sectionData -> sectionOptions->section_padding_left_desktop;?>

           h-<?php echo $sectionData->sectionOptions->section_height;?>
           h-<?php echo $sectionData->sectionOptions->section_height;?>-desktop

         <?php echo $sectionData -> sectionOptions->text_size;?>
         <?php echo $sectionData -> sectionOptions->section_class;?>" >
}*/
