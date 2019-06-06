import Vue from "vue";
import Router from "vue-router";
// import store from "./store";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Labs from "./views/Labs.vue";
import LabRegistration from "./views/LabRegistration.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/labs",
      name: "labs",
      component: Labs,
      meta: { requiresAuth: true }
    },
    {
      path: "/labRegistration",
      name: "labReg",
      component: LabRegistration,
      meta: { requiresAuth: true }
    }
  ]
});

// Todo: protect routes when not loggedin (possibly store is static (imported) should find an other way.)
// router.beforeEach((to, from, next) => {
//   const isProtectedRoute = to.matched.some(record => record.meta.requiresAuth);
//   if (!isProtectedRoute) return next();
//   if (!store.getters.isLoggedIn) return next("/login");
//   next();
// });

export default router;
