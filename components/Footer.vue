<template>
    <div class="footer">
        <span class="footer__text">
            Made with &lt;3 in Malmö, Sweden. © {{ copyrightYear }}
        </span>
        <ContactMeButton />
    </div>
</template>

<script setup>
import dayjs from "dayjs";

const copyrightYear = ref(dayjs().format("YYYY"));
</script>

<style lang="scss">
.footer {
    background-color: var(--c-dark-grey);
    padding: 20px var(--s--layout-padding);
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__text {
        color: var(--c-text-color-white);
        font: var(--f-h5);
    }

    @include breakpoint-down(sm) {
        flex-direction: column-reverse;
        align-items: start;
        gap: 12px;
    }
}
</style>
