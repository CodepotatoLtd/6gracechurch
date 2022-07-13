<?php

add_action('after_setup_theme', function () {
    if (function_exists('get_field')) {
        $acf_image_sizes = get_field("image_sizes", "options");

        if ($acf_image_sizes) {
            add_image_size('acf-card-image', $acf_image_sizes['card_image_w'], $acf_image_sizes['card_image_h'], true);
            add_image_size('acf-logo-image', $acf_image_sizes['logo_image_w'], $acf_image_sizes['logo_image_h'], true);
            add_image_size('acf-text-image-landscape', $acf_image_sizes['text_image_w'], $acf_image_sizes['text_image_h'], true);
            add_image_size('acf-text-image-portrait', $acf_image_sizes['text_image_w_portrait'], $acf_image_sizes['text_image_h_portrait'], true);
            add_image_size('acf-large-image', $acf_image_sizes['large_header_image_w'], $acf_image_sizes['large_header_image_h'], true);
            add_image_size('acf-icon-image', $acf_image_sizes['icon_image_w'], $acf_image_sizes['icon_image_h'], true);
            add_image_size('acf-profile-image', $acf_image_sizes['team_profile_image_w'], $acf_image_sizes['team_profile_image_h'], true);
            add_image_size('acf-gallery-image', $acf_image_sizes['gallery_w'], $acf_image_sizes['gallery_h'], true);
            add_image_size('acf-floor-gallery-image', $acf_image_sizes['floor_gallery_w'], $acf_image_sizes['floor_gallery_h'], true);
            add_image_size('acf-gallery-text-image', $acf_image_sizes['gallery_text_w'], $acf_image_sizes['gallery_text_h'], true);
            add_image_size('acf-split-header-image', $acf_image_sizes['split_h_w'], $acf_image_sizes['split_h_h'], true);
        }


    }
}, 20);
