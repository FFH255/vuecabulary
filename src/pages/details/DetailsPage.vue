<script setup lang="ts">
import { useGetDictionaryQuery } from '@/shared';


  interface DetailsProps {
    id: string
    part: string
  }

  const props = defineProps<DetailsProps>()
  const id = Number(props.id)

  const {data, } = useGetDictionaryQuery({})
</script>

<template>
  <div v-if="data">
    <span class="title">
      {{ data[props.part][id].title }}
    </span>
    <span class="description">
      {{ data[props.part][id].description }}
    </span>
  </div>
</template>

<style scoped>
  div {
    display: grid;
    gap: 1rem;
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
  }

  .description {
    max-width: 70vw;
    margin: auto;
  }
</style>