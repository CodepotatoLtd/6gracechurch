@if(have_rows('header'))
    {{-- loop through the rows of data --}}
    @while (have_rows('header')) @php(the_row())


    @if(get_row_layout() == 'header_gy_home')

      <?php  $sectionFieldData = get_sub_field('section'); ?>

      @include('components.headers.header-gy-home')

    @endif


    @if(get_row_layout() == 'header_image')

      <?php  $sectionFieldData = get_sub_field('section'); ?>

      @include('components.headers.header-image')

    @endif

    @if(get_row_layout() == 'header_static')

      <?php  $sectionFieldData = get_sub_field('section'); ?>

      @include('components.headers.header-image-text')

    @endif


   @endwhile
@else
   {{-- no layouts found --}}
@endif
