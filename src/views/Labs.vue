<template>
  <ul>
    <li class="add-lab">
      <p>Προσθήκη εργαστηρίου</p>
      <p class="secondary">Πατήστε για να προσθέσετε εργαστήριο</p>
    </li>
    <li v-for="lab in labs" v-bind:key="lab.id">
      <p>{{lab.course}}</p>
      <p class="secondary">{{lab.dayIso | isoDayToGreek}} {{lab.startTime}} - {{lab.finishTime}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "labs",
  computed: {
    labs() {
      return this.$store.state.labs;
    }
  },
  filters: {
    isoDayToGreek(isoNumber) {
      const daysToGreek = {
        1: "Δευτέρα",
        2: "Τρίτη",
        3: "Τετάρτη",
        4: "Πέμπτη",
        5: "Παρασκευή",
        6: "Σάββατο",
        7: "Κυριακή"
      };
      return daysToGreek[isoNumber];
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  min-width: 320px;
  width: 22rem;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;

  position: relative;

  padding: 1rem;

  &::before {
    content: "";

    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: lightgray;

    transition: all 0.1s ease-out;
    opacity: 0;
    visibility: hidden;
  }

  &:hover::before {
    opacity: 0.5;
    visibility: visible;
  }
  &:active::before {
    opacity: 1;
  }
}

.secondary {
  font-size: 0.9rem;
  color: gray;
  margin-top: 0.35rem;
}
.add-lab {
  position: sticky;
  top: 0;
  border-radius: 4px;
  background-color: rgb(235, 235, 235);
  z-index: 1;
}
</style>
