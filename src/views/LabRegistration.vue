<template>
  <form action @submit.prevent="registerLab" @reset.prevent="goBack">
    <div class="selections">
      <section>
        <label for="select-course">Βήμα 1: Επιλέξτε μάθημα</label>
        <select id="select-course" v-model="selectedCourse">
          <option v-for="course in courses" v-bind:key="course.id" :value="course">{{ course.name }}</option>
        </select>
      </section>
      <section class="lab-selection" v-if="!!selectedCourse">
        <label for="select-course">Βήμα 2: Επιλέξτε εργαστήριο</label>
        <select id="select-course" v-model="selectedLab" v-if="labs && labs.length">
          <option v-for="lab in labs" v-bind:key="lab.id" :value="lab">
            {{ lab.dayIso | isoDayToGreek }}
            {{ lab.startTime | fourDigitsHour }}-{{
            lab.finishTime | fourDigitsHour
            }}
          </option>
        </select>
        <p v-else>Δέν βρέθηκαν εργαστήρια για το μάθημα {{ selectedCourse.name }}</p>
      </section>
    </div>
    <p v-if="errorMessage">{{errorMessage}}</p>
    <div class="form-buttons">
      <input class="form-button" type="submit" value="Αποθήκευση">
      <input class="form-button" type="reset" value="Ακύρωση">
    </div>
  </form>
</template>

<script>
import { getAllCourses, getCourseLabs, registerStudentToLab } from "../api/api";
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
      selectedLab: null,
      errorMessage: ""
    };
  },
  watch: {
    selectedCourse: function(newVal) {
      this.fetchLabs(newVal.id);
    }
  },
  methods: {
    async fetchCourses() {
      const { result, errorMessage } = await getAllCourses();
      this.courses = result;
      this.errorMessage = errorMessage;
    },
    async fetchLabs(id) {
      const { result, errorMessage } = await getCourseLabs(id);
      this.labs = result;
      this.errorMessage;
    },
    async registerLab() {
      const { result, errorMessage } = await registerStudentToLab(
        this.selectedLab.id,
        this.$store.state.user.student.id
      );
      if (errorMessage) return (this.errorMessage = errorMessage);
      this.goBack();
    },
    goBack() {
      this.$router.go(-1);
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

<style lang="scss" scoped>
@import "@/assets/styles/_form.scss";
label {
  margin: 1rem 0;
  font-size: 1.2rem;
}
.lab-selection {
  margin-bottom: 1rem;
}
.selections {
  min-height: 12rem;
}
.form-buttons {
  display: flex;
  justify-content: space-evenly;
}
input[type="reset"] {
  background-color: lightgray;
}
</style>
