import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import HomePage from "../components/HomePage.vue";
import LoginPage from "../components/LoginPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/homepage",
    name: "HomePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
