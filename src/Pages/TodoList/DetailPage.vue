<template lang="">
  <div>
    <button @click="goBack">뒤로가기</button>
    <h1>detail page</h1>
    <h2>{{ todo.todo }}</h2>
    <p>{{ todo.desc }}</p>
    <input type="checkbox" disabled v-bind:checked="todo.done === true" />

    <button @click="handleEditButtonClick">수정하기</button>
    <button @click="handleDeleteButtonClick">삭제하기</button>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const id = route.params.id

const todo = ref([])

const goBack = () => {
  router.push('/todo')
}

const handleEditButtonClick = () => {
  router.push(`/edit/${id}`)
}

const handleDeleteButtonClick = () => {}

const fetchTodoDetail = async () => {
  const result = await axios.get(`http://localhost:3000/todos/${id}`)
  todo.value = result.data
}

fetchTodoDetail()
</script>
<style lang=""></style>
