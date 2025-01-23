<template>
    <div class="text-content-blok">
        <div
            v-if="blok"
            v-editable="blok"
        >
            <h2 class="text-content-blok__title">
                {{ blok.title }}
            </h2>

            <div class="text-content-blok__content-wrapper">
                <!-- additional wrapper for bottom floating layout -->
                <div class="text-content-blok__floating-image-wrapper">
                    <div
                        class="text-content-blok__portrait-image-wrapper"
                        :class="{ 'text-content-blok__portrait-image-wrapper--animate': animateDecoration }"
                    >
                        <NuxtImg
                            ref="image"
                            v-gsap.whenVisible.once.from="{ autoAlpha: 0, x: 50 }"
                            class="text-content-blok__portrait-image"
                            :height="IMAGE_HEIGHT"
                            provider="storyblok"
                            :src="blok.portrait.filename"
                        />
                    </div>
                    <div
                        class="text-content-blok__text"
                        v-html="textContent"
                    />
                </div>
            </div>
        </div>

        <NuxtImg
            v-gsap.parallax.slower-2
            class="text-content-blok__background-image"
            width="380"
            provider="storyblok"
            src="https://a.storyblok.com/f/287579/438x507/cd5e313ecd/bubble_shape.svg"
        />
    </div>
</template>

<script setup lang="ts">
import { useElementVisibility, watchOnce } from "@vueuse/core";

const props = defineProps({ blok: Object });
const textContent = computed(() => props.blok ? renderRichText(props.blok.text) : "");

// do this so the image height and shape outside style are locked to the same value
const IMAGE_HEIGHT = 320;
const shapeOutsideStyle = `inset(calc(100% - ${IMAGE_HEIGHT + 40}px) 0 0)`; // 40px is padding around image

const imageRef = useTemplateRef<HTMLElement>("image");
const imageVisible = useElementVisibility(imageRef);
const animateDecoration = ref(false);

watchOnce(imageVisible, (_isVisible) => {
    animateDecoration.value = true;
});
</script>

<style lang="scss">
.text-content-blok {
    margin-top: 80px;

    position: relative;
    margin-left: 10%;

    @include breakpoint-down(md) {
        margin-left: 4%;
    }

    &__text {
        margin-left: 30px;
    }

    &__background-image {
        position: absolute;
        left: -180px;
        top: 80px;
        z-index: -10;

        @include breakpoint-down(md) {
            left: -280px;
        }

        @include breakpoint-down(sm) {
            left: -310px;
        }
    }

    &__content-wrapper {
        display: flex;
    }

    &__portrait-image {
        padding: 20px;

        &-wrapper {
            float: right;
            margin-right: -100px;
            height: 100%;
            display: flex;
            align-items: flex-end;
            shape-outside: v-bind(shapeOutsideStyle);

            position: relative;

            @include breakpoint-down(md) {
                margin-right: -40px;
            }

            @include breakpoint-down(sm) {
                margin-right: 0;
            }

            @keyframes expandWidth {
                0% {
                    width: 0;
                }

                100% {
                    width: calc(100% - 40px); // reduce by image padding
                }
            }

            &--animate {
            &::before {
                content: "";
                position: absolute;
                background: var(--c-yellow);
                height: 16px;
                    width: 0;
                bottom: 36px;
                left: 0;
                z-index: 10;
                    animation: expandWidth .8s cubic-bezier(0.69, 0.02, 0.4, 1) 0.4s  forwards;
                }
            }
        }
    }
}
</style>
