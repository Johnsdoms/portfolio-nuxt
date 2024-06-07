<template>
    <div
        v-editable="blok"
        class="main"
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
.main {
    background-color: var(--c-yellow);
}
</style>
