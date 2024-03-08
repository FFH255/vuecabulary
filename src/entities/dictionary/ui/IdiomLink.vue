<script setup lang="ts">
  type IdiomProps = {
    id: number
    part: string
    label: string
  }

  const props = defineProps<IdiomProps>()

  const url = `idiom/${props.part}/${props.id}/${props.label}`
</script>

<template>
  <router-link :to="url">
    {{ props.label }}
  </router-link>
</template>