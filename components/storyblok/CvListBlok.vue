<template>
    <div class="cv-list-blok">
        <div v-editable="blok">
            <h2 class="cv-list-blok__title">
                {{ blok.title }}
            </h2>

            <StoryblokComponent
                v-for="cvEntry in blok.cvEntries"
                :key="cvEntry._uid"
                :blok="cvEntry"
            />
        </div>
    </div>
</template>

<script setup>
const _props = defineProps({ blok: Object });
</script>

<style lang="scss">
.cv-list-blok {
    padding-top: 24px;
    padding-bottom: 24px;

    &__title {
        color: var(--c-green);
    }
}
</style>
