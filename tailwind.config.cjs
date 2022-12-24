const { scales } = require('chart.js');
const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        // back: "#103",
        // primary: "#180048",
        // primary1: "#206", 
        // primary2: "#280078",
        // primary3: "#309",
        // primary4: "#3800a8",
        // primary5: "#40c",
        // secondary: "#ffffff",
        // accent: "#50f"
        back: "#111",
        primary: "#222",
        primary1: "#333", 
        primary2: "#444",
        primary3: "#555",
        primary4: "#666",
        primary5: "#777",
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
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" }
        },
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
        },
        scaleIn: {
          "0%": { transform: "scale(0, 0)" },
          "100%": { transform: "scale(1, 1)" }
        },
        scaleOut: {
          "0%": { transform: "scale(1, 1)" },
          "100%": { transform: "scale(0, 0)" }
        }
      },
      animation: {
        slideUp: "slideUp 0.15s ease-in-out",
        slideRight: "slideRight 0.3s ease-in-out",
        slideDown: "slideDown 0.15s ease-in-out",
        fadeIn: "fadeIn 0.4s ease-in-out",
        scaleIn: "scaleIn 0.4s ease-in-out",
        scaleOut: "scaleOut 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
}
