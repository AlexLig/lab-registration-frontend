import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    labs: [],
    courses: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLabs(state, labs) {
      state.labs = labs;
    },
    removeLab(state, lab) {
      state.labs = state.labs.filter(lb => lb.id !== lab.id);
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

      const result = await res.json();
      commit("setUser", result);

      return true;
    },
    async login({ commit }, loginData) {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.status >= 400) return false;

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
    },
    async unregisterFromLab({ commit }, labID) {
      const res = await fetch(
        `/api/labClasses/register/${labID}/${this.state.user.student.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (res.status >= 400) return console.log(res);
      const result = await res.json();
      commit("removeLab", result);
    }
  },
  getters: {
    studentID: state => {
      return state.user && state.user.student.id;
    }
  }
});
