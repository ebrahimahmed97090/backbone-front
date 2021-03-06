const Dotenv   = require("dotenv-webpack");
const webpack  = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
                                  $              : "jquery",
                                  jQuery         : "jquery",
                                  "window.jQuery": "jquery"
                                }),
      new Dotenv()
    ]
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ]
};
