import Vue from 'vue'
import Router from 'vue-router'
import Intro from './views/Intro.vue'
import Work from './views/Work.vue'
import About from './views/About.vue'
import Datkom from './views/Datkom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/datkom',
      name: 'datkom',
      component: Datkom
    }
  ]
})
