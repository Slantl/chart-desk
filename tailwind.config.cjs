const { scales } = require('chart.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        back: "#103",
        primary: "#180048",
        primary1: "#206", 
        primary2: "#280078",
        primary3: "#309",
        primary4: "#3800a8",
        primary5: "#40c",
        secondary: "#ffffff",
        accent: "#50f"
      },
      gridTemplateColumns: {
        "deskC": "minmax(0, 3fr) 1fr"
      },
      gridTemplateRows: {
        "deskR": "content-fit minmax(0, content-fit)",
        "deskR1": "repeat(4, minmax(0, content-fit))"
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        }
      },
      animation: {
        slideDown: "slideDown 0.3s ease-in-out",
        slideRight: "slideRight 0.3s ease-in-out",
        fadeIn: "fadeIn 0.4s ease-in-out"
      },
    },
  },
  plugins: [],
}
