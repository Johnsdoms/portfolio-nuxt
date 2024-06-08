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
    width: calc(100% - 40%);
    padding: 20px 0;

    &__text {
        color: var(--c-text-color-white);
        font: var(--f-h5);
    }
}
</style>
