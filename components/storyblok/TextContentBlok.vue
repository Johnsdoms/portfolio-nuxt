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
                    <div class="text-content-blok__portrait-image-wrapper">
                        <NuxtImg
                            ref="portraitImage"
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
            class="text-content-blok__background-image"
            width="380"
            provider="storyblok"
            src="https://a.storyblok.com/f/287579/438x507/cd5e313ecd/bubble_shape.svg"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object });
const textContent = computed(() => props.blok ? renderRichText(props.blok.text) : "");

// do this so the image height and shape outside style are locked to the same value
const IMAGE_HEIGHT = 320;
const shapeOutsideStyle = `inset(calc(100% - ${IMAGE_HEIGHT}px) 0 0)`;
</script>

<style lang="scss">
.text-content-blok {
    margin-top: 80px;

    position: relative;
    margin-left: 10%;

    &__text {
        margin-left: 30px;
    }

    &__background-image {
        position: absolute;
        left: -180px;
        top: 80px;
        z-index: -10;
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
        }
    }

    &__text {
        // text-align: left;
    }

}
</style>
