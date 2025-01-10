<script setup>
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>

<template>
    <StoryblokComponent
        v-if="story"
        class="home__content"
        :blok="story.content"
    />

    <Footer class="home__footer" />
</template>

<style lang="scss">
</style>
