<template>
  <div>
    <form id="Login" @submit.prevent="login">
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        required
        placeholder="π.χ ikilledmyaunt@ironthrone.com"
        v-model="email"
      />

      <label for="password">Κωδικός:</label>
      <input
        type="password"
        name="password"
        required
        placeholder="Είσαγετε τον κωδικό που επιθυμείτε"
        v-model="password"
      />

      <input class="form-button" type="submit" value="Είσοδος" />
    </form>
    <router-link to="signup">Κάντε εγγραφή εδώ</router-link>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const user = await this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
      user && this.$router.push(user.isAdmin ? "allCourses" : "studentLabs");
    }
  }
};
</script>
<style lang="scss" scoped src="@/assets/styles/_form.scss"></style>
