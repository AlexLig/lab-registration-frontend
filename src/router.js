import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import StudentLabs from "./views/StudentLabs.vue";
import LabRegistration from "./views/LabRegistration.vue";
import AdminLabs from "./views/AdminLabs.vue";
import AllCourses from "./views/AllCourses.vue";
import LabCreation from "./views/LabCreation.vue";
import CourseCreation from "./views/CourseCreation.vue";
import LabInfo from "./views/LabInfo.vue"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/studentLabs",
      name: "studentLabs",
      component: StudentLabs,
      meta: { requiresAuth: true }
    },
    {
      path: "/allCourses",
      name: "allCourses",
      component: AllCourses,
      meta: { requiresAuth: true }
    },
    {
      path: "/adminLabs",
      name: "adminLabs",
      component: AdminLabs,
      meta: { requiresAuth: true }
    },
    {
      path: "/labRegistration",
      name: "labReg",
      component: LabRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: "/labCreation",
      name: "labCreation",
      component: LabCreation,
      meta: { requiresAuth: true }
    },
    {
      path: "/labInfo",
      name: "labInfo",
      component: LabInfo,
      meta: { requiresAuth: true }
    },
    {
      path: "/courseCreation",
      name: "courseCreation",
      component: CourseCreation,
      meta: { requiresAuth: true }
    }
  ]
});

// Todo: protect routes when not loggedin (possibly store is static (imported) should find an other way.)
router.beforeEach((to, from, next) => {
  const isProtectedRoute = to.matched.some(record => record.meta.requiresAuth);
  if (!isProtectedRoute) return next();
  if (!store.state.user) return next("/login");
  next();
});

export default router;
