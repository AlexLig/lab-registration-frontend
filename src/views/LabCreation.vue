<template>
  <form @submit.prevent="submitLab" @reset.prevent="goBack">
    <label for="select-course">Ημέρα:</label>
    <select id="select-course" v-model="selectedDay" required>
      <option v-for="day in days" v-bind:key="day" :value="day">
        {{ day | isoDayToGreek }}
      </option>
    </select>

    <label for="starTime">Ώρα έναρξης:</label>
    <input
      type="time"
      name="startTime"
      id="startTime"
      v-model="startTime"
      required
    />

    <label for="finishTime">Ώρα λήξης:</label>
    <input
      type="time"
      name="finishTime"
      id="finishTime"
      v-model="finishTime"
      required
    />

    <label for="studentCapacity">Αριθμός φοιτητών:</label>
    <input
      type="number"
      name="studentCapacity"
      id="studentCapacity"
      v-model="capacity"
      required
    />

    <div class="form-buttons">
      <input class="form-button" type="submit" value="Αποθήκευση" />
      <input class="form-button" type="reset" value="Ακύρωση" />
    </div>
  </form>
</template>

<script>
import { postLab } from "../api/api";

export default {
  name: "labCreation",
  data() {
    return {
      days: ["1", "2", "3", "4", "5", "6", "7"],
      courses: [],
      capacity: null,

      selectedDay: null,
      startTime: null,
      finishTime: null,
      error: null
    };
  },
  methods: {
    async submitLab() {
      const res = await postLab({
        studentCapacity: this.capacity,
        dayIso: this.selectedDay,
        startTime: this.startTime,
        finishTime: this.finishTime,
        courseId: this.$store.state.selectedCourseID
      });
      if (res.status >= 400) return;
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

.form-buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
