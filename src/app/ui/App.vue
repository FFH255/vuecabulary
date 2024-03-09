<script setup lang="ts">

</script>

<template>
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
</style>