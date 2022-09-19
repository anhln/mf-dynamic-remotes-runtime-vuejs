import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import remoteProfileRoutes from "remoteA/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Test.vue"),
  },
  {
    path: "/test-dynamic",
    name: "test-dynamic",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/TestDynamicLoad.vue"
      ),
  },
  ...remoteProfileRoutes,
];

const router = new VueRouter({
  routes,
});

export default router;
