import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ItemJC',
    name: 'Item List For JC',
    component: () => import('../views/Item_JC.vue')
  },
  {
    path: '/ItemMembers',
    name: 'Item List For Members',
    component: () => import('../views/Item_members.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
