<template>
    <div
        id="cv"
        class="cv-list-blok"
    >
        <div v-editable="blok">
            <h2 class="cv-list-blok__title">
                {{ blok.title }}
            </h2>

            <div class="cv-list-blok__list-wrapper">
                <StoryblokComponent
                    v-for="cvEntry in blok.cvEntries"
                    :key="cvEntry._uid"
                    :blok="cvEntry"
                />
            </div>
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

    &__list-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        padding-left: 18px;
    }
}
</style>
