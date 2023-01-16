import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin( ScrollTrigger )

export const counter = () => {

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
      start: '200 bottom',
    },
  } )

  var statNumList   = document.querySelectorAll( '.stat-number' )
  statNumList.forEach( function ( number, i ) {
    if ( i > 0 ) {
      tl.counter( `#counter-${i + 1}`, '-=0.5' )
    } else {
      tl.counter( `#counter-${i + 1}` )
    }
  } )

  // tl.counter( '#counter-1' )
  // tl.counter( '#counter-2', '-=0.5' )
  // tl.counter( '#counter-3', '-=0.5' )
}
