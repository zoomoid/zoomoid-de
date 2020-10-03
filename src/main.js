import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueCookies from "vue-cookies"
import "@/assets/css/tailwind.scss";

Vue.use(VueCookies)
VueCookies.config("30d")

Vue.config.productionTip = true

let vm = new Vue({
  router,
  data: {
    blocked: true
  },
  created: function(){
    this.$blocked = !this.$cookies.isKey("allowThirdPartyContent") || !this.$cookies.get("allowThirdPartyContent") === "true"
  },
  render: h => h(App)
})
vm.$mount("#app");
