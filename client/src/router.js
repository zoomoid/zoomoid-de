import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Work from './views/Work.vue'
import About from './views/About.vue'
import Datkom from './views/Datkom.vue'
import Privacy from './views/Privacy.vue'
import Interstellar from './views/Interstellar.vue'
import Eigenräume from './views/Eigenräume.vue'
import LIAMM from './views/LIAMM.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },{
      path: '/work',
      name: 'work',
      component: Work
    },{
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/datkom',
      name: 'datkom',
      component: Datkom
    },{
      path: '/interstellar',
      name: 'interstellar',
      component: Interstellar
    },{
      path: '/eigenräume',
      name: 'eigenräume',
      component: Eigenräume
    },{
      path: '/liamm',
      name: 'liamm',
      component: LIAMM
    },{
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    }
  ]
})
