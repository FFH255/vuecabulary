<script setup lang="ts">
  import { Navbar } from '@/shared'
  import { navbarItems } from '../lib/routes'
</script>

<template>
  <Navbar :items="navbarItems" title="Словарь" />
  <div class="main">
    <router-view/>
  </div>
</template>

<style scoped>
  .main {
    margin-top: 5rem;
  }
</style>