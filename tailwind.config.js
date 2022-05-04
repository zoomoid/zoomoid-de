module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"basiersquare"'],
        serif: ['"Novela"'],
      },
      fontSize: {
        '10xl': "10rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
