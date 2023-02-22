
const  {fontFamily,screens} =require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      keyframes:{
        hamburgerlineTop:{
        "0%" :{
            opacity: 1,
            top: 0,
            left: 0,
            "-webkit-transform": 'rotate(0) scaleX(1)',
            transform: 'rotate(0) scaleX(1)',
            "-webkit-transform-origin": 'left center',
            "transform-origin": 'left center'
        },
        "30%":{
            opacity: 1,
            top: 0,
            left: 0,
            "-webkit-transform": 'rotate(0) scaleX(0)',
            transform: "rotate(0) scaleX(0)"
        },
       "30.1%" :{
            opacity: 0,
            top: 0,
            left: 0,
            "-webkit-transform": 'rotate(0) scaleX(0)',
            transform: 'rotate(0) scaleX(0)'
        },
        "31%" :{
            opacity: 1,
            top: "-5px",
            left: "3px",
          "  -webkit-transform": 'rotate(45deg) scaleX(0)',
            transform: 'rotate(45deg) scaleX(0)'
        },
        "100%,80%" :{
            opacity: 1,
            top: "-5px",
            left: "3px",
            "-webkit-transform": "rotate(45deg) scaleX(1)",
            transform: "rotate(45deg) scaleX(1)",
            "-webkit-transform-origin": "left center",
            "transform-origin": "left center"
        }
        },
        hamburgerlineBottom:{
          "0%" :{
              opacity: 1,
              top: 0,
              left: 0,
              "-webkit-transform": 'rotate(0) scaleX(1)',
              transform: 'rotate(0) scaleX(1)',
              "-webkit-transform-origin": 'right center',
              "transform-origin": 'right center'
          },
          "50% ":{
              opacity: 1,
              top: 0,
              left: 0,
              "-webkit-transform": 'rotate(0) scaleX(0)',
              transform: "rotate(0) scaleX(0)"
          },
         "50.1%" :{
              opacity: 0,
              top: 0,
              left: 0,
              "-webkit-transform": 'rotate(0) scaleX(0)',
              transform: 'rotate(0) scaleX(0)'
          },
          "51%,55%" :{
              opacity: 1,
              top: "-12px",
              left: "-4px",
              "-webkit-transform": 'rotate(-45deg) scaleX(0)',
              transform: 'rotate(-45deg) scaleX(0)'
          },
          "100%" :{
              opacity: 1,
              top: "-12px",
              left: "-4px",
              "-webkit-transform": "rotate(-45deg) scaleX(1)",
              transform: "rotate(-45deg) scaleX(1)",
              "-webkit-transform-origin": "right center",
              "transform-origin": "right center"
          }
          }
      }
    },
    screens:{
      "phablet":"480px",
      "phone":"376px",
      "tiny":"330px",
      ...screens
    }
  },
  plugins: [],
  darkMode:"class"
}
