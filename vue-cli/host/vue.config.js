const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  publicPath: "http://localhost:3301/",

  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        remotes: {
          remoteA: "remoteA@http://localhost:3300/remoteEntry.js",
        },
        shared: {
          ...deps,
          "register-service-worker": { eager: true, singleton: true },
          vuetify: {
            // eager: true,
            singleton: true,
          },
          vue: {
            eager: true,
            singleton: true,
            requiredVersion: deps.vue,
            // strictVersion: false,
          },
          "vue-router": {
            // eager: true,
            singleton: true,
            requiredVersion: deps["vue-router"],
          },
          vuex: {
            // eager: true,
            singleton: true,
            requiredVersion: deps["vuex"],
          },
          "mapbox-gl": {
            singleton: true,
            requiredVersion: "^2.9.2",
          },
        },
      }),
    ],
  },

  devServer: {
    port: 3301,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },

  transpileDependencies: ["vuetify"],
};
