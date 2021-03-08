import { createApp } from "vue";
import VueApollo from "vue-apollo";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(VueApollo)
  .use(store)
  .use(router)
  .mount("#app");
