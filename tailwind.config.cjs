/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#16002a",
        // primary1: "#240048", 
        // primary2: "#300060",
        // primary: "#103",
        // primary1: "#206", 
        // primary2: "#2c0084",
        // primary3: "#40c",
        back: "#103",
        primary: "#180048",
        primary1: "#206", 
        primary2: "#280078",
        primary3: "#309",
        primary4: "#3800a8",
        primary5: "#40c",
        secondary: "#ffffff",
        accent: "#50f"
      }
    },
  },
  plugins: [],
}
