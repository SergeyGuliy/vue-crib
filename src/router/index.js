import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/VueJs.vue")
  },
  {
    path: "/vuex",
    name: "vuex",
    component: () => import("../views/Vuex")
  },
  {
    path: "/vue-router",
    name: "vue-router",
    component: () => import("../views/VueRouter")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
