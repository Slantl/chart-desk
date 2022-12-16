/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16002a",
        primary1: "#240048", 
        primary2: "#300060",
        secondary: "#fff",
        accent: "#50f"
      }
    },
  },
  plugins: [],
}
