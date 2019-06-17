<template>
  <form @submit.prevent="submitCourse" @reset.prevent="goBack">
    <label for="starTime">Όνομα Μαθήματος:</label>
    <input
      type="text"
      name="courseName"
      id="courseName"
      v-model="courseName"
      required
    />
    <input class="form-button" type="submit" value="Αποθήκευση" />
    <input class="form-button" type="reset" value="Ακύρωση" />
  </form>
</template>

<script>
import { postCourse } from "../api/api";

export default {
  name: "courseCreation",
  data() {
    return {
      error: null,
      courseName: null
    };
  },
  methods: {
    async submitCourse() {
      const res = await postCourse({ name: this.courseName });
      if (res.status >= 400) return;
      this.courseName = null;
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
