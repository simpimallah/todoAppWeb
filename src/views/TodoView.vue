<template>
  <div class="app-wrapper">
    <div class="todo-container">
      <ThemeToggle class="theme-toggle" />
      <h1 class="todo-title">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  </div>
</template>

<script setup>
import TodoForm from '@/components/Todos/TodoForm.vue'
import TodoList from '@/components/Todos/TodoList.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background-color: #f3f4f6; /* light background */
  color: #1a202c;            /* dark text */
}

/* Optional dark mode support */
.dark .app-wrapper {
  background-color: #1a202c;
  color: #f9fafb;
}

.todo-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.todo-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.theme-toggle {
  float: right;
  margin-bottom: 10px;
}
</style>
