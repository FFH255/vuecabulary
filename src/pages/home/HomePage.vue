<script setup lang="ts">
  import { IdiomLink } from '@/entities/dictionary';
  import { useGetDictionaryQuery } from '@/shared';

  const { data, isLoading, isError } = useGetDictionaryQuery({})
</script>

<template>
  <h2 v-if="isError">Возникла ошибка</h2>
  <h2 class="loader" v-else-if="isLoading">Загрузка...</h2>
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
  .loader {
    text-align: center;
  }

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