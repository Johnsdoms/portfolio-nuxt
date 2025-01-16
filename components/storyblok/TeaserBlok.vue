<template>
    <div class="teaser-blok">
        <div
            v-if="blok"
            v-editable="blok"
        >
            <div class="teaser-blok__headline-wrapper">
                <h1 class="teaser-blok__headline">
                    <span v-html="blok.headline_scaffold" />
                    <span
                        id="headline_to_animate"
                        class="teaser-blok__headline-animated"
                    />
                </h1>
            </div>
        </div>

        <NuxtImg
            class="teaser-blok__background-image"
            width="760"
            provider="storyblok"
            src="https://a.storyblok.com/f/287579/761x430/7c13d5e990/header_shape.svg"
        />

        <ContactMeButton
            class="teaser-blok__contact-cta"
            :has-shadow="false"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object });

onMounted(() => {
    if (props.blok && props.blok.headline_to_animate) {
        useTypewriter(
            "headline_to_animate",
            props.blok.headline_to_animate,
            "teaser-blok__headline-animated-text",
        );
    }
});
</script>

<style lang="scss">
.teaser-blok {

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

    &__contact-cta {
        position: absolute;
        top: 20px;
        right: 20px;
    }
}
</style>
