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
        "deskR1" : "repeat(4, minmax(0, content-fit))"
      }
    },
  },
  plugins: [],
}
