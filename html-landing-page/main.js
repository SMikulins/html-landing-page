import './resources/styles/app.css'
import javascriptLogo from './javascript.svg'
import macbook from './resources/images/macbook.jpg'
import chameleon from './resources/images/chameleon.jpg'
import wonderfulLogo from './resources/svgs/wonderful-logo.svg'
import { setupCounter } from './counter.js'
import { userScroll } from './resources/scripts/userScroll.js'


document.querySelector( '#app' ).innerHTML = `
  <div class="selection:bg-illusion selection:text-black">
    <header class="fixed top-0 inset-x-0 z-40 py-6 md:py-12 sticky-header-group:py-4 sm:sticky-header-group:py-5 sticky-header-group:bg-white transition-[padding,background-color,box-shadow] duration-500 sticky-header-group:shadow-lg">
      <div class="container px-4">
        <div class="flex justify-between">
          <div class="flex items-center space-x-2">
            <img class="h-4 w-auto" src="${wonderfulLogo}" alt="">
            <div class="text-base text-black font-bold md:text-white md:sticky-header-group:text-black transition-colors duration-500"><span class="hidden sm:inline">Hello</span> Wonderful.</div>
          </div>
          <div class="flex space-x-4">
            <a class="group outline-none" href="#">
              <svg class="fill-current h-6 w-auto text-black hover:text-hollywood-cerise transition-colors group-active:text-hollywood-cerise-dark group-focus:text-hollywood-cerise" xmlns="http://www.w3.org/2000/svg" width="24.615" height="24" viewBox="0 0 24.615 24"><path d="M8.233,27.325c0,.1-.114.179-.258.179-.164.015-.278-.065-.278-.179s.114-.179.258-.179S8.233,27.211,8.233,27.325ZM6.69,27.1c-.035.1.065.213.213.243a.233.233,0,0,0,.308-.1c.03-.1-.065-.213-.213-.258a.255.255,0,0,0-.308.114Zm2.194-.084c-.144.035-.243.129-.228.243s.144.164.293.129.243-.129.228-.228S9.027,27,8.883,27.017ZM12.149,8A11.9,11.9,0,0,0,0,20.109,12.442,12.442,0,0,0,8.412,31.98c.635.114.859-.278.859-.6s-.015-2-.015-3.047c0,0-3.474.744-4.2-1.479,0,0-.566-1.444-1.38-1.816,0,0-1.136-.779.079-.764a2.62,2.62,0,0,1,1.916,1.28A2.623,2.623,0,0,0,9.285,26.59a2.758,2.758,0,0,1,.794-1.672c-2.774-.308-5.573-.71-5.573-5.484a3.761,3.761,0,0,1,1.171-2.923,4.689,4.689,0,0,1,.129-3.37c1.037-.323,3.424,1.34,3.424,1.34a11.724,11.724,0,0,1,6.233,0s2.387-1.667,3.424-1.34a4.687,4.687,0,0,1,.129,3.37,3.858,3.858,0,0,1,1.28,2.923c0,4.789-2.923,5.171-5.7,5.484a2.935,2.935,0,0,1,.844,2.3c0,1.672-.015,3.742-.015,4.149,0,.323.228.715.859.6a12.327,12.327,0,0,0,8.327-11.861A12.168,12.168,0,0,0,12.149,8ZM4.824,25.116c-.065.05-.05.164.035.258s.194.114.258.05.05-.164-.035-.258S4.888,25.052,4.824,25.116Zm-.536-.4c-.035.065.015.144.114.194a.148.148,0,0,0,.213-.035c.035-.065-.015-.144-.114-.194C4.4,24.65,4.323,24.665,4.288,24.714ZM5.9,26.481c-.079.065-.05.213.065.308.114.114.258.129.323.05s.035-.213-.065-.308C6.109,26.417,5.96,26.4,5.9,26.481Zm-.566-.73c-.079.05-.079.179,0,.293s.213.164.278.114a.226.226,0,0,0,0-.308c-.069-.114-.2-.164-.278-.1Z" transform="translate(0 -8)"/></svg>
            </a>
            <a class="group outline-none" href="#">
              <svg class="fill-current h-6 w-auto text-black hover:text-hollywood-cerise transition-colors group-active:text-hollywood-cerise-dark group-focus:text-hollywood-cerise" xmlns="http://www.w3.org/2000/svg" width="29.55" height="24" viewBox="0 0 29.55 24"><path d="M26.513,54.063c.019.262.019.525.019.788,0,8.006-6.094,17.231-17.231,17.231A17.114,17.114,0,0,1,0,69.363a12.529,12.529,0,0,0,1.462.075,12.129,12.129,0,0,0,7.519-2.587,6.067,6.067,0,0,1-5.663-4.2,7.638,7.638,0,0,0,1.144.094,6.405,6.405,0,0,0,1.594-.206A6.057,6.057,0,0,1,1.2,56.595V56.52a6.1,6.1,0,0,0,2.737.769,6.065,6.065,0,0,1-1.875-8.1A17.215,17.215,0,0,0,14.55,55.526a6.837,6.837,0,0,1-.15-1.387,6.062,6.062,0,0,1,10.481-4.144,11.923,11.923,0,0,0,3.844-1.462,6.04,6.04,0,0,1-2.663,3.337,12.141,12.141,0,0,0,3.487-.937A13.019,13.019,0,0,1,26.513,54.063Z" transform="translate(0 -48.082)"/></svg>
            </a>
            <a class="group outline-none" href="#">
              <svg class="fill-current h-6 w-auto text-black hover:text-hollywood-cerise transition-colors group-active:text-hollywood-cerise-dark group-focus:text-hollywood-cerise" xmlns="http://www.w3.org/2000/svg" width="24.005" height="24" viewBox="0 0 24.005 24"><path d="M11.93,37.672a6.153,6.153,0,1,0,6.153,6.153A6.144,6.144,0,0,0,11.93,37.672Zm0,10.154a4,4,0,1,1,4-4,4.008,4.008,0,0,1-4,4Zm7.84-10.405a1.435,1.435,0,1,1-1.435-1.435A1.432,1.432,0,0,1,19.771,37.42Zm4.075,1.457a7.1,7.1,0,0,0-1.939-5.029,7.149,7.149,0,0,0-5.029-1.939c-1.981-.112-7.921-.112-9.9,0a7.139,7.139,0,0,0-5.029,1.933A7.126,7.126,0,0,0,.009,38.871c-.112,1.981-.112,7.921,0,9.9A7.1,7.1,0,0,0,1.948,53.8a7.158,7.158,0,0,0,5.029,1.939c1.981.112,7.921.112,9.9,0A7.1,7.1,0,0,0,21.907,53.8a7.149,7.149,0,0,0,1.939-5.029c.112-1.981.112-7.915,0-9.9ZM21.286,50.9A4.05,4.05,0,0,1,19,53.181c-1.58.627-5.329.482-7.074.482s-5.5.139-7.074-.482A4.05,4.05,0,0,1,2.575,50.9c-.627-1.58-.482-5.329-.482-7.074s-.139-5.5.482-7.074a4.05,4.05,0,0,1,2.281-2.281c1.58-.627,5.329-.482,7.074-.482s5.5-.139,7.074.482a4.05,4.05,0,0,1,2.281,2.281c.627,1.58.482,5.329.482,7.074S21.913,49.325,21.286,50.9Z" transform="translate(0.075 -31.825)"/></svg>
            </a>
          </div>
        </div>
      </div>  
    </header>
    
    <section class="relative flex flex-col bg-porcelain pt-12 md:pt-[4.5rem]">
      <img class="hidden md:block absolute inset-0 object-cover object-bottom h-full w-full" src="${macbook}" alt="">
      
      <div class="relative py-12 md:py-16 xl:py-28">
        <div class="container px-4">
        
          <div class="text-center md:text-left md:offset-7 md:col-5 lg:offset-7 lg:col-5">
            <h1 class="text-5xl font-bold lg:text-6xl">Let's Go!</h1>
            <div class="space-y-5 mt-7">
              <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum efficitur justo imperdiet pulvinar. Phasellus leo purus</b></p>
              <p>Aenean non tincidunt arcu. Morbi fermentum lectus a metus dapibus porta. Suspendisse et nibh porttitor, iaculis mauris at, placerat lacus</p>
            </div>
            
            <a class="inline-block text-hollywood-cerise font-bold border-2 border-hollywood-cerise rounded-full py-2.5 px-8 mt-10 lg:mt-14
            hover:text-white hover:bg-hollywood-cerise transition
            outline-none focus:bg-hollywood-cerise focus:text-white active:border-hollywood-cerise-dark active:bg-hollywood-cerise-dark" href="#">Call to Action</a>
            
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-12 md:py-16 xl:py-28">
      <div class="container px-4">
        <div class="row space-y-10 md:space-y-0">
          <div class="md:col-5 xl:col-4 xl:offset-1">
            <img class="" src="${chameleon}" alt="">
          </div>
          <div class="md:col-7 xl:col-6">
            <div class="md:pl-6 lg:pl-10">
              <h2 class="md:relative md:-top-10 md:left-[-4.7rem] text-5xl font-bold lg:text-6xl">Hello<br>Wonderful.</h2>
              <div class="space-y-5 mt-7 md:mt-3">
                <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum efficitur justo imperdiet pulvinar. Phasellus leo purus</b></p>
                <p>Dapibus a tempus sed, varius non ante. Morbi vel metus nulla. Fusce enim nisl, ullamcorper vel odio et, euismod imperdiet quam. Aliquam aliquam, elit et consequat posuere, augue nunc tempus enim, eget lacinia leo turpis nec turpis. Donec facilisis tristique euismod. Donec malesuada elit at ipsum consequat, a pretium enim elementum. Aenean non tincidunt arcu. Morbi fermentum lectus a metus dapibus porta. Suspendisse et nibh porttitor, iaculis mauris at, placerat lacus</p>
              </div>
              
              <a class="inline-flex items-center text-hollywood-cerise font-bold mt-10 space-x-2 group focus:text-hollywood-cerise active:text-hollywood-cerise-dark transition
              outline-none" href="#">
                <span>Let's go</span>
                <svg class="fill-current transform group-hover:translate-x-1 group-focus:translate-x-1 transition" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M6.8,38.722l.793-.813a.838.838,0,0,1,1.211,0l6.942,7.119a.892.892,0,0,1,0,1.242L8.806,53.392a.838.838,0,0,1-1.211,0L6.8,52.578a.9.9,0,0,1,.014-1.257l4.3-4.206H.857A.866.866,0,0,1,0,46.236V45.064a.866.866,0,0,1,.857-.879H11.12l-4.3-4.206A.89.89,0,0,1,6.8,38.722Z" transform="translate(0 -37.65)"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-12 md:py-16 bg-alabaster">
      <div class="container px-4">
        <div class="row">
          <div class="xl:col-10 xl:offset-1">
            <div class="flex max-md:flex-col max-md:items-center max-md:space-y-10 justify-between">
              <div class="text-center w-full max-w-[16rem] md:max-w-[11rem]">
                <p class="text-hollywood-cerise text-7xl font-thin font-roboto-slab lg:text-8xl">48</p>
                <div class="mt-4">
                  <p><b>Mauris Ultricies Lacus</b></p>
                  <p>Vel mi tincidunt gravida suspendisse dictum</p>
                </div>
              </div>
              <div class="text-center w-full max-w-[16rem] md:max-w-[11rem]">
                <p class="text-hollywood-cerise text-7xl font-thin font-roboto-slab lg:text-8xl">13</p>
                <div class="mt-4">
                  <p><b>Aliquam et Hibh</b></p>
                  <p>Placerat, maximus ante ut, consequat orci</p>
                </div>
              </div>
              <div class="text-center w-full max-w-[16rem] md:max-w-[11rem]">
                <p class="text-hollywood-cerise text-7xl font-thin font-roboto-slab lg:text-8xl">97</p>
                <div class="mt-4">
                  <p><b>Nullam quis augue</b></p>
                  <p>Pellentesque, suscipit urna vel, porta urna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-12 md:py-16 xl:py-28 bg-gradient-to-r from-cruise to-illusion -bg-gradient-45">
      <div class="container px-4">
        <div class="flex justify-center">
          <div class="sm:max-w-[356px] sm:w-full p-6 bg-white rounded-lg border-t-[1rem] border-hollywood-cerise shadow-wonderful">
            <h2 class="font-bold text-5xl lg:text-6xl">Form.</h2>
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
              
              <p class="text-xs mt-4">Nullam quis augue pellentesque, suscipit urna vel, porta urna. Nam cursus leo ut nisi pharetra, ut rutrum turpis lobortis. Mauris ultrices urna a sapien pharetra, a pulvinar nisi accumsan. Sed efficitur vel sem accumsan sodales. Nullam sodales velit sit amet orci semper venenatis. Curabitur scelerisque, tortor in dictum maximus.</p>
            </form> 
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="py-12 md:py-16 bg-mine-shaft">
        <div class="container px-4">
          <div class="row gy-10">
            <div class="md:col-3 xl:col-2">
              <h2 class="text-white text-5xl font-bold lg:text-6xl">And<br>Relax.</h2>
              <div class="flex space-x-4 mt-10">
                <a class="group outline-none" href="#">
                  <svg class="fill-current h-6 w-auto text-white hover:text-hollywood-cerise transition-colors group-active:text-hollywood-cerise-dark group-focus:text-hollywood-cerise" xmlns="http://www.w3.org/2000/svg" width="24.615" height="24" viewBox="0 0 24.615 24"><path d="M8.233,27.325c0,.1-.114.179-.258.179-.164.015-.278-.065-.278-.179s.114-.179.258-.179S8.233,27.211,8.233,27.325ZM6.69,27.1c-.035.1.065.213.213.243a.233.233,0,0,0,.308-.1c.03-.1-.065-.213-.213-.258a.255.255,0,0,0-.308.114Zm2.194-.084c-.144.035-.243.129-.228.243s.144.164.293.129.243-.129.228-.228S9.027,27,8.883,27.017ZM12.149,8A11.9,11.9,0,0,0,0,20.109,12.442,12.442,0,0,0,8.412,31.98c.635.114.859-.278.859-.6s-.015-2-.015-3.047c0,0-3.474.744-4.2-1.479,0,0-.566-1.444-1.38-1.816,0,0-1.136-.779.079-.764a2.62,2.62,0,0,1,1.916,1.28A2.623,2.623,0,0,0,9.285,26.59a2.758,2.758,0,0,1,.794-1.672c-2.774-.308-5.573-.71-5.573-5.484a3.761,3.761,0,0,1,1.171-2.923,4.689,4.689,0,0,1,.129-3.37c1.037-.323,3.424,1.34,3.424,1.34a11.724,11.724,0,0,1,6.233,0s2.387-1.667,3.424-1.34a4.687,4.687,0,0,1,.129,3.37,3.858,3.858,0,0,1,1.28,2.923c0,4.789-2.923,5.171-5.7,5.484a2.935,2.935,0,0,1,.844,2.3c0,1.672-.015,3.742-.015,4.149,0,.323.228.715.859.6a12.327,12.327,0,0,0,8.327-11.861A12.168,12.168,0,0,0,12.149,8ZM4.824,25.116c-.065.05-.05.164.035.258s.194.114.258.05.05-.164-.035-.258S4.888,25.052,4.824,25.116Zm-.536-.4c-.035.065.015.144.114.194a.148.148,0,0,0,.213-.035c.035-.065-.015-.144-.114-.194C4.4,24.65,4.323,24.665,4.288,24.714ZM5.9,26.481c-.079.065-.05.213.065.308.114.114.258.129.323.05s.035-.213-.065-.308C6.109,26.417,5.96,26.4,5.9,26.481Zm-.566-.73c-.079.05-.079.179,0,.293s.213.164.278.114a.226.226,0,0,0,0-.308c-.069-.114-.2-.164-.278-.1Z" transform="translate(0 -8)"/></svg>
                </a>
                <a class="group outline-none" href="#">
                  <svg class="fill-current h-6 w-auto text-white hover:text-hollywood-cerise transition-colors group-active:text-hollywood-cerise-dark group-focus:text-hollywood-cerise" xmlns="http://www.w3.org/2000/svg" width="29.55" height="24" viewBox="0 0 29.55 24"><path d="M26.513,54.063c.019.262.019.525.019.788,0,8.006-6.094,17.231-17.231,17.231A17.114,17.114,0,0,1,0,69.363a12.529,12.529,0,0,0,1.462.075,12.129,12.129,0,0,0,7.519-2.587,6.067,6.067,0,0,1-5.663-4.2,7.638,7.638,0,0,0,1.144.094,6.405,6.405,0,0,0,1.594-.206A6.057,6.057,0,0,1,1.2,56.595V56.52a6.1,6.1,0,0,0,2.737.769,6.065,6.065,0,0,1-1.875-8.1A17.215,17.215,0,0,0,14.55,55.526a6.837,6.837,0,0,1-.15-1.387,6.062,6.062,0,0,1,10.481-4.144,11.923,11.923,0,0,0,3.844-1.462,6.04,6.04,0,0,1-2.663,3.337,12.141,12.141,0,0,0,3.487-.937A13.019,13.019,0,0,1,26.513,54.063Z" transform="translate(0 -48.082)"/></svg>
                </a>
                <a class="group outline-none" href="#">
                  <svg class="fill-current h-6 w-auto text-white hover:text-hollywood-cerise transition-colors group-active:text-hollywood-cerise-dark group-focus:text-hollywood-cerise" xmlns="http://www.w3.org/2000/svg" width="24.005" height="24" viewBox="0 0 24.005 24"><path d="M11.93,37.672a6.153,6.153,0,1,0,6.153,6.153A6.144,6.144,0,0,0,11.93,37.672Zm0,10.154a4,4,0,1,1,4-4,4.008,4.008,0,0,1-4,4Zm7.84-10.405a1.435,1.435,0,1,1-1.435-1.435A1.432,1.432,0,0,1,19.771,37.42Zm4.075,1.457a7.1,7.1,0,0,0-1.939-5.029,7.149,7.149,0,0,0-5.029-1.939c-1.981-.112-7.921-.112-9.9,0a7.139,7.139,0,0,0-5.029,1.933A7.126,7.126,0,0,0,.009,38.871c-.112,1.981-.112,7.921,0,9.9A7.1,7.1,0,0,0,1.948,53.8a7.158,7.158,0,0,0,5.029,1.939c1.981.112,7.921.112,9.9,0A7.1,7.1,0,0,0,21.907,53.8a7.149,7.149,0,0,0,1.939-5.029c.112-1.981.112-7.915,0-9.9ZM21.286,50.9A4.05,4.05,0,0,1,19,53.181c-1.58.627-5.329.482-7.074.482s-5.5.139-7.074-.482A4.05,4.05,0,0,1,2.575,50.9c-.627-1.58-.482-5.329-.482-7.074s-.139-5.5.482-7.074a4.05,4.05,0,0,1,2.281-2.281c1.58-.627,5.329-.482,7.074-.482s5.5-.139,7.074.482a4.05,4.05,0,0,1,2.281,2.281c.627,1.58.482,5.329.482,7.074S21.913,49.325,21.286,50.9Z" transform="translate(0.075 -31.825)"/></svg>
                </a>
              </div>
            </div>
            <div class="sm:col-4 md:col-3 md:offset-3 xl:col-2 xl:offset-6">
              <ul class="space-y-2">
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">Fusce Euismod</a></li>
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">Varius Erat</a></li>
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">Fringilla</a></li>
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">Bibendum Neque</a></li>
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">In Tempus</a></li>
              </ul>
            </div>
            <div class="sm:col-4 sm:offset-4 md:offset-0 md:col-3 xl:col-2">
              <ul class="space-y-2">
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">Aenean Blandit</a></li>
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">Turpis eu Tempus</a></li>
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">Sollicitudin Felis</a></li>
                <li><a class="block text-emperor font-bold hover:text-white transition-colors" href="#">Non Dignissim</a></li>
              </ul> 
            </div>
          </div>
          
        </div>
      </div>
      <div class="pt-8 pb-14">
        <div class="container px-4">
          <p class="text-xs">Nullam quis augue pellentesque, suscipit urna vel, porta urna. Nam cursus leo ut nisi pharetra, ut rutrum turpis lobortis. Mauris ultrices urna a sapien pharetra, a pulvinar nisi accumsan. Sed efficitur vel sem accumsan sodales. Nullam sodales velit sit amet orci semper venenatis. Curabitur scelerisque, tortor in dictum maximus. ©2022 Wonderful Creative Agency</p>
        </div>
      </div>
    </footer>
    

  </div>
`

// setupCounter( document.querySelector( '#counter' ) )
userScroll()
