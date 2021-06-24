module.exports = {
  purge: [
    './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          zoomoid: '#62388e',
        },
        red: {
          zoomoid: '#ff0000',
        },
        orange: {
          zoomoid: '#ffae0d',
        },
        green: {
          zoomoid: '#85ff0d',
        },
        blue: {
          zoomoid: '#00d8ff'
        },
        yellow: {
          zoomoid: '#e5b400'
        }
      },
      fontFamily: {
        sans: [
          "neue-haas-grotesk-display",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
