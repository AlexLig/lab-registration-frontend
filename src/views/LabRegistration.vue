<template>
  <form action>
    <section>
      <label for="select-course">Βήμα 1: Επιλέξτε μάθημα</label>
      <select id="select-course" v-model="selectedCourse">
        <option v-for="course in courses" v-bind:key="course.id" :value="course">{{ course.name }}</option>
      </select>
    </section>
    <section class="lab-selection" v-if="!!selectedCourse">
      <label for="select-course">Βήμα 2: Επιλέξτε εργαστήριο</label>
      <select id="select-course" v-model="selectedLab" v-if="labs && labs.length">
        <option
          v-for="lab in labs"
          v-bind:key="lab.id"
          :value="lab.id"
        >{{ lab.dayIso | isoDayToGreek }} {{ lab.startTime | fourDigitsHour }}-{{ lab.finishTime | fourDigitsHour }}</option>
      </select>
      <p v-else>Δέν βρέθηκαν εργαστήρια για το μάθημα {{selectedCourse.name}}</p>
    </section>
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
    selectedCourse: function(newVal) {
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
      const res = await fetch(`/api/courses/${id}/labs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const labs = await res.json();
      this.labs = labs;
    }
  },
  filters: {
    isoDayToGreek(isoNumber) {
      const daysToGreek = {
        1: "Δευτέρα",
        2: "Τρίτη",
        3: "Τετάρτη",
        4: "Πέμπτη",
        5: "Παρασκευή",
        6: "Σάββατο",
        7: "Κυριακή"
      };
      return daysToGreek[isoNumber];
    },
    fourDigitsHour(hour) {
      return hour.substring(0, 5);
    }
  }
};
</script>

<style lang="scss" scoped >
@import "@/assets/styles/_form.scss";
option {
  width: 20rem;
}
label {
  margin: 1rem 0;
  font-size: 1.2rem
}
.lab-selection{
  margin-bottom: 1rem;
}
</style>
