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
import Survey1 from "../components/Survey1.vue";
import Survey2 from "../components/Survey2.vue";
//import Survey3 from "../components/Survey3.vue";
//import Survey4 from "../components/Survey4.vue";

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
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/homepagepr",
    name: "HomePagePR",
    component: HomePagePR,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/projectsettings",
    name: "ProjectSettings",
    component: ProjectSettings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/designproject",
    name: "DesignProject",
    component: DesignProject,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/invitemembers",
    name: "InviteMembers",
    component: InviteMembers,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/desstakeholders",
    name: "DesStakeholders",
    component: DesStakeholders,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/completedprojects",
    name: "CompletedProjects",
    component: CompletedProjects,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/inputstakeholders",
    name: "InputStakeholders",
    component: InputStakeholders,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/randomfairness",
    name: "RandomFairness",
    component: RandomFairness,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/inputfairness",
    name: "InputFairness",
    component: InputFairness,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ratingfairness",
    name: "RatingFairness",
    component: RatingFairness,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/desdesignproject",
    name: "DesDesignProject",
    component: DesDesignProject,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/facilitatorhomepage",
    name: "FacilitatorHomePage",
    component: FacilitatorHomePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    meta: {
      requiresAuth: true
    }
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
  {
    path: "/survey1",
    name: "Survey1",
    component: Survey1,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/survey2",
    name: "Survey2",
    component: Survey2,
    meta: {
      requiresAuth: true
    }
  },
  /*{
    path: "/survey3",
    name: "Survey3",
    component: Survey3,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/survey4",
    name: "Survey4",
    component: Survey4,
    meta: {
      requiresAuth: true
    }
  },*/
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Route guard checks to see if you are logged in, if not reroutes to login
// to is where you are going, matched.some is to find which routes have requiresAuth
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (window.$cookies.get('authenticated')) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})


export default router;
