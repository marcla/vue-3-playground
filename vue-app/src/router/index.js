import HomePage from '@/views/HomePage.vue'
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
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/users',
      component: () => import('@/views/UsersPage.vue'),
    },
    {
      path: '/users/:id',
      component: () => import('@/views/UserPage.vue'),
    },
  ],
})

export default router
