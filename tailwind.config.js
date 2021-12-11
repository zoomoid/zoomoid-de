module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"basiersquare"'],
        serif: ['"novela"'],
        helvetica: ['"neue-haas-grotesk-display"']
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
};
