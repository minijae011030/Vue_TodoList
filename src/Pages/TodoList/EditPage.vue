<template lang="">
  <div>
    <h1>edit page</h1>
    <p>todo title: <input type="text" v-model.trim="todo.todo" /></p>
    <p>todo desc: <input type="text" v-model.trim="todo.desc" /></p>
    <input type="checkbox" v-model="todo.done" />
    <button @click="handleEditButtonClick">수정 완료</button>
    <button @click="goBack">취소</button>
  </div>
</template>
<script setup>
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const todoStore = useTodoStore()

const params = route.params
const id = params.id

const todo = ref([])

const fetchTodoDetail = async () => {
  const result = await todoStore.getTodoDetail({ id })
  todo.value = result
}

const handleEditButtonClick = async () => {
  const newItem = {
    todo: todo.value.todo,
    desc: todo.value.desc,
    done: todo.value.done,
  }

  const result = await todoStore.editTodo({ id, newItem })

  if (result) {
    router.push(`/detail/${id}`)
  }
}

const goBack = () => {
  if (window.confirm('수정을 취소 하시겠습니까?')) {
    router.push(`/detail/${id}`)
  }
}

fetchTodoDetail()
</script>
<style lang=""></style>
