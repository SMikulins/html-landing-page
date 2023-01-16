<section id="counters" class="py-12 md:py-16 bg-alabaster">
  <div class="container px-4">
    <div class="row">
      @if(!empty($stats['stat']) > 0)
        <div class="
        @if( $stats['stats_length'] == 3)
        xl:col-10 xl:offset-1
        @elseif( $stats['stats_length'] == 2)
        md:col-8 md:offset-2 lg:col-6 lg:offset-3
        @elseif ( $stats['stats_length'] == 1)
        md:col-4 md:offset-4
        @endif">
          <div class="flex max-md:flex-col max-md:items-center max-md:space-y-10 justify-between">
            @foreach( $stats['stat'] as $index => $stat )
              <div class="text-center w-full max-w-[16rem] md:max-w-[11rem] @if($stats['stats_length'] == 1) mx-auto @endif">
                @if(!empty($stat['number']))
                  <p id="counter-{{ $index + 1 }}" class="stat-number text-hollywood-cerise text-7xl font-thin font-roboto-slab lg:text-8xl">{{ $stat['number'] }}</p>
                @else
                  <p class="text-hollywood-cerise text-7xl font-thin font-roboto-slab lg:text-8xl">0</p>
                @endif
                <div class="mt-4">
                  @if(!empty($stat['title']))
                    <p><b>{{ $stat['title'] }}</b></p>
                  @endif
                  @if(!empty($stat['content']))
                    <p>{{ $stat['content'] }}</p>
                  @endif
                </div>
              </div>
            @endforeach
          </div>
        </div>
      @else
        <div class="flex justify-center items-center text-2xl h-full font-bold px-4 py-6 sm:text-3xl md:py-5">No Content</div>
      @endif

    </div>
  </div>

</section>

