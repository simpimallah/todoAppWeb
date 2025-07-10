<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="logo">TodoApp</router-link>

      <button @click="toggle" class="hamburger">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <div :class="['nav-links', open ? 'open' : '']">
        <router-link to="/todos" class="nav-item">Home</router-link>
        <!-- <router-link to="/todos" class="nav-item">Todos</router-link> -->
         <router-link to="/register" class="nav-item">Register</router-link>
        <router-link to="/login" class="nav-item">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
const toggle = () => (open.value = !open.value);
</script>

<style scoped>
.navbar {
  background-color: #2563eb; /* blue-600 */
  color: white;
  padding: 12px 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.hamburger {
  background: none;
  border: none;
  display: none;
  cursor: pointer;
}

.icon {
  height: 24px;
  width: 24px;
  stroke: white;
}

.nav-links {
  display: flex;
  gap: 16px;
}

.nav-item {
  color: white;
  text-decoration: none;
  padding: 8px 0;
}

.nav-item:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
