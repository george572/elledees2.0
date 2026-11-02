import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TermsView from './views/TermsView.vue'
import PrivacyView from './views/PrivacyView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/terms', name: 'terms', component: TermsView },
    { path: '/privacy', name: 'privacy', component: PrivacyView },
  ],
  scrollBehavior(to, _from, saved) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 72 }
    }
    if (saved) return saved
    return { top: 0 }
  },
})

export default router
