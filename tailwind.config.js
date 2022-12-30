/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
    },
    fontFamily: {
      sans: ['Montserrat', 'Arial', 'sans-serif'],
    },
    fontSize: {
      'xs': ['1.2rem', '1.2'],
      'sm': ['1.3rem', '1.4'],
      'base': ['1.4rem', '1.9'],
      'lg': ['1.5rem', '1'],
      'xl': ['1.6rem', '1.4'],
      '2xl': ['1.7rem', '1.5'],
      '3xl': ['2rem', '1.3'],
      '4xl': ['2.2rem', '1.2'],
      '5xl': ['2.4rem', '1.4'],
      '6xl': ['2.8rem', '1'],
      '7xl': ['3rem', '1.5'],
      '8xl': ['1.7rem', '1.5'],
      '9xl': ['3.2rem', '1'],
      '10xl': ['4.2rem', '1'],
      '11xl': ['4.5rem', '1.2'],
      '12xl': ['4.6rem', '1.2'],
      '13xl': ['5rem', '1.2'],
      'base-xs': '2.4vw',
      'base-sm': '2.4vw',
      'base-md': '1.2vw',
      'base-lg': '.8vw',
      'base-xl': '.8vw',
      'base-2xl': '10px',
    },

    extend: {
      colors: {
        primary: '#fd7e14',
        secondary: '#ffa34f',
        highlight: '#f5f5f5',
      },
      boxShadow: {
        'md': '0 3px 16px #4a4a4a33',
      },
      gridRowEnd: {
        'neg-1': '-1',
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layout': '20vh 25vh 27vh 10vh;',
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'layout': 'minmax(20em,max-content) minmax(20em,max-content) 2fr minmax(1em,1fr) fit-content(28em) calc(2em + .5vw)',
      },
      height: {
        'screen-20': '20vw',
      },
      lineHeight: {
        'none': '1.1',
        'tight': '1.2',
        'snug': '1.3',
        'normal': '1.4',
        'relaxed': '1.5',
        'loose': '1.6',
      },
      maxWidth: {
        'xl': '39rem',
        '2xl': '42rem',
        '3xl': '47rem',
        '4xl': '48rem',
        '5xl': '64rem',
        '6xl': '83rem',
        'screen-xl': '1440px',
        'screen-2xl': '1536px',
      },
      spacing: {
        '5px': '5px',
        '4/5': '.2rem',
        '6/5': '.3rem',
        '8/5': '.4rem',
        '16/5': '.8rem',
        '24/5': '1.2rem',
        '26/5': '1.3rem',
        '28/5': '1.4rem',
        '36/5': '1.8rem',
        '38/5': '1.9rem',
        '42/5': '2.1rem',
        '44/5': '2.2rem',
        '46/5': '2.3rem',
        '54/5': '2.7rem',
        '62/5': '3.1rem',
        '64/5': '3.2rem',
        '82/5': '4.1rem',
        '84/5': '4.2rem',
        '86/5': '4.3rem',
        '94/5': '4.7rem',
        '18': '4.5rem',
        '102/5': '5.1rem',
        'screen-19.9': '19.9vw',
      },
      width: {
        '58/5': '2.9rem',
        '332/5': '16.6rem',
        '396/5': '19.775rem',
        'xs': '23.4rem',
        'md': '15.6rem',
        'lg': '23.6rem',
        '9/10': '90%',
      },
    },
  },
  plugins: [
    require('tailwindcss-writing-mode')({
      variants: ['responsive'],
    })
  ]
}
