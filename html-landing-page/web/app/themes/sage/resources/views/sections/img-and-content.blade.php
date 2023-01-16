<section class="py-12 md:py-16 xl:py-28">
  <div class="container px-4">
    <div class="row space-y-10 md:space-y-0">
      <div class="md:col-5 xl:col-4 xl:offset-1">
        @if(!empty($image_and_content['image']))
        <img
          class="w-full"
          src="{{ $image_and_content['image']['url'] }}"
          srcset="{{ wp_get_attachment_image_srcset($image_and_content['image']['id']) }}"
          sizes="(min-width: 768px) 510px, (min-width: 576px) 797px, 510px"
          alt="">
          @else
          <div class="flex justify-center items-center text-2xl h-full bg-porcelain font-bold px-4 py-20 sm:text-3xl md:py-5">No Image</div>
        @endif
      </div>
      <div class="md:col-7 xl:col-6">
        <div class="md:pl-6 lg:pl-10">
          @if(!empty($image_and_content['title']))
            <h1 class="md:relative md:-top-10 md:left-[-4.7rem] text-5xl font-bold max-w-xs lg:text-6xl">{{ $image_and_content['title'] }}</h1>
          @else
            <h2 class="md:relative md:-top-10 md:left-[-4.7rem] text-5xl font-bold max-w-xs lg:text-6xl">Your title</h2>
          @endif

          @if(!empty($image_and_content['content']))
            <div class="space-y-5 mt-7 md:mt-3">
              {!! $image_and_content['content'] !!}
            </div>
          @endif

          @if(!empty($image_and_content['button_url']))
            <a class="inline-flex items-center text-hollywood-cerise font-bold mt-10 space-x-2 group focus:text-hollywood-cerise active:text-hollywood-cerise-dark transition
                outline-none" href="{{ $image_and_content['button_url'] }}"> <span>Let's go</span>
              <svg class="fill-current transform group-hover:translate-x-1 group-focus:translate-x-1 transition" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path d="M6.8,38.722l.793-.813a.838.838,0,0,1,1.211,0l6.942,7.119a.892.892,0,0,1,0,1.242L8.806,53.392a.838.838,0,0,1-1.211,0L6.8,52.578a.9.9,0,0,1,.014-1.257l4.3-4.206H.857A.866.866,0,0,1,0,46.236V45.064a.866.866,0,0,1,.857-.879H11.12l-4.3-4.206A.89.89,0,0,1,6.8,38.722Z" transform="translate(0 -37.65)"/>
              </svg>
            </a>
          @endif
        </div>
      </div>
    </div>
  </div>
</section>
