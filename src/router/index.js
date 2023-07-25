import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/Portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/project/:projectName',
      name: 'project',
      component: () => import('../views/Project.vue')
    },
    {
      path: '/surprise',
      name: 'Surprise',
      component:  () => import('../views/Surprise.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component:  () => import('../views/NotFound.vue')
    },
  ]
})

export default router