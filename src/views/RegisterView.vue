<template>
  <div class="register-page">
    <RegisterForm />
  </div>
</template>

<script setup>
import RegisterForm from '@/components/Auth/RegisterForm.vue'
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6; /* Light mode background */
}

/* Dark mode override (optional if you support dark mode toggle) */
.dark .register-page {
  background-color: #1a202c; /* Dark mode background */
}
</style>
