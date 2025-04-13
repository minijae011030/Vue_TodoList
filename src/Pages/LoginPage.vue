<template lang="">
  <div>
    <h1>Login</h1>
    <form>
      <p>이메일: <input v-model.trim="email" type="text" placeholder="email을 입력하세요" /></p>
      <p>
        비밀번호:
        <input v-model.trim="password" type="password" placeholder="비밀번호를 입력하세요" />
      </p>

      <button type="submit" @click="login">로그인</button>
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
