import Vue from 'vue';
import Router from 'vue-router';
import MainView from './views/MainView.vue';
import Privacy from './views/Privacy.vue';
import WorkContainer from '@/components/WorkContainer';
import {
  Datkom,
  Eigenräume,
  Interstellar,
  LIAMM,
  EigenräumeExtendedEdition,
  AtomicSpark
} from '@/views/work/index.js';
import Merchandise from '@/views/Merchandise';

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
        },{
          path: 'eigenräume-extended-edition',
          name: 'Eigenräume (Extended Edition)',
          component: EigenräumeExtendedEdition
        },{
          path: 'atomic-spark',
          name: 'Atomic Spark (Single)',
          component: AtomicSpark
        }
      ]
    },{
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },{
      path: '/merch',
      name: 'Merchandise',
      alias: '/merchandise',
      component: Merchandise
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})
