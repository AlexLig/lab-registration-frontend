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
    async handleSubmit(student) {
      const user = await this.$store.dispatch("signupStudent", student);
      user && this.$router.push("studentLabs");
    }
  }
};
</script>

<style lang="scss" scoped src="@/assets/styles/_form.scss"></style>
