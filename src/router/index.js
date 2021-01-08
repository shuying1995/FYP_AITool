import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import LoginPage from "../components/LoginPage.vue";
import EditProjects from "../components/EditProjects.vue";
import CreateProject from "../components/CreateProject.vue";
import DesignProject from "../components/DesignProject.vue";
import InviteMembers from "../components/InviteMembers.vue";
import Profile from "../components/Profile.vue";
import DesStakeholders from "../components/DesStakeholders.vue";
import CompletedProjects from "../components/CompletedProjects.vue";
import InputStakeholders from "../components/InputStakeholders";
import RandomFairness from "../components/RandomFairness";
import InputFairness from "../components/InputFairness";
import RatingFairness from "../components/RatingFairness";
import DesDesignProject from "../components/DesDesignProject";

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
  {
    path: "/editprojects",
    name: "EditProjects",
    component: EditProjects,
  },
  {
    path: "/createproject",
    name: "CreateProject",
    component: CreateProject,
  },
  {
    path: "/designproject",
    name: "DesignProject",
    component: DesignProject
  },
  {
    path: "/invitemembers",
    name: "InviteMembers",
    component: InviteMembers
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/desstakeholders",
    name: "DesStakeholders",
    component: DesStakeholders
  },
  {
    path: "/completedprojects",
    name: "CompletedProjects",
    component: CompletedProjects
  },
  {
    path: "/inputstakeholders",
    name: "InputStakeholders",
    component: InputStakeholders
  },
  {
    path: "/randomfairness",
    name: "RandomFairness",
    component: RandomFairness
  },
  {
    path: "/inputfairness",
    name: "InputFairness",
    component: InputFairness
  },
  {
    path: "/ratingfairness",
    name: "RatingFairness",
    component: RatingFairness
  },
  {
    path: "/desdesignproject",
    name: "DesDesignProject",
    component: DesDesignProject
  },
];

const router = new VueRouter({
  routes,
});

export default router;
