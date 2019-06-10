import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: "",
    user: null,
    labs: [],
    courses: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setJwt(state, token) {
      state.jwt = token;
    },
    setLabs(state, labs) {
      state.labs = labs;
    }
  },
  actions: {
    async signupStudent({ commit }, student) {
      const res = await fetch("/api/register/student", {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.status >= 400) return false;

      const token = res.headers.get("x-auth-token");
      commit("setJwt", token);
      const result = await res.json();
      commit("setUser", result);

      return true;
    },
    async fetchLabs({ commit }) {
      const res = await fetch(
        `/api/labClasses/student/${this.state.user.student.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const result = await res.json();
      commit("setLabs", result);
    }
  },
  getters: {
    isLoggedIn: state => {
      return !!state.jwt;
    },
    studentID: state => {
      return state.user && state.user.student.id;
    }
  }
});
