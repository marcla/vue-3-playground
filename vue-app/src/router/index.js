import HomePage from '@/components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/login',
      component: () => import('@/components/LoginPage.vue'),
    },
    {
      path: '/users',
      component: () => import('@/components/UsersPage.vue'),
    },
  ],
})

export default router
