<template>
  <div>
    <StudentForm @student-submitted="handleSubmit"></StudentForm>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
import StudentForm from "@/components/StudentForm.vue";
export default {
  name: "signup",
  components: {
    StudentForm
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  methods: {
    async handleSubmit(student) {
      const { result, errorMessage } = await this.$store.dispatch(
        "signupStudent",
        student
      );
      result && this.$router.push("studentLabs");
      this.errorMessage = errorMessage;
    }
  }
};
</script>

<style lang="scss" scoped src="@/assets/styles/_form.scss"></style>
