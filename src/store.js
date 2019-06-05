import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: "1"
  },
  mutations: {},
  actions: {},
  getters: {
    isLoggedIn: state => {
      return !!state.jwt;
    }
  }
});
