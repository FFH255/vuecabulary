<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { Navbar } from '@/shared'
  import { NavbarItem } from "@/shared";

 const navbarItems: NavbarItem[] = [
    {
      label: 'Главная',
      path: '/',
    }
  ]
</script>

<template>
  <div class="page">
    <Navbar title="Словарь" :items="navbarItems"/>
    <div class="page__main">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
  .page {
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .page__main {
    margin-top: 5rem;
  }
</style>