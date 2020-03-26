// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // This line must in sass option
        data: `
          @import "@/scss/app.sass";
          @import "@/scss/single.sass";

        `
      },
    },
  }
}
