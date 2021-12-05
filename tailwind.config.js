const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        sans: ['"basiersquare"'],
        serif: ['"novela"'],
        helvetica: ['"neue-haas-grotesk-display"']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
