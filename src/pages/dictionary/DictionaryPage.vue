<script setup lang="ts">
    import { IdiomLink } from '@/entities/dictionary';
    import { useGetDictionaryQuery } from '@/shared';

    const { data, isLoading, isError } = useGetDictionaryQuery({})
</script>

<template>
  <div class="page">
    <div class="about-dictionary">
      <span class="about-dictionary__title">
        О словаре <br/> <span class="__element_underlined">тульских</span> <br/> говоров
      </span>
    </div>
    <div class="dictionary">
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
    </div>
  </div>
</template>

<style scoped>
  .page {
    display: grid;
    grid-template-rows: 100dvh 1fr;
    background-color: black;
    gap: 3rem;
  }

  .about-dictionary {
    display: grid;
    place-content: center;
    background-image: url('/src/assets/dictionary.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about-dictionary__title {
    font-size: 5rem;
    color: var(--main);
    text-align: center;
  }

  .__element_underlined {
    font-style: italic;
    text-decoration: underline;
  }

  .loader {
    text-align: center;
  }

  .list {
    display: grid;
    gap: 8rem;
    color: var(--font);
  }

  .list .part {
    display: grid;
    width: 50vh;
    margin: auto;
    gap: .8rem;
  }

  .list .part .title {
    text-align: center;
    font-size: 2rem;
  }
</style>