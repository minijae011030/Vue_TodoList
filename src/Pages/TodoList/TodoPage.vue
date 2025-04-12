<template lang="">
  <div>
    <h1>Todo 조회하기</h1>

    <li v-for="(item, index) in todoArr">
      {{ item.id }}
      <RouterLink :to="`/detail/${item.id}`">{{ item.todo }}</RouterLink>
      <input type="checkbox" disabled :checked="item.done === true" />
    </li>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'

const todoArr = ref([])

const fetchTodo = async () => {
  const result = await axios.get('http://localhost:3000/todos')
  todoArr.value = result.data
}

fetchTodo()
</script>
<style lang=""></style>
