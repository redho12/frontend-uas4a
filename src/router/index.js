import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import KatalogView from '../views/KatalogView.vue'
import PeminjamanView from '../views/PeminjamanView.vue'
import NamapeminjamView from '../views/NamapeminjamView.vue'
import TestView from '../views/TestView.vue'
import RiwayatView from '../views/RiwayatView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/katalog',
    name: 'katalog',
    component: KatalogView
  },
  {
    path: '/peminjaman',
    name: 'peminjaman',
    component: PeminjamanView
  },
  {
    path: '/namapeminjam',
    name: 'namapeminjam',
    component: NamapeminjamView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/riwayat',
    name: 'riwayat',
    component: RiwayatView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
