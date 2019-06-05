<template>
  <form id="Login">
    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      required
      placeholder="π.χ ikilledmyaunt@ironthrone.com"
    />

    <label for="password">Κωδικός:</label>
    <input
      type="password"
      name="password"
      required
      placeholder="Είσαγετε τον κωδικό που επιθυμείτε"
    />

    <input class="form-button" type="submit" value="Είσοδος" />
  </form>
</template>

<script>
export default {
  name: "login"
};
</script>
<style lang="scss" scoped src="@/assets/styles/_form.scss"></style>
