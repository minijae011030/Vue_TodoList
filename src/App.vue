<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    /
    <RouterLink to="/todo">TODO</RouterLink>
    /
    <RouterLink to="/create">CREATE</RouterLink>
  </nav>

  <RouterView />
</template>
