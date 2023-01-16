<section class="relative flex flex-col bg-porcelain pt-12 md:pt-[4.5rem]">
  @if(!empty($banner['background_image']))
    <img
      class="hidden md:block absolute inset-0 object-cover object-bottom h-full w-full"
      src="{{ $banner['background_image']['url'] }}"
      srcset="{{ wp_get_attachment_image_srcset($banner['background_image']['id']) }}"
      sizes="(min-width: 1124px) 2048px, (min-width: 992px) 1280px, (min-width: 768px) 1024px"
      alt="">
  @endif

  <div class="relative py-12 md:py-16 xl:py-28">
    <div class="container px-4">
      <div class="text-center @if(!empty($banner['background_image'])) md:text-left md:offset-7 md:col-5 lg:offset-7 lg:col-5 @else max-w-md mx-auto @endif">
        @if(!empty($banner['title']))
          <h1 class="text-5xl font-bold lg:text-6xl">{{ $banner['title'] }}</h1>
        @else
          <h1 class="text-5xl font-bold lg:text-6xl">Your title</h1>
        @endif
        @if(!empty($banner['content']))
          <div class="space-y-5 mt-7">
            {!! $banner['content'] !!}
          </div>
        @endif
        @if(!empty($banner['button_url']))
        <a class="inline-block text-hollywood-cerise font-bold border-2 border-hollywood-cerise rounded-full py-2.5 px-8 mt-10 lg:mt-14
            hover:text-white hover:bg-hollywood-cerise transition
            outline-none focus:bg-hollywood-cerise focus:text-white active:border-hollywood-cerise-dark active:bg-hollywood-cerise-dark" href="{{ $banner['button_url'] }}">Call to Action</a>
        @endif
      </div>
    </div>
  </div>
</section>
