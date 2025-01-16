<template>
    <a
        class="contact-me-button"
        href="https://www.linkedin.com/in/jonas-hamann-90887120b/?locale=en_US"
        target="_blank"
        rel="noopener noreferrer"
    >
        <div
            class="contact-me-button__wrapper"
            :class="{ 'contact-me-button__wrapper--has-shadow': hasShadow }"
        >
            <img
                class="contact-me-button__icon"
                src="~/assets/icons/linked_in.svg"
                alt="LinkedIn Logo"
            >
            <span class="contact-me-button__text">Contact me!</span>
        </div>
    </a>
</template>

<script setup lang="ts">
interface Props {
    hasShadow?: boolean;
}

const _props = withDefaults(defineProps<Props>(), {
    hasShadow: true,
});
</script>

<style lang="scss">
.contact-me-button {
    $p: &;

    text-decoration: none;

    &__wrapper {
        width: auto;
        height: 42px;
        padding: 0 10px;
        background-color: var(--c-white);
        border-radius: 48px;
        display: flex;
        align-items: center;
        justify-content: center;

        &--has-shadow {
            box-shadow: 0px 0px 6px 2px rgba(map-get($colors, grey-blue), 0.5);
        }

        &:hover {

            #{$p}__icon {
                transform: scale(1.1);
            }

            #{$p}__text {
                opacity: 1;
                max-width: 140px;
                padding-left: 6px;
            }
        }
    }

    &__icon {
        height: 22px;
        width: 22px;
    }

    &__text {
        font: var(--f-h4);
        color: var(--c-text-color-grey);
        text-decoration: none;
        text-wrap: nowrap;
        overflow: hidden;
        opacity: 0;
        width: auto;
        max-width: 0;
        transition: all 0.2s ease-in;
    }
}
</style>
