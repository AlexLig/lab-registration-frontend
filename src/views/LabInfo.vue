<template>
  <ul v-if="lab">
    <p v-if="errorMessage">{{errorMessage}}</p>
    <div>
      <p>{{ lab.dayIso | isoDayToGreek }}</p>
      <p class="secondary">
        {{ lab.startTime }} -
        {{ lab.finishTime }}
      </p>
      <p class="secondary">{{ lab.students.length }}/{{ lab.studentCapacity }}</p>
    </div>
    <li v-for="student in lab.students" v-bind:key="student.id">
      <p>{{ student.name }}</p>
      <p class="secondary">{{ student.am }}</p>
    </li>
  </ul>
</template>

<script>
import { getLabFull } from "../api/api";
export default {
  name: "labInfo",
  created() {
    this.fetchLab();
  },
  data() {
    return {
      lab: null,
      errorMessage: ""
    };
  },
  methods: {
    async fetchLab() {
      const { result, errorMessage } = await getLabFull(
        this.$route.params.labID
      );
      this.lab = result;
      this.errorMessage = errorMessage;
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
.add {
  position: sticky;
  top: 0;
  border-radius: 4px;
  background-color: rgb(235, 235, 235);
  z-index: 1;
}
</style>
