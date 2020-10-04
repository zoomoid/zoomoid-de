import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.scss";
import "./aos.js";

Vue.config.productionTip = true;

let vm = new Vue({
  router,
  render: (h) => h(App),
});

vm.$mount("#app");
