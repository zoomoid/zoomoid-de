import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/fonts/basier/font.css",
    "~/assets/fonts/novela/font.css",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
