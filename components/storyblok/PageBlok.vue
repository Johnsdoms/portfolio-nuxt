<template>
    <div
        v-editable="blok"
        class="page-blok"
    >
        <StoryblokComponent
            v-for="bodyBlok in blok.body"
            :key="bodyBlok._uid"
            class="page-blok__body-section"
            :blok="bodyBlok"
        />
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss">
.page-blok {
    &__body-section {
        padding: 0 20%;
    }
}
</style>
