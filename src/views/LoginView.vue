<template>
  <div class="login-page">
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from '@/components/Auth/LoginForm.vue'
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6; /* light gray */
}

/* Optional dark mode support */
.dark .login-page {
  background-color: #1a202c; /* dark background */
}
</style>
