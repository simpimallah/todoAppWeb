<template>
  <div>
    <NavBar />         <!-- 👈 Add the Navbar here -->
    <router-view />    <!-- Displays page components -->
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';  // 👈 Adjust the path if needed
</script>
