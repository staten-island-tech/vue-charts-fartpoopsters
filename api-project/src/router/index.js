import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import borough from '../views/borough.vue'
import Kaifile from '../views/Kaifile.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    ,{
      path: '/borough',
      name: 'borough',
      component: borough
    },
    {
      path: '/injuries',
      name: 'injuries',
      component: Kaifile

    }
  ]
})

export default router
