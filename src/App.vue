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
    /
    <RouterLink to="/edit">EDIT</RouterLink>
  </nav>

  <RouterView />
</template>
