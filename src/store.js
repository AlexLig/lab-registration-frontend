import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: "1",
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setJwt(state, token) {
      state.jwt = token;
    }
  },
  actions: {
    async signupStudent({ commit }, student, router) {
      const res = await fetch("/api/register/student", {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res)
      // const token = res.headers.get("x-auth-token");
      // commit("setJwt", token);
      // // const result = await res.json();
      // commit("setUser", result);

      router.push({ name: "labs" });
    }
  },
  getters: {
    isLoggedIn: state => {
      return !!state.jwt;
    }
  }
});
