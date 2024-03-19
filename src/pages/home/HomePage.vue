<script setup lang="ts">
  
</script>

<template>
  <div class="home-page">
    <div class="home-page-main">
      <span class="home-page-main__title">
        Словарь тульских говоров
      </span>
      <span class="home-page-main__description">
        Пилотный вариант пятой части «Словаря тульских говоров» обобщает структурную и содержательную традицию семи выпусков «Материалов к словарю тульских говоров» (Тула, 2008, 2010, 2011, 2012, 2013, 2014, 2017), включающих в том числе устойчивые сочетания слов. Он знаменует переход к завершающему этапу работы по созданию диалектного словаря Тульского региона.
      </span>
      <router-link to="/dictionary" class="home-page-main__button">О словаре →</router-link>
    </div>
  </div>
</template>

<style scoped>
  .home-page {
    display: grid;
    grid-template-rows: 1fr;
    background-image: url('/src/assets/home.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2rem 5rem;
  }

  .home-page-main {
    display: grid;
    place-content: center;
    gap: 1.4rem;
  }

  .home-page-main__title {
    color: var(--main);
    font-size: 8rem;
    line-height: .9;
  }

  .home-page-main__description {
    color: var(--font);
    font-size: 1.2rem;
    line-height: 1.4;
    max-width: 70%;
  }

  .home-page-main__button {
    width: fit-content;
    font-size: 1.2rem;
    padding: .8rem 2.4rem;
    background-color: transparent;
    border: 2px solid var(--font);
    color: var(--font);
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
</style>