<template>
    <div
        v-editable="blok"
        class="skill-blok"
    >
        <div class="skill-blok__logo-wrapper" />
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
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__name {
        color: var(--c-text-color-white);
    }

    &__logo-wrapper {
        width: 80px;
        height: 80px;
        background-color: var(--c-white);
        border-radius: 100%;

        margin: 8px 0;
    }
}
</style>
