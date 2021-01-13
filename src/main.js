import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import titleMixin from "./mixins/titleMixin";
import axios from "axios";

Vue.config.productionTip = false;
Vue.mixin(titleMixin);
Vue.use(axios);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
