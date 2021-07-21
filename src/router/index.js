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
    path: "/graph",
    name: "Graph",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/graph.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
