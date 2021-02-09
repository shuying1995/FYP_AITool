import Vue from "vue";
import VueRouter from "vue-router";
import HomePageOP from "../components/HomePageOP.vue";
import HomePagePR from "../components/HomePagePR.vue";
import FacilitatorHomePage from "../components/FacilitatorHomePage.vue";
import LoginPage from "../components/LoginPage.vue";
import ProjectSettings from "../components/ProjectSettings.vue";
import Create from "../components/Create.vue";
import DesignProject from "../components/DesignProject.vue";
import InviteMembers from "../components/InviteMembers.vue";
import Profile from "../components/Profile.vue";
import DesStakeholders from "../components/DesStakeholders.vue";
import CompletedProjects from "../components/CompletedProjects.vue";
import InputStakeholders from "../components/InputStakeholders";
import RandomFairness from "../components/RandomFairness.vue";
import InputFairness from "../components/InputFairness.vue";
import RatingFairness from "../components/RatingFairness.vue";
import DesDesignProject from "../components/DesDesignProject.vue";
import Register from "../components/Register.vue";
import ForgetPW from "../components/ForgetPW.vue";
import ResetPW from "../components/ResetPW.vue";
//import RegisterStep1 from "../components/RegisterStep1.vue";
//import RegisterStep2 from "../components/RegisterStep2.vue";
//import RegisterStep3 from "../components/RegisterStep3.vue";
//import RegisterStep4 from "../components/RegisterStep4.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/homepageop",
    name: "HomePageOP",
    component: HomePageOP,
  },
  {
    path: "/homepagepr",
    name: "HomePagePR",
    component: HomePagePR,
  },
  {
    path: "/projectsettings",
    name: "ProjectSettings",
    component: ProjectSettings,
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
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/facilitatorhomepage",
    name: "FacilitatorHomePage",
    component: FacilitatorHomePage
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/forgetpw",
    name: "ForgetPW",
    component: ForgetPW
  },
  {
    path: "/resetpw",
    name: "ResetPW",
    component: ResetPW
  },
  /*{
    path: "/registerstep1",
    name: "RegisterStep1",
    component: RegisterStep1
  },
  {
    path: "/registerstep2",
    name: "RegisterStep2",
    component: RegisterStep2
  },
  {
    path: "/registerstep3",
    name: "RegisterStep3",
    component: RegisterStep3
  },
  {
    path: "/registerstep4",
    name: "RegisterStep4",
    component: RegisterStep4
  },*/
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
