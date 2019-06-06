<template>
  <StudentForm @student-submitted="handleSubmit"></StudentForm>
</template>

<script>
import StudentForm from "@/components/StudentForm.vue";
export default {
  name: "signup",
  components: {
    StudentForm
  },
  methods: {
    handleSubmit(student) {
      this.$store.dispatch("signupStudent", student, this.$router);
    }
  }
};
</script>

<style lang="scss" scoped src="@/assets/styles/_form.scss"></style>
