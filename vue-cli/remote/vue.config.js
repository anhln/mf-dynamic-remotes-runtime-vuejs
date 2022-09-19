const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const deps = require("./package.json").dependencies;

module.exports = {
  publicPath: "http://localhost:3300/",

  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    experiments: {
      topLevelAwait: true,
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new ModuleFederationPlugin({
        name: "remoteA",
        filename: "remoteEntry.js",
        library: { type: "var", name: "remoteA" },
        exposes: {
          "./HelloWorld": "./src/components/HelloWorld",
          "./DSConfig": "./src/plugins/vuetify",
          "./routes": "./src/routes",
          "./store": "./src/store/index",
        },
        shared: {
          ...deps,
          vuetify: {
            // eager: true,
            singleton: true,
          },
          vue: {
            // eager: true,
            singleton: true,
          },
        },
      }),
    ],
  },

  devServer: {
    port: 3300,
    historyApiFallback: true,
  },

  transpileDependencies: ["vuetify"],
};
