<script setup lang="ts">

</script>

<template>
    <div class="home-page-header">
        <router-link to="/" class="home-page-header__link">Главная</router-link>  
        <router-link to="/dictionary" class="home-page-header__link">О словаре</router-link>  
        <router-link to="/authors" class="home-page-header__link">Об авторах</router-link>
    </div>
    <div class="page-wrapper">
        <router-view/>
    </div>
</template>

<style scoped>
    .page-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100dvh;
    }

    .home-page-header {
        position: absolute;
        right: 0;
        padding: 2rem;
        color: var(--font);
        font-size: 1.2rem;
        display: flex;
        gap: .8rem;
        justify-content: end;
    }

    .home-page-header__link {
        text-decoration: underline;
        cursor: pointer;
        color: var(--font);
    }
</style>