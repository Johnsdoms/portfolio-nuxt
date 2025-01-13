<template>
    <div class="cv-entry-blok">
        <div
            v-if="blok"
            v-editable="blok"
        >
            <div class="cv-entry-blok__title-wrapper">
                <span class="cv-entry-blok__period">
                    <template v-if="blok.period_end">
                        <span>{{ formatDate(blok.period_start) }}</span>
                        -
                        <span>{{ formatDate(blok.period_end) }}</span>
                    </template>
                    <template v-else>
                        <span>From {{ formatDate(blok.period_start) }}</span>
                    </template>
                </span>
                <span
                    v-if="blok.location"
                    class="cv-entry-blok__location"
                >
                    | 📍 {{ blok.location }}
                </span>
                <h3 class="cv-entry-blok__title">
                    {{ blok.title }}
                </h3>
            </div>

            <div class="cv-entry-blok__content">
                <div
                    class="cv-entry-blok__text"
                    v-html="textContent"
                />

                <div
                    class="cv-entry-blok__logo-wrapper"
                    :class="{ 'cv-entry-blok__logo-wrapper--has-background': isDark }"
                >
                    <NuxtImg
                        v-if="blok.company_logo"
                        class="cv-entry-blok__logo"
                        width="140px"
                        provider="storyblok"
                        :src="blok.company_logo.filename"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { usePreferredDark } from "@vueuse/core";

const props = defineProps({ blok: Object });
const textContent = computed(() => renderRichText(props.blok ? props.blok.description : ""));

const isDark = usePreferredDark();

function formatDate(date: string) {
    return dayjs(date).format("MMMM YYYY");
};
</script>

<style lang="scss">
.cv-entry-blok {
    margin-top: 12px;

    &__period {
        color: var(--c-yellow);
        font: var(--f-h4);
    }

    &__location {
        font: var(--f-h4);
        font-weight: regular;
    }

    &__content {
        margin-top: 12px;

        display: flex;
        column-gap: 16px;

        & > :first-child {
            flex: 1;
        }
    }

    &__text {
        p {
            margin-top: 0;
        }
    }

    &__logo {
        max-height: 140px;
        align-self: flex-start;
        object-fit: contain;

        &-wrapper {
            &--has-background {
                display: flex;
                justify-content: center;
                background-color: var(--c-white);
                padding: 20px;
                width: 100px;
                height: 100px;
                border-radius: 100%;

                img {
                    max-width: 100px;
                    max-height: 80px;
                    align-self: center;
                }
            }
        }
    }
}
</style>
