<template>
    <div class="text-content-blok">
        <div v-editable="blok">
            <h2 class="text-content-blok__title">
                {{ blok.title }}
            </h2>

            <!-- <div> -->
            <div
                class="text-content-blok__text"
                v-html="textContent"
            />
            <!-- <NuxtImg
                    class="text-content-blok__portfolio-image"
                    width="320"
                    provider="storyblok"
                    :src="blok.portrait.filename"
                /> -->
            <!-- </div> -->
        </div>

        <NuxtImg
            class="text-content-blok__background-image"
            width="380"
            provider="storyblok"
            src="https://a.storyblok.com/f/287579/438x507/cd5e313ecd/bubble_shape.svg"
        />
    </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const textContent = computed(() => renderRichText(props.blok.text));
</script>

<style lang="scss">
.text-content-blok {
    margin-top: 80px;

    position: relative;
    margin-left: 20%;

    &__text {
        margin-left: 30px;
    }

    &__background-image {
        position: absolute;
        left: -340px;
        top: 20px;
        z-index: -10;
    }
}
</style>
