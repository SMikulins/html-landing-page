/** @type {import('tailwindcss').Config} */

function hexToRgb ( hex ) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex                = hex.replace( shorthandRegex, function ( m, r, g, b ) {
    return r + r + g + g + b + b
  } )

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex )
  return result ? {
    r: parseInt( result[ 1 ], 16 ),
    g: parseInt( result[ 2 ], 16 ),
    b: parseInt( result[ 3 ], 16 ),
  } : null
}

function withOpacityValue ( hex ) {
  return ( { opacityValue } ) => {
    if ( opacityValue === undefined ) {
      return `${hex}`
    }
    const { r, g, b } = hexToRgb( hex )

    return `rgba(${r},${g},${b},${opacityValue})`
  }
}

module.exports = {
  content: [
    "./index.html",
    "./*.js",
    "./resources/**/*.{js,svg}"
  ],
  theme: {
    screens: {
      sm: '540px', md: '720px', lg: '960px', xl: '1140px',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif']
      },
      colors: {
        'illusion': withOpacityValue( '#F5ABD6' ),
        'hollywood-cerise': withOpacityValue( '#e80789' ),
        'hollywood-cerise-light': withOpacityValue( '#ff5ab9' ),
        'hollywood-cerise-dark': withOpacityValue( '#b0005c' ),
      }
    },
  },
  plugins: [
    require( 'tailwind-bootstrap-grid' )( {
      gridGutters: {
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      gridGutterWidth: '3rem',
    } ),
  ],
}
