<template>
    <div
        v-editable="blok"
        class="page-blok"
    >
        <StoryblokComponent
            v-for="bodyBlok in blok.body"
            :key="bodyBlok._uid"
            :blok="bodyBlok"
        />
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss">
</style>
