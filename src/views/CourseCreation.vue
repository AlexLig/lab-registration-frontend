<template>
  <form @submit.prevent="submitCourse" @reset.prevent="goBack">
    <label for="starTime">Όνομα Μαθήματος:</label>
    <input type="text" name="courseName" id="courseName" v-model="courseName" required>
    <p v-if="errorMessage">{{errorMessage}}</p>
    <input class="form-button" type="submit" value="Αποθήκευση">
    <input class="form-button" type="reset" value="Ακύρωση">
  </form>
</template>

<script>
import { postCourse } from "../api/api";

export default {
  name: "courseCreation",
  data() {
    return {
      errorMessage: "",
      courseName: ""
    };
  },
  methods: {
    async submitCourse() {
      const { result, errorMessage } = await postCourse({
        name: this.courseName
      });
      if (errorMessage) return (this.errorMessage = errorMessage);
      this.goBack();
    },
    goBack() {
      this.$router.go(-1);
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
</style>
