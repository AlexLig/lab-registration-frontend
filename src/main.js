import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("isoDayToGreek", function(isoNumber) {
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
});
Vue.filter("fourDigitsHour", function(hour) {
  return hour.substring(0, 5);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
