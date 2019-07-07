<template>
  <ul>
    <li class="add" @click="routeToNewCourse">
      <p>Προσθήκη Μαθήματος</p>
      <p class="secondary">Πατήστε για να προσθέσετε νέο μάθημα</p>
    </li>
    <p v-if="errorMessage">{{errorMessage}}</p>
    <li v-for="course in courses" v-bind:key="course.id" @click="routeToCourseLabs(course.id)">
      <p>{{ course.name }}</p>
    </li>
  </ul>
</template>

<script>
import { getAllCourses } from "../api/api";
export default {
  name: "allCourses",
  created() {
    this.fetchCourses();
  },
  data() {
    return {
      courses: [],
      errorMessage: ""
    };
  },
  methods: {
    routeToNewCourse() {
      this.$router.push({ name: "courseCreation" });
    },
    routeToCourseLabs(courseID) {
      this.$store.commit("setSelectedCourseID", courseID);
      this.$router.push({ name: "adminLabs" });
    },
    async fetchCourses() {
      const { result, errorMessage } = await getAllCourses();
      this.errorMessage = errorMessage;
      this.courses = result;
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
