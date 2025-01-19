<script setup>
import { useFavicon, usePreferredDark } from "@vueuse/core";

useHead({
    title: "// jonashamann.com",
    meta: [
        { name: "description", content: "This is the website of: Jonas." },
    ],
});

const isDark = usePreferredDark();
const favicon = computed(() => isDark.value ? "favicon_dark.svg" : "favicon.svg");

useFavicon(favicon);

const story = await useAsyncStoryblok("home", { version: import.meta.env.VITE_STORYBLOK_MODE });
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
