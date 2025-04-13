<template lang="">
  <div class="flex flex-col gap-4 w-[500px] m-auto items-center">
    <div class="w-full items-start">
      <button @click="goBack" class="flex gap-2 text-gray-500">
        <i class="bi bi-arrow-left"></i>
        뒤로가기
      </button>
    </div>
    <h1 class="text-xl font-bold">상세 페이지</h1>
    <div class="flex flex-col items-left w-full gap-3 border rounded-lg p-10">
      <div class="flex justify-between">
        <h2 class="text-lg font-bold">{{ todo.todo }}</h2>
        <div class="flex gap-2">
          <button class="text-sm" @click="handleEditButtonClick">수정하기</button>
          <button class="text-sm" @click="handleDeleteButtonClick">삭제하기</button>
        </div>
      </div>
      <div class="h-[100px] overflow-auto pt-4">
        <p>{{ todo.desc }}</p>
      </div>
      <p class="text-sm text-gray-400 mt-4">완료 여부: {{ todo.done ? '완료' : '미완료' }}</p>
    </div>
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
