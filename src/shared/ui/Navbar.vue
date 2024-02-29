<script lang="ts">
  export type NavbarItem = {
    label: string
    path: string
  }

interface INavbarProps {
  title: string
  items: NavbarItem[]
}
</script>

<script setup lang="ts">
  const props = defineProps<INavbarProps>()
</script>

<template>
  <header>
    <span class="sitename">
      {{ props.title }}
    </span>
    <router-link 
      v-for="item of props.items" 
      :to="item.path"
    >
      {{ item.label }}
    </router-link>
  </header>
</template>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-bottom: .05rem solid black;
  }

  .sitename {
    font-size: 1.3rem;
  }
</style>