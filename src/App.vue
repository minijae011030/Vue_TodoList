<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const router = useRouter()
const auth = useAuthStore()
const isLoggedIn = auth.isLoggedIn

const logout = async (e) => {
  e.preventDefault()
  const result = auth.logout()

  if (result) {
    router.push('/')
  }
}
</script>

<template>
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    /
    <RouterLink to="/login">LOGIN</RouterLink>
    /
    <RouterLink to="/todo">TODO</RouterLink>
    /
    <RouterLink to="/create">CREATE</RouterLink>

    <button v-on:click="logout" v-if="isLoggedIn === true">로그아웃</button>
  </nav>

  <RouterView />
</template>
