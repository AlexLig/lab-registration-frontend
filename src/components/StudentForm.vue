<template>
  <form id="StudentForm" @submit.prevent="onSubmit">
    <label for="name">Όνομα:</label>
    <input
      v-model="name"
      type="text"
      name="name"
      required
      placeholder="π.χ. Γιάννης Χιοννίδης"
    />

    <label for="am">Αριθμός Μητρώου:</label>
    <input
      v-model="am"
      type="text"
      name="am"
      required
      placeholder="π.χ 31337"
    />

    <label for="email">Email:</label>
    <input
      v-model="email"
      type="email"
      name="email"
      required
      placeholder="π.χ ibendtheknee@danny.com"
    />

    <label for="password">Κωδικός:</label>
    <input
      v-model="password"
      type="password"
      name="password"
      required
      placeholder="Είσαγετε τον κωδικό που επιθυμείτε"
    />

    <input class="form-button" type="submit" value="Αποθήκευση" />
  </form>
</template>

<script>
export default {
  name: "StudentForm",
  data() {
    return {
      name: null,
      am: null,
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      const student = {
        name: this.name,
        am: this.am,
        email: this.email,
        password: this.password
      };
      this.$emit("student-submitted", student);
      this.name = null;
      this.am = null;
      this.email = null;
      this.password = null;
    }
  }
};
</script>

<style lang="scss" scoped src="@/assets/styles/_form.scss"></style>
