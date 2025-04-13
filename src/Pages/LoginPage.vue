<template lang="">
  <div class="flex flex-col items-center gap-10">
    <h1 class="text-xl font-bold">Login</h1>
    <form class="flex flex-col gap-5">
      <div class="flex gap-3 text-center items-center">
        <p class="w-[100px]">이메일</p>
        <input
          class="border rounded-md px-4 py-2 w-[300px]"
          v-model.trim="email"
          type="text"
          placeholder="email을 입력하세요"
        />
      </div>
      <div class="flex gap-3 text-center items-center">
        <p class="w-[100px]">비밀번호</p>
        <input
          class="border rounded-md px-4 py-2 w-[300px]"
          v-model.trim="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <button
        class="mt-6 border rounded-full p-3 hover:bg-gray-100 transition-all"
        type="submit"
        @click="login"
      >
        로그인
      </button>
    </form>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const login = async (e) => {
  e.preventDefault()

  const auth = useAuthStore()
  const result = await auth.login({ email: email.value, password: password.value })

  if (result) {
    router.push('/')
  }
}
</script>
<style lang=""></style>
