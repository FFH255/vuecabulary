<script setup lang="ts">
import { useGetDictionaryQuery } from '@/shared';
import { useGetImageQuery } from '../../shared/api/endpoints';


  interface DetailsProps {
    id: string
    part: string
    title: string
  }

  const props = defineProps<DetailsProps>()
  const id = Number(props.id)

  const { data, } = useGetDictionaryQuery({})

  const { data: imageSrc } = useGetImageQuery({
    letter: props.part.toLocaleLowerCase(),
    title: props.title,
  })
</script>

<template>
  <div class="page">
    <div v-if="data && imageSrc">
    <h2 class="title">
      {{ data[props.part][id].title }}
    </h2>
    <img :src="imageSrc" :alt="data[props.part][id].title"/>
    <span class="description">
      {{ data[props.part][id].description }}
    </span>
  </div>
  </div>
</template>

<style scoped>
  .page {
    background-color: black;
  }

  div {
    background-color: black;
    color: var(--font);
    display: grid;
    gap: 6rem;
    justify-items: center;
    align-content: start;
  }

  .title {
    margin-top: 8rem;
    color: var(--main);
    font-size: 2rem;
  }

  .description {
    max-width: 70vw;
    margin: auto;
    font-size: 1.3rem;
    line-height: 1.5;
  }
</style>