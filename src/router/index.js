import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index.vue")
  },
  {
    path: "/editor",
    name: "Editor",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/editor.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
