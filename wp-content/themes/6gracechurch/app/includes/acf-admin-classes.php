<?php

function my_acf_admin_head()
{
    ?>



    <style type="text/css">

        .acf-repeater .acf-row:nth-of-type(odd) .acf-row-handle.order {
            background: #e6e6e6 ;
        }

        .acf-repeater .acf-repeater .acf-table .acf-row:nth-of-type(odd) .acf-row-handle.order {
            background: #e6e6e6 ;
        }

        .acf-repeater .acf-repeater .acf-table .acf-row:nth-of-type(even) .acf-row-handle.order {
            background: #f4f4f4 ;
        }

        .acf-fields > .acf-field {
            margin: 0;
            padding: 15px 15px;
            border-top: #EEEEEE solid 1px;
            position: relative;

        }
        .acf-input {

        .select2-container {

            z-index:5000;


        }
        }
        .layout {
            margin: 10px 0 0;
            border: 5px solid #666 !important;
        }
        .layout .acf-fc-layout-controlls {
            position: absolute;
            top: 20px!important;
            right: 15px!important;
        }
        .layout .acf-fc-layout-handle {

            padding: 20px 20px!important;

        }

        .layout .acf-field-repeater{
            border:none;

        }

        .acf-radio-list li, ul.acf-checkbox-list li {
            font-size: 10px!important;

        }
        .acf-20-left {

            width: 20%;
            float: left !important;
            clear:both;
            border-left:0px solid!important;



        }
        .acf-80-right {

            width: 78%;
            float: right !important;
            clear:none !important;



        }
        .acf-50-clear-left {
            width: 50%;
            float: left !important;
            clear:both !important;

        }
        .acf-50-left {

            width: 50%;
            float: left !important;
            clear:none !important;



        }
        .acf-50-right {

            width: 50%;
            float: right !important;
            clear:none !important;
            min-height:0 !important;



        }
        .acf-30-left {

            width: 30%;
            float: left !important;
            clear:both;



        }

        .acf-70-right {

            width: 70%;
            float: right !important;
            clear:none !important;



        }
        .acf-70-left {

            width: 70%;
            float: left !important;
            border-top: none !important;
            clear:none !important;
            height: auto !important;


        }
        .acf-20-left {

            width: 20%;
            float: left !important;
            clear:both;

        }
        .acf-80-right {

            width: 80%;
            float: right !important;
            clear:none !important;



        }
        .acf-30-right {

            width: 30%;
            float: right !important;

            clear:none !important;
            min-height:0 !important;
            border-left:0px !important;
            border-top:0px !important;
        }
        .acf-80-left {

            width: 80%;
            float: left !important;
            border-top: none !important;
            clear:none !important;


        }
        .acf-20-right {

            width: 20%;
            float: right !important;

            clear:none !important;
            min-height:0 !important;
            border-left:0px !important;
            border-top:0px !important;
        }
        .acf-clear {

            clear:both !important;
        }
        .acf-clear-none {

            clear:none !important;
        }
        .acf-cta-text {
            background:#F1F1F1;

        }
        .acf-cta {
            background:#F1F1F1;
            height:110px;
        }
        .small-label {
            font-size:12px!important;
            padding: 10px 15px 12px 15px!important;
            color:#999;
            font-weight:normal!important;
        }
        .small-label .acf-label {
            margin: 0 0 2px!important;
        }

        .no-label .acf-label {
            display: none;
        }

        .no-label .acf-input {

            /*padding-top:10px;*/
        }

        .small-label .description {
            font-size:12px!important;
            padding: 5px 15px 5px 0px !important;
            color:#999;
            font-weight:normal!important;
        }

        .acf-field-group.acf-group-style {
            padding: 0!important;
        }

        .acf-field-group.acf-group-style .acf-fields.-border {
            border: 0!important;
        }

        .acf-field-group.acf-group-style > .acf-label:first-child {
            margin: 0;
        }

        .acf-field-group.acf-group-style > .acf-label:first-child label {
            font-size:12px!important;
            padding: 10px 15px 5px 15px !important;
            color:#999;
            font-weight:normal!important;
        }



        .acf-field .acf-label label {
            display: block;
            font-weight: normal!important;
            margin: 0 0 5px;
            padding: 0;
        }
        .acf-field-message .acf-input p{font-size:10px!important; color:#999; font-weight:normal!important; }

        .acf-link-40-left {

            width: 40%;
            float: left !important;
            border-top: none !important;
            clear:none !important;


        }

        .acf-image {
            height: auto!important;
            min-height: auto!important;
        }

        .acf-field-group.acf-group-style-no-label:first-child .acf-label label {
            display:none!important;
        }

        .acf-field-group.acf-group-style-no-label {
            padding: 0!important;
            border-bottom: 1px solid #eeeeee;
        }

        .acf-field-group.acf-group-style-no-label .acf-fields.-border {
            border: 0!important;
        }

        .acf-field-group.acf-group-style-no-label > .acf-label:first-of-type {
            display:none!important;
        }

        .acf-field-group.acf-group-style-no-label > .acf-label:first-child label {
            font-size:12px!important;
            padding: 10px 15px 5px 15px !important;
            color:#999;
            font-weight:normal!important;
        }

        .acf-field-group.acf-group-style-no-label:first-child .acf-label label {
            display:none!important;
        }

        .acf-field-group.acf-group-style-no-label .acf-input .acf-label label {
            display:block!important;
        }

        /*.section-group-style-no-label .acf-label:first-child label{
            display:none!important;
        }

        .section-group-style-no-label > .acf-label:first-child label{
            display:none!important;
        }

        .section-group-style-no-label .acf-input .acf-label label{
            display:block!important;
        }*/

        .acf-field-group.accordion-group-style-no-label {
            padding: 0!important;
            border-bottom: 0px solid #eeeeee;
        }

        .acf-field-group.accordion-group-style-no-label .acf-fields.-border {
            border: 0!important;
        }

        .acf-field-group.accordion-group-style-no-label > .acf-label:first-of-type {
            display:none!important;
        }

        .acf-field-group.accordion-group-style-no-label > .acf-label:first-child label {
            font-size:12px!important;
            padding: 10px 15px 5px 15px !important;
            color:#999;
            font-weight:normal!important;
        }

        .acf-field-group.acf-group-style-no-label:first-child .small-label .acf-label label {
            display: block!important;
        }


        #edittag {
            max-width: 100%;
        }

        .acf-color-swatch {
            margin-right: 10px;
            width: 70px;
            display: inline-block;
        }

        .acf-color-swatch:before {
            color: #FFF;
            content: "";
            width: 20px;
            height: 20px;
            display: inline-block;
            position: relative;
            top: 6px;
            margin-left: 5px;
            margin-right: 10px;
            border: 1px solid #ddd;
        }

        <?php $options = get_fields("options"); ?>

        .acf-bg-white:before {
            background-color: <?php echo $options["bg_white"];?>;
        }

        .acf-bg-black:before {
            background-color: <?php echo $options["bg_black"];?>;
        }

        .acf-bg-light:before {
            background-color: <?php echo $options["bg_light"];?>;
        }

        .acf-bg-dark:before {
            background-color: <?php echo $options["bg_dark"];?>;
        }

        .acf-bg-primary:before {
            background-color: <?php echo $options["bg_primary"];?>;
        }

        .acf-bg-primary-alt:before {
            background-color: <?php echo $options["bg_primary-alt"];?>;
        }

        .acf-bg-secondary:before {
            background-color: <?php echo $options["bg_secondary"];?>;
        }

        .acf-bg-secondary-alt:before {
            background-color: <?php echo $options["bg_secondary-alt"];?>;
        }

        .acf-text-white:before {
            background-color: <?php echo $options["text_white"];?>;
        }

        .acf-text-black:before {
            background-color: <?php echo $options["text_black"];?>;
        }

        .acf-text-light:before {
            background-color: <?php echo $options["text_light"];?>;
        }

        .acf-text-dark:before {
            background-color: <?php echo $options["text_dark"];?>;
        }



        [class^="icon-"] {
            font-size: 18px;
            position: relative;
            top: 4px
        }


        /* .bg-colour-white {
             background-color: var(--background-color-white);
         }

         .bg-colour-black {
             background-color: var(--background-color-black);
         }

         .bg-colour-light {
             background-color: var(--background-color-light);
         }

         .bg-colour-dark {
             background-color: var(--background-color-dark);
         }

         .bg-colour-primary {
             background-color: var(--background-color-primary);
         }

         .bg-colour-primary-alt {
             background-color: var(--background-color-primary-alt);
         }

         .bg-colour-secondary {
             background-color: var(--background-color-secondary);
         }

         .bg-colour-secondary-alt {
             background-color: var(--background-color-secondary-alt);
         }

         .text-black h1,
         .text-black h2,
         .text-black h3,
         .text-black h4,
         .text-black h5 {
             color: var(--text-color-black-headings) !important;
         }

         .text-black p,
         .text-black ol,
         .text-black ul,
         .text-black blockquote {
             color: var(--text-color-black-copy);
         }

         .text-black a {
             color: var(--text-color-black-links);
         }

         .text-black a:hover {
             color: var(--text-color-black-links-hover);
         }

         .text-black .text-seperator .seperator-inner:before {
             background: var(--text-color-black-copy);
         }

         .text-white h1,
         .text-white h2,
         .text-white h3,
         .text-white h4,
         .text-white h5 {
             color: var(--text-color-white-headings) !important;
         }

         .text-white p,
         .text-white ol,
         .text-white ul,
         .text-white blockquote {
             color: var(--text-color-white-copy);
         }

         .text-white a {
             color: var(--text-color-white-links);
         }

         .text-white a:hover {
             color: var(--text-color-white-links-hover);
         }

         .text-white .text-seperator .seperator-inner:before {
             background: var(--text-color-white-copy);
         }

         .text-dark h1,
         .text-dark h2,
         .text-dark h3,
         .text-dark h4,
         .text-dark h5 {
             color: var(--text-color-dark-headings) !important;
         }

         .text-dark p,
         .text-dark ol,
         .text-dark ul,
         .text-dark blockquote {
             color: var(--text-color-dark-copy);
         }

         .text-dark a {
             color: var(--text-color-dark-links);
         }

         .text-dark a:hover {
             color: var(--text-color-dark-links-hover);
         }

         .text-dark .text-seperator .seperator-inner:before {
             background: var(--text-color-dark-copy);
         }

         .text-light h1,
         .text-light h2,
         .text-light h3,
         .text-light h4,
         .text-light h5 {
             color: var(--text-color-light-headings) !important;
         }

         .text-light p,
         .text-light ol,
         .text-light ul,
         .text-light blockquote {
             color: var(--text-color-light-copy);
         }

         .text-light a {
             color: var(--text-color-light-links);
         }

         .text-light a:hover {
             color: var(--text-color-light-links-hover);
         }

         .text-light .text-seperator .seperator-inner:before {
             background: var(--text-color-light-copy);
         }


         .wp-block h1,
         .wp-block h2,
         .wp-block h3,
         .wp-block h4,
         .wp-block h5,
         .wp-block h6 {
             font-family: var(--font-headings);
         }

         .wp-block p,
         .wp-block ol,
         .wp-block ul {
             font-family: var(--font-copy);
         }

         .wp-block blockquote p {
             font-family: var(--font-quotes);
         }

         .wp-block blockquote cite {
             font-family: var(--font-cite);
         }*/



        .acf-field.acf-accordion .acf-label.acf-accordion-title {
            padding: 12px 12px 8px 12px;
            width: auto;
            float: none;
            width: auto;
            background: #f3f4f5;
        }

        .acf-accordion .acf-label.acf-accordion-title:hover {
            background: #f1f1f1;
        }

        /* ACF "half-repeater" class, display repeaters in horizontal columns */
        .half-repeater .acf-repeater tr.acf-row:not(.acf-clone)
        {
            display: inline-block !important;
            width: 50% !important;
        }

        .half-repeater .acf-repeater tr.acf-row:not(.acf-clone) td.acf-fields
        {
            width: 100%;
        }


    </style>

    <?php
}

add_action('acf/input/admin_head', 'my_acf_admin_head');
