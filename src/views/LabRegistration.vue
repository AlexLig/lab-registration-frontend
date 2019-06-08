<template>
  <form action>
    <label for="select-course">Βήμα 1:</label>
    <select id="select-course">
      <option value>Επιλέξτε Μάθημα</option>
      <option v-for="course in courses" v-bind:key="course.id" :value="course">{{ course.name }}</option>
    </select>
    <label for="select-course">Βήμα 2:</label>
    <select id="select-course">
      <option value>Επιλέξτε Εργαστήριο</option>
      <option
        v-for="lab in labs"
        v-bind:key="lab.id"
        :value="lab"
      >{{ lab.dayIso }} {{ lab.startTime }}-{{ lab.finishTime }}</option>
    </select>
    <input class="form-button" type="submit" value="Αποθήκευση">
    <input class="form-button" type="reset" value="Ακύρωση">
  </form>
</template>

<script>
export default {
  name: "labRegistration",
  created() {
    this.fetchCourses();
  },
  data() {
    return {
      courses: [],
      labs: [],
      selectedCourse: null,
      selectedLab: null
    };
  },
  watch: {
    selectedCourse(newVal) {
      this.fetchLabs(newVal.id);
    }
  },
  methods: {
    async fetchCourses() {
      const res = await fetch("/api/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const courses = await res.json();
      this.courses = courses;
    },
    async fetchLabs(id) {
      const res = await fetch(`/api/courses/${id}/labClasses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const labs = await res.json();
      this.labs = labs;
    }
  }
};
</script>

<style lang="scss" scoped src="@/assets/styles/_form.scss"></style>
