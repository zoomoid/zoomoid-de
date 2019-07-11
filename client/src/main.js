import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import './registerServiceWorker'

Vue.use(VueCookies)
VueCookies.config('30d')

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

