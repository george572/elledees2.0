import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/click-and-collect',
      name: 'Click&Collect',
      component: () => import('../views/ClickAndCollect.vue')
    },

  ]
})

export default router
