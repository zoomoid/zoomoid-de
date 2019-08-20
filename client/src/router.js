import Vue from 'vue';
import Router from 'vue-router';
import Datkom from '@/views/work/Datkom.vue';
import Eigenräume from '@/views/work/Eigenräume.vue';
import Interstellar from '@/views/work/Interstellar.vue';
import LIAMM from '@/views/work/LIAMM.vue';
import MainView from './views/MainView.vue';
import Privacy from './views/Privacy.vue';
import WorkContainer from '@/components/WorkContainer';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },{
      path: '/work',
      name: 'Work',
      component: WorkContainer,
      children: [
        {
          path: 'datkom',
          name: 'Datenkommunikation und Sicherheit',
          component: Datkom
        },{
          path: 'interstellar',
          name: 'Interstellar',
          component: Interstellar
        },{
          path: 'eigenräume',
          name: 'Eigenräume',
          component: Eigenräume
        },{
          path: 'liamm',
          name: 'Life Is About Making Memories',
          component: LIAMM
        },
      ]
    },{
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})
