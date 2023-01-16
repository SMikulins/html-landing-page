@extends('layouts.app')

@section('content')
  @while(have_posts())
    @php(the_post())

    @include('sections.header')

    @include('sections.banner', ['banner' => $banner ])

    @include('sections.img-and-content', ['image_and_content' => $image_and_content ])

    @include('sections.stats', ['stats' => $stats ])

    @include('sections.form', ['form' => $form])

  @endwhile
@endsection
