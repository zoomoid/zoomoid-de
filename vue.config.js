// vue.config.js
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"), // This line must in sass option
      },
    },
  },
  configureWebpack: config => {
    // eslint-disable-next-line no-undef
    if(process.env.NODE_ENV === "production") {
      config.module = {
        rules: [
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              {
                loader: "url-loader", // Or `url-loader` or your other loader
              },
              {
                loader: ImageMinimizerPlugin.loader,
                options: {
                  severityError: "warning",
                  minimizerOptions: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                      ["gifsicle", { interlaced: true }],
                      ["mozjpeg", { progressive: true }],
                      ["pngquant", { optimizationLevel: 5 }],
                      [
                        "svgo",
                        {
                          plugins: [
                            {
                              removeViewBox: false,
                            },
                          ],
                        },
                      ],
                    ],
                  },
                },
              },
            ],
          },
        ],
      }
    }
  },
};
