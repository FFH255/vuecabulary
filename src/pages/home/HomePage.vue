<script setup lang="ts">
  import { IdiomLink } from '@/entities/dictionary';
  import { useGetDictionaryQuery } from '@/shared';

  const { data, isLoading, isError } = useGetDictionaryQuery({})
</script>

<template>
  <div v-if="isError">Error</div>
  <div v-else-if="isLoading">Loading</div>
  <template v-else>
    <div class="list">
      <div v-for="(value, part) of data" class="part">
      <span class="title">
        {{ part }}
      </span>
      <IdiomLink 
        v-for="(idiom, index) in value" 
        :id="index" 
        :part="String(part)"
        :label="idiom.title"
      />
    </div>
    </div>
  </template>
</template>

<style scoped>
  .list {
    display: grid;
    gap: 3rem;
  }

  .list .part {
    display: grid;
    width: 50vh;
    margin: auto;
    gap: .5rem;
  }

  .list .part .title {
    text-align: center;
  }
</style>