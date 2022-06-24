import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DaftarView from '../views/DaftarView.vue'
import LupaView from '../views/LupaView.vue'
import ResetView from '../views/ResetView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProfileView from '../views/ProfileView.vue'
import KatalogView from '../views/KatalogView.vue'
import PeminjamanView from '../views/PeminjamanView.vue'
import PengembalianView from '../views/PengembalianView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: DaftarView
  },
  {
    path: '/lupa',
    name: 'lupa',
    component: LupaView
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
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
    path: '/pengembalian',
    name: 'pengembalian',
    component: PengembalianView
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
