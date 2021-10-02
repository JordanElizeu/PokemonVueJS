import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewPokemon from '../views/ViewPokemon.vue'
import ViewHome from '../views/ViewHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ViewHome',
    component: ViewHome
  },
  {
    path: '/pokemon',
    name: 'ViewPokemon',
    component: ViewPokemon
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
