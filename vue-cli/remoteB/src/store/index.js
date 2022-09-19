import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const $store = new Vuex.Store({
  state: {
    access_token: 1,
  },
  getters: {},
  mutations: {
    setAccessToken(state) {
      state.access_token++;
    },
  },
  actions: {},
  modules: {},
});

export default $store;
