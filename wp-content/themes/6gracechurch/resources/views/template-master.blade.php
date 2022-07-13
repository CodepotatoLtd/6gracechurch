{{--
  Template Name: Master Template
--}}

@extends('layouts.full-width')
@section('content')
  @while(have_posts()) @php(the_post())

    @include('partials.flexible-header')

  <div id="main"></div>

    @include('partials.flexible-content')


  @endwhile
@endsection

