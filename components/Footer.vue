<template>
    <div class="footer">
        <span class="footer__text">
            Made with &lt;3 in Malmö, Sweden. © {{ copyrightYear }}
        </span>
    </div>
</template>

<script setup>
import dayjs from "dayjs";

const copyrightYear = ref(dayjs().format("YYYY"));
</script>

<style lang="scss">
.footer {
    background-color: var(--c-dark-grey);
    padding: 20px 20%;

    &__text {
        color: var(--c-text-color-white);
        font: var(--f-h5);
    }
}
</style>
