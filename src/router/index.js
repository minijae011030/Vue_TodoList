import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import CreatePage from '@/pages/TodoList/CreatePage.vue'
import DetailPage from '@/pages/TodoList/DetailPage.vue'
import EditPage from '@/pages/TodoList/EditPage.vue'
import TodoPage from '@/pages/TodoList/TodoPage.vue'
import { useAuthStore } from '@/stores/auth'
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
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailPage,
      meta: { requiresAuth: true },
      props: true,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditPage,
      meta: { requiresAuth: true },
      props: true,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!auth.isLoggedIn) {
      alert('로그인이 필요합니다.')
      return next({ name: 'login' })
    }
  }

  next()
})

export default router
