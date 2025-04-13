<template lang="">
  <div>
    <h1>Todo 조회하기</h1>

    <li v-for="(item, index) in todoArr">
      <input type="checkbox" disabled :checked="item.done === true" />
      <RouterLink :to="`/detail/${item.id}`">{{ item.todo }}</RouterLink>
    </li>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const todoStore = useTodoStore()
const todoArr = ref([])
const auth = useAuthStore()
const id = auth.getUserId()

const fetchTodo = async () => {
  const result = await todoStore.getTodoList({ memberId: id })
  todoArr.value = result
}

fetchTodo()
</script>
<style lang=""></style>
