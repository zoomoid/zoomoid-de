import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { Home } from '../views';

const routes = [
  {
    path: '/',
    component: Home,
  },{
    path: '/releases',
    component: () => import(/* webpackChunkName: "releases" */ '../views/Releases.vue'),
    name: 'Releases'
  },{
    path: '/mixes',
    component: () => import(/* webpackChunkName: "mixes" */ '../views/Mixes.vue'),
    name: 'Mixes'
  },{
    path: '/news',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
    name: 'News'
  },{
    path: '/events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue'),
    name: 'Events'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
