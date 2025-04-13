<template lang="">
  <div>
    <button @click="goBack">뒤로가기</button>
    <h1>detail page</h1>
    <h2>{{ todo.todo }}</h2>
    <p>{{ todo.desc }}</p>
    <p>{{ todo.done ? 'true' : 'false' }}</p>

    <button @click="handleEditButtonClick">수정하기</button>
    <button @click="handleDeleteButtonClick">삭제하기</button>
  </div>
</template>
<script setup>
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const todoStore = useTodoStore()

const id = route.params.id

const todo = ref([])

const goBack = () => {
  router.push('/todo')
}

const handleEditButtonClick = () => {
  router.push(`/edit/${id}`)
}

const handleDeleteButtonClick = async () => {
  if (todoStore.deleteTodo({ id })) {
    router.push('/todo')
  }
}

const fetchTodoDetail = async () => {
  const result = await todoStore.getTodoDetail({ id })
  todo.value = result
}

fetchTodoDetail()
</script>
<style lang=""></style>
