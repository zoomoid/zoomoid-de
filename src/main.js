import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.scss";
import "./aos.js";
import store from "./store"

Vue.config.productionTip = true;

let vm = new Vue({
  router,
  store,
  render: (h) => h(App)
});

vm.$mount("#app");
