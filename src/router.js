import { createRouter, createWebHistory } from "vue-router";
import edit_section from "./Components/edit_section/edit_section.vue";
import createUser from "./Components/create/createUser.vue";
import auth from "./auth/auth.vue";
import forgot from "./auth/forgot.vue";
import register from "./auth/register.vue";
import verification from "./auth/verification.vue";
import home from "./Components/home.vue";
import isUserValid from "./authChecker";

const routes = [
  {
    path: "/",
    component: home,
    meta: { requiredAuth: true },
  },
  {
    path: "/:id/edit",
    component: edit_section,
    meta: { requiredAuth: true },
  },
  {
    path: "/create",
    component: createUser,
    meta: { requiredAuth: true },
  },
  {
    path: "/logIn",
    component: auth,
  },
  {
    path: "/forgot-password",
    component: forgot,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/verification",
    component: verification,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth && !isUserValid()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
