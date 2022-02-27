import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/programs/:program/:id",
      name: "program",
      component: () => import("./views/Program.vue"),
      props: true,
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue"),
      props: true,
    },
  ],
});
