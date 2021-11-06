import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/live',
    name: 'Live',
    component: () => import(/* webpackChunkName: "live" */ '../views/Live.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/reg.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/category.vue')
  },
  {
    path: '/goodlist/:id',
    name: 'Goodlist',
    component: () => import(/* webpackChunkName: "goodlist" */ '../views/goodlist.vue')
  },
  {
    path: '/gooddetail/:id',
    name: 'Gooddetail',
    component: () => import(/* webpackChunkName: "gooddetail" */ '../views/gooddetail.vue')
  },
  {
    path: '/confirmorder/:id/:ids/:amount',
    name: 'Confirmorder',
    component: () => import(/* webpackChunkName: "gooddetail" */ '../views/confirmorder.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/member.vue')
  },
  {
    path: '/order/:type',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')
  },
  {
    path: '/orderdetail/:id',
    name: 'Orderdetail',
    component: () => import(/* webpackChunkName: "orderdetail" */ '../views/orderdetail.vue')
  },
  {
    path: '/editaddress/:id',
    name: 'editaddress',
    component: () => import(/* webpackChunkName: "editaddress" */ '../views/addressedit.vue')
  },
  {
    path: '/addaddress',
    name: 'addaddress',
    component: () => import(/* webpackChunkName: "editaddress" */ '../views/addaddress.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "address" */ '../views/address.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import(/* webpackChunkName: "collect" */ '../views/collect.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/history.vue')
  },
  {
    path: '/set',
    name: 'set',
    component: () => import(/* webpackChunkName: "history" */ '../views/set.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
