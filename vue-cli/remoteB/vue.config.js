const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const deps = require("./package.json").dependencies;

module.exports = {
  publicPath: "http://localhost:3302/",

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
        name: "remoteB",
        filename: "remoteEntry.js",
        library: { type: "var", name: "remoteB" },
        exposes: {
          "./HelloWorld": "./src/components/HelloWorld",
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
    port: 3302,
    historyApiFallback: true,
  },

  transpileDependencies: ["vuetify"],
};
