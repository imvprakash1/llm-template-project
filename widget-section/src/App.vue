<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <Suspense>
    <router-view />
  </Suspense>
</template>

<style></style>
