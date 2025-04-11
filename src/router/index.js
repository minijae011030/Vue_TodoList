import HomePage from '@/Pages/HomePage.vue'
import CreatePage from '@/Pages/TodoList/CreatePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePage,
    },
  ],
})

export default router
