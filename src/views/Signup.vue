<template>
  <form id="StudentForm">
    <label for="name">Όνομα:</label>
    <input type="text" name="name" required placeholder="π.χ. Γιάννης Χιοννίδης">

    <label for="am">Αριθμός Μητρώου:</label>
    <input type="text" name="am" required placeholder="π.χ 31337">

    <label for="email">Email:</label>
    <input type="email" name="email" required placeholder="π.χ ibendtheknee@danny.com">

    <label for="password">Κωδικός:</label>
    <input
      type="password"
      name="password"
      required
      placeholder="Είσαγετε τον κωδικό που επιθυμείτε"
    >

    <input class="form-button" type="submit" value="Αποθήκευση">
  </form>
</template>

<script>
export default {
  name: "signup"
};
</script>

<style lang="scss" scoped src="@/assets/styles/_form.scss">
</style>
