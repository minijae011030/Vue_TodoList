<template lang="">
  <div>
    <h1>edit page</h1>
    <p>todo title: <input type="text" v-model.trim="todo.todo" /></p>
    <p>todo desc: <input type="text" v-model.trim="todo.desc" /></p>
    <button @click="handleEditButtonClick">수정 완료</button>
    <button @click="goBack">취소</button>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const params = route.params
const id = params.id

const todo = ref([])
const fetchTodoDetail = async () => {
  const result = await axios.get(`http://localhost:3000/todos/${id}`)
  todo.value = result.data
}

const handleEditButtonClick = async () => {
  if (window.confirm('수정하시겠습니까?')) {
    const newItem = {
      todo: todo.value.todo,
      desc: todo.value.desc,
      done: todo.value.done,
    }

    const result = await axios.put(`http://localhost:3000/todos/${id}`, newItem)
    alert('수정이 완료되었습니다.')
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
