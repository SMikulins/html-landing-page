import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin( ScrollTrigger )


export function counter () {

  gsap.registerEffect( {
    name: 'counter',
    extendTimeline: true,
    defaults: {
      end: 0,
      innerText: 0,
      duration: 1,
      ease: 'power1',
      increment: 1,
    },
    effect: ( targets, config ) => {
      let tl                 = gsap.timeline()
      let num                = targets[ 0 ].innerText.replace( /\,/g, '' )
      targets[ 0 ].innerText = num

      tl.from( targets, {
        innerText: config.end,
        duration: config.duration,
        ease: config.ease,
        snap: { innerText: config.increment },
        modifiers: {
          innerText: function ( innerText ) {
            return gsap.utils.snap( config.increment, innerText ).toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' )
          },
        },
      }, 0 )

      return tl
    },
  } )

  const tl = gsap.timeline( {
    scrollTrigger: {
      trigger: '#counters',
      start: 'top bottom',
    },
  } )

  tl.counter( '#counter-1' )
  tl.counter( '#counter-2', '-=0.5' )
  tl.counter( '#counter-3', '-=0.5' )

}
