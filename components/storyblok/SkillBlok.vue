<template>
    <div
        v-editable="blok"
        class="skill-blok"
    >
        <div class="skill-blok__logo-wrapper">
            <NuxtImg
                v-if="blok.img"
                class="skill-blok__logo"
                width="44"
                height="44"
                provider="storyblok"
                :src="blok.img.filename"
            />
        </div>
        <span class="skill-blok__name">
            {{ blok.name }}
        </span>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss">
.skill-blok {
    $p: &;

    display: flex;
    flex-direction: column;
    align-items: center;

    * {
        transition: all 0.1s ease-in-out;
    }

    &:hover {
        #{$p}__name {
            color: var(--c-green);
        }

        #{$p}__logo-wrapper {
            box-shadow: 0px 0px 8px 4px rgba(map-get($colors, green), 0.75);
        }

        #{$p}__logo {
            transform: scale(1.06);
        }
    }

    &__name {
        color: var(--c-text-color-white);
        text-align: center;
    }

    &__logo-wrapper {
        width: 80px;
        height: 80px;
        background-color: var(--c-white);
        border-radius: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
