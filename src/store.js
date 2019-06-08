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
      setTimeout(() => commit("setLabs", mockedLabs), 2000);
    }
  },
  getters: {
    isLoggedIn: state => {
      return !!state.jwt;
    }
  }
});

const mockedLabs = [
  {
    id: 1,
    capacity: 12,
    dayIso: 1,
    startTime: "15:00",
    finishTime: "17:00",
    course: "Ανάπτυξη Διαδικτυακών Εφαρμογών"
  },
  {
    id: 2,
    capacity: 17,
    dayIso: 2,
    startTime: "15:00",
    finishTime: "17:00",
    course: "Συστήματα Αυτομάτου Ελέγχου"
  },
  {
    id: 3,
    capacity: 17,
    dayIso: 3,
    startTime: "15:00",
    finishTime: "17:00",
    course: "Ηλεκτρονικά ισχύος"
  },
  {
    id: 4,
    capacity: 12,
    dayIso: 4,
    startTime: "15:00",
    finishTime: "17:00",
    course: "Ανάπτυξη Διαδικτυακών Εφαρμογών"
  },
  {
    id: 5,
    capacity: 17,
    dayIso: 5,
    startTime: "15:00",
    finishTime: "17:00",
    course: "Συστήματα Αυτομάτου Ελέγχου"
  },
  {
    id: 6,
    capacity: 17,
    dayIso: 6,
    startTime: "15:00",
    finishTime: "17:00",
    course: "Ηλεκτρονικά ισχύος"
  },
  {
    id: 7,
    capacity: 17,
    dayIso: 7,
    startTime: "15:00",
    finishTime: "17:00",
    course: "Ηλεκτρονικά ισχύος"
  }
];
