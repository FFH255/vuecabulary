<script setup lang="ts">
import { useGetDictionaryQuery } from '@/shared';
import { useGetImageQuery } from '../../shared/api/endpoints';


  interface DetailsProps {
    id: string
    part: string
  }

  const props = defineProps<DetailsProps>()
  const id = Number(props.id)

  const { data, } = useGetDictionaryQuery({})

  const { data: imageSrc } = useGetImageQuery({
    letter: props.part.toLocaleLowerCase(),
    id: Number(props.id) + 1,
  })
</script>

<template>
  <div v-if="data && imageSrc">
    <h2>
      {{ data[props.part][id].title }}
    </h2>
    <img :src="imageSrc" :alt="data[props.part][id].title"/>
    <span class="description">
      {{ data[props.part][id].description }}
    </span>
  </div>
</template>

<style scoped>
  div {
    display: grid;
    gap: 2rem;
    justify-items: center;
  }

  .description {
    max-width: 70vw;
    margin: auto;
  }
</style>