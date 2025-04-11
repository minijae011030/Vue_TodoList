<template lang="">
  <div>
    <h1>Todo 생성 페이지</h1>

    <p>todo: <input type="text" v-model.trim="todo" /></p>
    <p>desc: <input type="text" v-model.trim="desc" /></p>

    <button @click="addTodo">작성</button>
    <button @click="goBack">취소</button>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const todo = ref('')
const desc = ref('')

const addTodo = async () => {
  const newTodo = {
    todo: todo.value,
    desc: desc.value,
    done: false,
  }
  const result = await axios.post('http://localhost:3000/todos', newTodo)
}

const goBack = () => {
  router.push('/')
}
</script>
<style lang=""></style>
