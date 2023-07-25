import { createRouter, createWebHistory } from "vue-router";
import section_Body from "./Components/section_Body/section_Body.vue";
import edit_section from "./Components/edit_section/edit_section.vue";
import createUser from "./Components/create/createUser.vue";
import auth from "./auth/auth.vue";
import forgot from "./auth/forgot.vue";
import register from "./auth/register.vue";
import verification from "./auth/verification.vue"
import home from "./Components/home.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: home,
      // children: { path: "/", component: section_Body },
    },
    { path: "/:id/edit", component: edit_section },
    { path: "/create", component: createUser },
    { path: "/logIn", component: auth },
    { path: "/forgot-password", component: forgot },
    { path: "/register", component: register },
    { path: "/verification",component:verification},
  ],
});
