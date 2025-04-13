import axios from 'axios'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  actions: {
    async createTodo({ newTodo }) {
      try {
        if (window.confirm('생성하시겠습니까?')) {
          const result = await axios.post('http://localhost:3010/todos', newTodo)
          alert('생성이 완료되었습니다.')
          return true
        }
        return false
      } catch (e) {
        alert('생성 중 오류')
        return false
      }
    },
    async editTodo({ id, newItem }) {
      try {
        if (window.confirm('수정하시겠습니까?')) {
          const result = await axios.put(`http://localhost:3010/todos/${id}`, newItem)
          alert('수정이 완료되었습니다.')
          return true
        }
        return false
      } catch (e) {
        alert('데이터 수정 중 오류 발생')
        return false
      }
    },
    async deleteTodo({ id }) {
      try {
        if (window.confirm('삭제하시겠습니까?')) {
          const result = await axios.delete(`http://localhost:3010/todos/${id}`)
          console.log('삭제되었습니다.')
          return true
        }
        return false
      } catch {
        alert('데이터 삭제 중 오류 발생')
        return false
      }
    },
    async getTodoList({ memberId }) {
      try {
        const result = await axios.get(`http://localhost:3010/todos?memberId=${memberId}`)
        return result.data
      } catch (e) {
        alert('데이터 불러오는 중 오류 발생')
        return null
      }
    },
    async getTodoDetail({ id }) {
      try {
        const result = await axios.get(`http://localhost:3010/todos/${id}`)
        return result.data
      } catch (e) {
        alert('데이터 불러오는 중 오류 발생')
        return null
      }
    },
  },
})
