import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/Portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio
    }/*,
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
