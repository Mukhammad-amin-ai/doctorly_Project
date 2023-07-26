import { createRouter, createWebHistory } from "vue-router";
import section_Body from "./Components/section_Body/section_Body.vue";
import edit_section from "./Components/edit_section/edit_section.vue";
import createUser from "./Components/create/createUser.vue";
import auth from "./auth/auth.vue";
import forgot from "./auth/forgot.vue";
import register from "./auth/register.vue";
import verification from "./auth/verification.vue";
import home from "./Components/home.vue";

const verify = "https://tulibayev.uz/api/user/emailverification";
const login = "https://tulibayev.uz/api/user/login";
const token = localStorage.getItem("token");
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: home,
      beforeEnter: (to, from, next) => {
        let a = parseJwt(token);
        if (token) {
          if (a.iss === login || verify) {
            next();
          }
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/:id/edit",
      component: edit_section,
      beforeEnter: (to, from, next) => {
        let a = parseJwt(token);
        if (token) {
          if (a.iss === login || verify) {
            next();
          }
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/create",
      component: createUser,
      beforeEnter: (to, from, next) => {
        let a = parseJwt(token);
        if (token) {
          if (a.iss === login || verify) {
            next();
          }
        } else {
          next("/login");
        }
      },
    },
    { path: "/logIn", component: auth },
    { path: "/forgot-password", component: forgot },
    { path: "/register", component: register },
    { path: "/verification", component: verification },
  ],
});
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3R1bGliYXlldi51ei9hcGkvdXNlci9sb2dpbiIsImlhdCI6MTY5MDI2NTkxNywiZXhwIjoxNjkwMzA5MTE3LCJuYmYiOjE2OTAyNjU5MTcsImp0aSI6InluYmp2T2V2UXZxcVZTUUYiLCJzdWIiOiIxMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.jQXWQM_6NVn5RJMAH9fMdQQZuZM0XJmo1J3BgGpjK7U
