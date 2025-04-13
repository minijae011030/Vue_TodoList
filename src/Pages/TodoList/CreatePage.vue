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
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const id = auth.getUserId()

const todo = ref('')
const desc = ref('')

const addTodo = async () => {
  const newTodo = {
    id: id,
    todo: todo.value,
    desc: desc.value,
    done: false,
  }
  try {
    const result = await axios.post('http://localhost:3010/todos', newTodo)
    alert('생성이 완료되었습니다.')
    router.push('/todo')
  } catch (e) {
    alert('생성 중 오류')
  }
}

const goBack = () => {
  router.push('/')
}
</script>
<style lang=""></style>
