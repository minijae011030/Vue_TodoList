<template lang="">
  <div class="flex flex-col gap-4 w-[500px] m-auto items-center">
    <div class="w-full items-start">
      <button @click="goBack" class="flex gap-2 text-gray-500">
        <i class="bi bi-arrow-left"></i>
        뒤로가기
      </button>
    </div>
    <h1 class="text-xl font-bold">Todo 생성 페이지</h1>

    <form class="flex flex-col gap-5 border rounded-lg p-10">
      <div class="flex gap-3 text-center items-center">
        <p class="w-[80px] text-left">제목</p>
        <input
          class="border rounded-md px-4 py-2 w-[300px]"
          type="text"
          placeholder="todo 제목을 입력하세요"
          v-model.trim="todo"
        />
      </div>
      <div class="flex gap-3 text-center items-center">
        <p class="w-[80px] text-left">설명</p>
        <input
          class="border rounded-md px-4 py-2 w-[300px]"
          type="text"
          placeholder="todo 설명을 입력하세요"
          v-model.trim="desc"
        />
      </div>

      <button class="border rounded-full p-2 w-full mt-6" type="submit" @click="addTodo">
        작성
      </button>
    </form>
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
