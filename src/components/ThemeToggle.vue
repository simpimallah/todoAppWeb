<template>
  <button @click="toggleTheme" class="btn">
    {{ isDark ? '☀️ Light Mode' : '🌙 Dark Mode' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.theme === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)
})

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.theme = isDark.value ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  border: none;
  background-color: #4a90e2;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #357ab8;
}
</style>
