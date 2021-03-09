import Vue from "vue";
import App from "./App.vue";
import apollo from "./apolloClient";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.$apollo = apollo;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
