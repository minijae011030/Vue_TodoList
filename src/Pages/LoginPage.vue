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
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const login = async () => {
  const result = await axios.get(`http://localhost:3000/users?email=${email.value}`)
  console.log(result.data)

  if (result.data.length == 0) {
    alert('일치하는 이메일이 없습니다.')
    return
  }

  if (result.data[0].password !== password.value) {
    alert('비밀번호가 틀립니다.')
    return
  }

  localStorage.setItem('auth', 'true')
  alert('로그인 성공')

  router.push('/todo')
}
</script>
<style lang=""></style>
