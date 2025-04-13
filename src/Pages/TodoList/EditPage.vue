<template lang="">
  <div class="flex flex-col gap-4 w-[500px] m-auto items-center">
    <div class="w-full items-start">
      <button @click="goBack" class="flex gap-2 text-gray-500">
        <i class="bi bi-arrow-left"></i>
        뒤로가기
      </button>
    </div>
    <h1 class="text-xl font-bold">Todo 편집 페이지</h1>

    <form class="flex flex-col gap-5 border rounded-lg p-10">
      <div class="flex gap-3 text-center items-center">
        <p class="w-[80px] text-left">제목</p>
        <input
          class="border rounded-md px-4 py-2 w-[300px]"
          type="text"
          placeholder="todo 제목을 입력하세요"
          v-model.trim="todo.todo"
        />
      </div>
      <div class="flex gap-3 text-center items-center">
        <p class="w-[80px] text-left">제목</p>
        <input
          class="border rounded-md px-4 py-2 w-[300px]"
          type="text"
          placeholder="todo 제목을 입력하세요"
          v-model.trim="todo.desc"
        />
      </div>

      <div class="w-full text-right px-3 flex justify-end gap-3">
        <p>완료</p>
        <input type="checkbox" v-model="todo.done" />
      </div>
      <button
        class="border rounded-full p-2 w-full mt-6"
        type="submit"
        @click="handleEditButtonClick"
      >
        수정 완료
      </button>
    </form>
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
