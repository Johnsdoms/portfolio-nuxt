<template>
    <div class="teaser">
        <div
            v-editable="blok"
            class=""
        >
            <h1>
                {{ blok.headline_scaffold }}
                <span
                    id="headline_to_animate"
                    class="teaser-headline--animated"
                />
            </h1>
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
        cursor: "",
    });
});
</script>

<style lang="scss">
.teaser-headline--animated {
  color: var(--c-red);
}

.teaser {

  &__background-image {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
}
</style>
