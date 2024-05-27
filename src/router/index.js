import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('../views/WelcomeView.vue')
    },
    {
      path: '/menu',
      name: 'Menu page',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/terms',
      name: 'Terms and conditions',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/nutrition-info',
      name: 'Nutrition Info',
      component: () => import('../views/NutritionInfoView.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' })
        }, 10) // adjust time according to your needs
      })
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 }
    }
  }
})

export default router