import { frameworkConfig } from "remoteA/DSConfig";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "remoteA/store"; //get shared vuex store from host
// import i18n from "socotec/i18n"; // install i18n from shared host

Vue.config.productionTip = false;

const initApp = async () => {
  new Vue({
    router,
    store,
    // i18n,
    ...frameworkConfig, // install Vuetify from shared host
    render: (h) => h(App),
  }).$mount("#app");
};

initApp();
