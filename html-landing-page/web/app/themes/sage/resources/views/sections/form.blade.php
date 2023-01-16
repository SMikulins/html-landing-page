<section class="py-12 md:py-16 xl:py-28"
style="background-image: linear-gradient(-45deg,{{ $form['color_1'] }}, {{ $form['color_2'] }});">

  <div class="container px-4">
    <div class="flex justify-center">
      <div class="sm:max-w-[356px] sm:w-full p-6 bg-white rounded-lg border-t-[1rem] border-hollywood-cerise shadow-wonderful">
        @if(!empty($form['title']))
          <h2 class="font-bold text-5xl lg:text-6xl">{{ $form['title'] }}</h2>
        @endif
        <form class="mt-6" action="">
          <div>
            <label class="text-xs text-hollywood-cerise font-bold uppercase" for="name">Name</label>
            <input class="block w-full border border-alto rounded pl-3 py-2 outline-none ring-0 ring-transparent hover:ring-4 hover:ring-hollywood-cerise/10 hover:border-alto-dark active:ring-0 focus:ring-4 focus:ring-hollywood-cerise/[0.15] focus:border-hollywood-cerise transition" type="text" id="name" name="name">
          </div>

          <div class="mt-3">
            <label class="text-xs text-hollywood-cerise font-bold uppercase" for="email">Email</label><br>
            <input class="block w-full border border-alto rounded pl-3 py-2 outline-none ring-0 ring-transparent hover:ring-4 hover:ring-hollywood-cerise/10 hover:border-alto-dark active:ring-0 focus:ring-4 focus:ring-hollywood-cerise/[0.15] focus:border-hollywood-cerise transition" type="email" id="email" name="email">
          </div>

          <input class="cursor-pointer
              block w-full text-white font-bold rounded bg-hollywood-cerise py-2.5 px-8 mt-10 lg:mt-6
              hover:text-white hover:bg-hollywood-cerise-dark transition
              outline-none focus:bg-hollywood-cerise-dark"
            type="submit" value="Submit">

          @if(!empty($form['blurb']))
            <p class="text-xs mt-4">{{ $form['blurb'] }}</p>
          @endif
        </form>
      </div>
    </div>
  </div>
</section>
