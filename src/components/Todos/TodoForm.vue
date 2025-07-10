<template>
  <form @submit.prevent="submitTodo" class="todo-form">
    <input v-model="todo.title" placeholder="Title" class="form-input" />
    <textarea v-model="todo.description" placeholder="Description" class="form-input" />
    <input type="date" v-model="todo.dueDate" class="form-input" />
    <select v-model="todo.priority" class="form-input">
      <option value="low">low</option>
      <option value="medium">medium</option>
      <option value="high">high</option>
    </select>
    <button type="submit" class="form-button">Save</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../../store/todoStore'

// Reactive todo object (2-way binding)
const todo = ref({
  title: '',
  description: '',
  dueDate: '',
  priority: 'medium'
})

const todoStore = useTodoStore()

function submitTodo() {
   const token = localStorage.getItem('token')
  if (!token) {
    alert('You are not authorized. Please log in first.')
    return
    
  }
  if (!todo.value.title || !todo.value.description) {
    alert('Title and Description are required')
    return
  }

  todoStore.addTodo({ ...todo.value }) // store it
  todo.value = { title: '', description: '', dueDate: '', priority: 'medium' } // reset
}
</script>


<style scoped>
.todo-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
}

.form-input {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.form-input:focus {
  border-color: #4a90e2;
  outline: none;
}

.form-button {
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #357ab8;
}
</style>
