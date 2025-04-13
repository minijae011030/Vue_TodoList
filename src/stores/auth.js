import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),

  actions: {
    async login({ email, password }) {
      try {
        const result = await axios.get(`http://localhost:3000/users?email=${email}`)

        if (result.data.length == 0) {
          alert('일치하는 이메일이 없습니다.')
          return false
        }
        if (result.data[0].password !== password) {
          alert('비밀번호가 틀립니다.')
          return false
        }

        this.user = {
          email: result.data[0].email,
          id: result.data[0].id,
          name: result.data[0].name,
        }
        this.isLoggedIn = true
        alert('로그인 성공')

        return true
      } catch (e) {
        alert('로그인 중 에러 발생')
        return false
      }
    },

    getUser() {
      try {
        return this.user
      } catch (e) {
        alert('user info를 불러오는 중 에러 발생')
        return null
      }
    },

    getUserId() {
      try {
        return this.user.id
      } catch (e) {
        alert('id를 불러오는 중 에러 발생')
        return null
      }
    },

    logout() {
      try {
        alert('로그아웃 하시겠습니까?')

        localStorage.removeItem('auth')
        this.user = null
        this.isLoggedIn = false

        alert('로그아웃이 완료되었습니다.')
        return true
      } catch (e) {
        alert('로그아웃 중 에러 발생')
        return false
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
        paths: ['user', 'isLoggedIn'],
      },
    ],
  },
})
