<template>
  <form @submit.prevent="handleRegister" class="register-form">
    <h2 class="form-title">Register</h2>

    <input
      v-model="name"
      type="text"
      placeholder="Full Name"
      class="form-input"
      required
    />

    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="form-input"
      required
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="form-input"
      required
    />

    <button type="submit" class="form-button">
      Register
    </button>

    <p v-if="error" class="error-message">{{ error }}</p>
    <p v-if="success" class="success-message">Registration successful!</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const success = ref(false)
const router = useRouter()

const handleRegister = async () => {
  try {
    const res = await axios.post('/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value
    })

    error.value = ''
    success.value = true
    setTimeout(() => router.push('/login'), 1500)
  } catch (err) {
    success.value = false
    error.value = err.response?.data?.message || 'Registration failed'
  }
}
</script>

<style scoped>
.register-form {
  background-color: white;
  color: #333;
  width: 400px;
  margin: 50px auto;
  padding: 34px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
}

.form-input {
  /* display: block; */
  width: 94%;
  padding: 10px 12px;
  margin-bottom: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
}

.form-input:focus {
  border-color: #0056b3;
  outline: none;
}

.form-button {
  width: 100%;
  padding: 10px 12px;
  background-color: #0056b3;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #84bffd;
}

.error-message {
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}

.success-message {
  color: green;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
</style>
