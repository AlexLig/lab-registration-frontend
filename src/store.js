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
      const { result, errorMessage } = await postUserStudent(student);
      commit("setUser", result);
      return errorMessage ? { errorMessage } : { result, errorMessage };
    },
    async login({ commit }, loginData) {
      const { result, errorMessage } = await login(loginData);
      if (!errorMessage) {
        commit("setUser", result);
        return { result };
      }
      return { errorMessage };
    },
    async fetchLabs({ commit }) {
      const { result, errorMessage } = await getStudentLabs(
        this.state.user.student.id
      );
      commit("setLabs", result);
    },
    async unregisterFromLab({ commit }, labID) {
      const { result, errorMessage } = await unregisterStudentFromLab(
        labID,
        this.state.user.student.id
      );
      if (errorMessage) return errorMessage;
      commit("removeLab", result);
    }
  }
});
