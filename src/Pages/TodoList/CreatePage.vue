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
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useAuthStore()
const id = auth.getUserId()

const todoStore = useTodoStore()

const todo = ref('')
const desc = ref('')

const addTodo = async () => {
  const newTodo = {
    id: id,
    todo: todo.value,
    desc: desc.value,
    done: false,
  }

  const result = await todoStore.createTodo({ newTodo })
  if (result) {
    router.push('/todo')
  }
}

const goBack = () => {
  router.push('/')
}
</script>
<style lang=""></style>
