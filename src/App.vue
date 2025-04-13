<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const router = useRouter()
const auth = useAuthStore()

const logout = async (e) => {
  e.preventDefault()
  const result = auth.logout()

  if (result) {
    router.push('/')
  }
}
const login = async (e) => {
  e.preventDefault()

  router.push('/login')
}
</script>

<template>
  <nav class="flex gap-2 w-full m-auto text-center justify-around items-center mb-9 border-b py-4">
    <h1 class="text-xl font-bold">TodoList</h1>
    <div class="flex gap-4 justify-around text-center">
      <RouterLink to="/">HOME</RouterLink>

      <RouterLink to="/todo">TODO</RouterLink>

      <RouterLink to="/create">CREATE</RouterLink>
    </div>

    <div class="w-[100px]">
      <button
        v-on:click="logout"
        v-if="auth.isLoggedIn === true"
        class="border px-4 py-1 rounded-md"
      >
        로그아웃
      </button>
      <button v-on:click="login" v-else class="border px-4 py-1 rounded-md">로그인</button>
    </div>
  </nav>

  <RouterView />
</template>
