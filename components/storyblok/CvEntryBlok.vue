<template>
    <div class="cv-entry-blok">
        <div
            v-if="blok"
            v-editable="blok"
        >
            <div
                v-gsap.timeline.whenVisible.once
                class="cv-entry-blok__title-wrapper"
            >
                <p
                    v-gsap.add.order-1.from="{ opacity: 0, y: 24 }"
                    class="cv-entry-blok__sub-title"
                >
                    <span
                        class="cv-entry-blok__period"
                    >
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
                </p>
                <h3
                    v-gsap.add.order-0.from="{ x: -32, opacity: 0 }"
                    class="cv-entry-blok__title"
                >
                    {{ blok.title }}
                </h3>
            </div>

            <div
                v-gsap.whenVisible.once.stagger.from="{ opacity: 0, stagger: 0.4 }"
                class="cv-entry-blok__content"
            >
                <div
                    class="cv-entry-blok__text"
                    v-html="textContent"
                />

                <div
                    class="cv-entry-blok__logo-wrapper"
                >
                    <NuxtImg
                        v-if="blok.company_logo"
                        class="cv-entry-blok__logo"
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

const props = defineProps({ blok: Object });
const textContent = computed(() => renderRichText(props.blok ? props.blok.description : ""));

function formatDate(date: string) {
    return dayjs(date).format("MMMM YYYY");
};
</script>

<style lang="scss">
.cv-entry-blok {
    margin-top: 12px;

    &__sub-title {
        margin: 0;
    }

    &__period {
        color: var(--c-yellow);
        font: var(--f-h4);
    }

    &__location {
        font: var(--f-h4);
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
        width: 140px;
        align-self: flex-start;
        object-fit: contain;

        &-wrapper {
            position: sticky;
            top: 12px;
            width: fit-content;
            height: fit-content;
        }

        @include breakpoint-down(sm) {
            max-height: 80px;
            max-width: 100px;
        }

        @media (prefers-color-scheme: dark) {
            &-wrapper {
                display: flex;
                justify-content: center;
                background-color: var(--c-white);
                padding: 20px;
                aspect-ratio: 1 / 1;
                border-radius: 100%;

                img {
                    max-width: 100px;
                    max-height: 80px;
                    align-self: center;
                }

                @include breakpoint-down(sm) {
                    padding: 10px;

                    img {
                        max-width: 60px;
                        max-height: 50px;
                    }
                }
            }
        }
    }
}
</style>
