<template lang="">
  <div class="flex flex-col gap-10 items-center w-[500px] m-auto">
    <h1 class="text-xl font-bold">{{ auth.user.name }}님의 TodoList</h1>

    <div class="w-full flex flex-col gap-3">
      <RouterLink :to="`/detail/${item.id}`" v-for="(item, index) in todoArr">
        <li
          class="list-none flex justify-between w-full px-4 py-3 border rounded-lg hover:bg-gray-100 transition-all"
        >
          <div class="flex gap-2">
            <input type="checkbox" disabled :checked="item.done === true" />
            <p>{{ item.todo }}</p>
          </div>
          <i class="bi bi-arrow-right-circle-fill"></i>
        </li>
      </RouterLink>
    </div>
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
