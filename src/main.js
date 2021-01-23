import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import titleMixin from "./mixins/titleMixin";
import axios from "axios";
import store from "./store/index";

// Sync router with store
import { sync } from "vuex-router-sync";

Vue.mixin(titleMixin);
Vue.use(axios);

// Sync store with router
sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
