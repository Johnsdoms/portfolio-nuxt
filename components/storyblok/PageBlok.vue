<template>
    <div
        v-editable="blok"
        class="page-blok"
    >
        <StoryblokComponent
            v-for="blok in blok.body"
            :key="blok._uid"
            :blok="blok"
        />
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss">
</style>
