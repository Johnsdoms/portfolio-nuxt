<template>
    <div class="teaser">
        <div v-editable="blok">
            <div class="teaser__headline-wrapper">
                <h1 class="teaser__headline">
                    {{ blok.headline_scaffold }}
                    <span
                        id="headline_to_animate"
                        class="teaser__headline-animated"
                    />
                </h1>
            </div>
        </div>

        <NuxtImg
            class="teaser__background-image"
            width="760"
            provider="storyblok"
            src="https://a.storyblok.com/f/287579/761x430/7c13d5e990/header_shape.svg"
        />
    </div>
</template>

<script setup>
import Typewriter from "typewriter-effect/dist/core";

const props = defineProps({ blok: Object });

onMounted(() => {
    new Typewriter("#headline_to_animate", {
        strings: [`${props.blok.headline_to_animate}.`, "Me."],
        autoStart: true,
        loop: true,
        pauseFor: 6500,
        cursor: "",
        wrapperClassName: "teaser__headline-animated-text",
    });
});
</script>

<style lang="scss">
.teaser {

    &__headline {
        &-wrapper {
            position: relative;
            min-height: 430px;
        }

        position: absolute;
        bottom: 20px;

    }

    &__headline-animated {
        &-text {
                @include backdrop-underline();
        }
    }

    &__background-image {
        position: absolute;
        right: 0;
        top: 0;
        z-index: -10;
    }
}
</style>
