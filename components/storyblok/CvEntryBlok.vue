<template>
    <div class="cv-entry-blok">
        <div v-if="blok" v-editable="blok">
            <h4 class="cv-entry-blok__title">
                {{ blok.title }}
            </h4>

            <template v-if="blok.period_end">
                <span>{{ formatDate(blok.period_start) }}</span>
                <span>{{ formatDate(blok.period_end) }}</span>
            </template>
            <template v-else>
                <span>From {{ formatDate(blok.period_start) }}</span>
            </template>
            <div
                class="cv-entry-blok__text"
                v-html="textContent"
            />
            <NuxtImg
                v-if="blok.company_logo"
                class="cv-entry-blok__logo"
                width="180"
                provider="storyblok"
                :src="blok.company_logo.filename"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const props = defineProps({ blok: Object });
const textContent = computed(() => renderRichText(props.blok ? props.blok.description : ""));

function formatDate(date: string) {
    return dayjs(date).format("MMMM YYYY");
};
</script>

<style lang="scss">
.cv-entry-blok {
    margin-top: 60px;

    &__title {
        padding-top: 24px;
    }
}
</style>
