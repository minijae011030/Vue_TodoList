import HomePage from '@/Pages/HomePage.vue'
import CreatePage from '@/Pages/TodoList/CreatePage.vue'
import DetailPage from '@/Pages/TodoList/DetailPage.vue'
import EditPage from '@/Pages/TodoList/EditPage.vue'
import TodoPage from '@/Pages/TodoList/TodoPage.vue'
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
      path: '/todo',
      name: 'todo',
      component: TodoPage,
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePage,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailPage,
      props: true,
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditPage,
      props: true,
    },
  ],
})

export default router
