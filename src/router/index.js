import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue'),
      children: [
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
      ],
    },
  ]
})

export default router
