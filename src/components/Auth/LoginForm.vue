<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <h2 class="login-title">Login</h2>

    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="input"
      required
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="input"
      required
    />

    <button type="submit" class="btn-submit">
      Login
    </button>

    <p v-if="error" class="error-message">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const res = await axios.post('/auth/login', { email: email.value, password: password.value })
    localStorage.setItem('token', res.data.token)
    error.value = ''
    router.push('/')
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed'
  }
}
</script>

<style scoped>
.login-form {
  background-color: white;
  color: #333;
  width: 400px;
  margin: 50px auto;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
}

.input {
  display: block;
  width: 94%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f9f9f9;
}

.input:focus {
  border-color: #007BFF;
  outline: none;
}

.btn-submit {
  width: 100%;
  padding: 10px 12px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
</style>
