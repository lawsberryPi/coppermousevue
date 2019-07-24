import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Apparel from './views/Apparel.vue'
import Etching from './views/Etching'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apparel',
      name: 'apparel',
      component: Apparel
    },
    {
      path: '/etching',
      name: 'etching',
      component: Etching
    }
  ]
})
