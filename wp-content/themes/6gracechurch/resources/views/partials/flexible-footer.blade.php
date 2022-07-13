@if(have_rows('footer', 'options'))
    {{-- loop through the rows of data --}}
    @while (have_rows('footer', 'options')) @php(the_row())


    @if(get_row_layout() == 'section_icon_content')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-col-content-icon-cards')

    @endif



      @if(get_row_layout() == 'section_intro_text')

        <?php $sectionFieldData = get_sub_field('section'); ?>

        @include('components.sections.section-intro-text')

      @endif

    @if(get_row_layout() == 'section_body_text')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-body-text')

    @endif

    @if(get_row_layout() == 'section_image_text')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-text-image')

    @endif

    @if(get_row_layout() == 'section_image_text_50_50')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-text-image-50-50')

    @endif

    @if(get_row_layout() == 'section_gallery')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-gallery-coverflow')

    @endif

    @if(get_row_layout() == 'section_gallery_carousel')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-gallery-carousel')

    @endif

    @if(get_row_layout() == 'section_svg_map')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-svg-map')

    @endif

    @if(get_row_layout() == 'section_cta_banner')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-cta-banner')

    @endif

    @if(get_row_layout() == 'section_floor_selector')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-floor-selector')

    @endif

    @if(get_row_layout() == 'section_floor_gallery')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-floor-gallery')

    @endif

    @if(get_row_layout() == 'section_code')

      <?php $sectionFieldData = get_sub_field('section'); ?>

      @include('components.sections.section-code')

    @endif



    {{-- @if(get_row_layout() == 'section_body_text')

    <?php $sectionFieldData = get_sub_field('section'); ?>

    @include('components.sections.section-body-text')

  @endif

@if(get_row_layout() == 'section_body_text_with_sidebar')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-body-text-with-sidebar')

@endif


  @if(get_row_layout() == 'section_col_content')

    <?php $sectionFieldData = get_sub_field('section'); ?>

    @include('components.sections.section-col-content-image-cards')

  @endif

  @if(get_row_layout() == 'section_icon_content')

    <?php $sectionFieldData = get_sub_field('section'); ?>

    @include('components.sections.section-col-content-icon-cards')

  @endif

@if(get_row_layout() == 'section_col_text')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-col-text-content')

@endif

@if(get_row_layout() == 'section_col_related_content')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-pages-image-cards')

@endif

@if(get_row_layout() == 'section_icon_related_content')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-pages-icon-cards')

@endif

@if(get_row_layout() == 'section_split_image_icon_content')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-col-content-split-image-icon-cards')

@endif

@if(get_row_layout() == 'section_2x_image_text')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-2x-image-text')

@endif

  @if(get_row_layout() == 'section_image_text')

    <?php $sectionFieldData = get_sub_field('section'); ?>

    @include('components.sections.section-text-image')

  @endif

@if(get_row_layout() == 'section_fullscreen_image_text')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-fullscreen-text-image-bg')

@endif

@if(get_row_layout() == 'section_gallery_text')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-text-gallery')

@endif

@if(get_row_layout() == 'section_form_text')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-form-text')

@endif

@if(get_row_layout() == 'section_form')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-form')

@endif


  @if(get_row_layout() == 'section_cta_banner')

    <?php $sectionFieldData = get_sub_field('section'); ?>

    @include('components.sections.section-cta-banner')

  @endif

@if(get_row_layout() == 'section_faq')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-faq')

@endif

@if(get_row_layout() == 'section_gallery')

  <?php $sectionFieldData = get_sub_field('section'); ?>


  @include('components.sections.section-gallery')

@endif

@if(get_row_layout() == 'section_fs_gallery')


  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-gallery-fs')

@endif

@if(get_row_layout() == 'section_gallery_with_text')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-gallery-with-text')

@endif

@if(get_row_layout() == 'section_testimonials_carousel')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-testimonial-carousel')

@endif

@if(get_row_layout() == 'section_floor_selector')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-floor-selector')

@endif


@if(get_row_layout() == 'section_team')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-team')

@endif

@if(get_row_layout() == 'section_fullscreen_map')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-fullscreen-map')

@endif

@if(get_row_layout() == 'section_facts')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-facts')

@endif

@if(get_row_layout() == 'section_breadcrumbs')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-breadcrumbs')

@endif

@if(get_row_layout() == 'section_single_image')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-single-image')

@endif

@if(get_row_layout() == 'section_double_image')

  <?php $sectionFieldData = get_sub_field('section'); ?>

  @include('components.sections.section-double-image')

@endif


{{--  @if(get_row_layout() == 'fs_text_&_bg_image')

@include('components.section-fs-text-bg-image')

@endif --}}

    {{-- @if(get_row_layout() == 'section_image')


      @include('components.section-image')

    @endif--}}

    {{--@if(get_row_layout() == 'section_plan_title')

      @include('components.section-plan-title')

    @endif

    @if(get_row_layout() == 'section_plan')

      @include('components.section-plan')

    @endif--}}



   @endwhile
@else
   {{-- no layouts found --}}
@endif
