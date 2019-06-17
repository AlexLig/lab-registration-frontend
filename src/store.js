import Vue from "vue";
import Vuex from "vuex";
import {
  postUserStudent,
  login,
  getStudentLabs,
  unregisterStudentFromLab
} from "./api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    labs: [],
    courses: [],
    selectedCourseID: null
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
    },
    setSelectedCourseID(state, courseID) {
      state.selectedCourseID = courseID;
    }
  },
  actions: {
    async signupStudent({ commit }, student) {
      const res = await postUserStudent(student);
      if (res.status >= 400) return;
      const result = await res.json();
      commit("setUser", result);
      return result;
    },
    async login({ commit }, loginData) {
      const res = await login(loginData);
      if (res.status >= 400) return;
      const result = await res.json();
      commit("setUser", result);
      return result;
    },
    async fetchLabs({ commit }) {
      const res = await getStudentLabs(this.state.user.student.id);
      const result = await res.json();
      commit("setLabs", result);
    },
    async unregisterFromLab({ commit }, labID) {
      const res = await unregisterStudentFromLab(
        labID,
        this.state.user.student.id
      );
      if (res.status >= 400) return console.log(res);
      const result = await res.json();
      commit("removeLab", result);
    }
  }
});
