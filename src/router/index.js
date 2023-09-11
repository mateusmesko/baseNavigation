import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeRequest.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateRequest.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListRequest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
