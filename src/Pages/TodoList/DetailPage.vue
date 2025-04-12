<template lang="">
  <div>
    <button @click="goBack">뒤로가기</button>
    <h1>detail page</h1>
    <h2>{{ todo.todo }}</h2>
    <p>{{ todo.desc }}</p>

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

const handleDeleteButtonClick = async () => {
  if (window.confirm('삭제하시겠습니까?')) {
    const result = await axios.delete(`http://localhost:3000/todos/${id}`)
    console.log('삭제되었습니다.')
    router.push('/todo')
  }
}

const fetchTodoDetail = async () => {
  const result = await axios.get(`http://localhost:3000/todos/${id}`)
  todo.value = result.data
}

fetchTodoDetail()
</script>
<style lang=""></style>
