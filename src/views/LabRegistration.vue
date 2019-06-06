<template>
  <form action>
    <label for="select-course">Βήμα 1:</label>
    <select id="select-course">
      <option value>Επιλέξτε Μάθημα</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
    <label for="select-course">Βήμα 2:</label>
    <select id="select-course">
      <option value>Επιλέξτε Εργαστήριο</option>
      <option value="dog">
        <b>a</b>
      </option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
    <input class="form-button" type="submit" value="Αποθήκευση">
    <input class="form-button" type="reset" value="Ακύρωση">
  </form>
</template>

<script>
export default {
  name: "labRegistration"
};
</script>

<style lang="scss" scoped src="@/assets/styles/_form.scss">
</style>

