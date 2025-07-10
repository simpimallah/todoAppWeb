import { defineStore } from 'pinia'
import api from '../services/api'  // ✅ uses interceptor for token

export const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [] }),

  actions: {
    async fetchTodos() {
      const res = await api.get('/todos')
      this.todos = res.data
    },

    async addTodo(todo) {
      const res = await api.post('/todos', todo)
      this.todos.push(res.data)
    },

    async deleteTodo(id) {
      await api.delete(`/todos/${id}`)
      this.todos = this.todos.filter(t => t._id !== id)
    },

    async toggleTodo(todo) {
      const res = await api.put(`/todos/${todo._id}`, { completed: !todo.completed })
      const index = this.todos.findIndex(t => t._id === todo._id)
      this.todos[index] = res.data
    }
  }
})
