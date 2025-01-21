<template>
    <div
        v-editable="blok"
        class="skill-group-blok"
    >
        <h3
            v-if="blok.group_name"
            class="skill-group-blok__name"
        >
            {{ blok.group_name }}
        </h3>

        <div
            v-gsap.whenVisible.once.stagger.from="{ opacity: 0, scale: 0.2, stagger: 0.05 }"
            class="skill-group-blok__skills-list"
        >
            <StoryblokComponent
                v-for="skill in blok.skills"
                :key="skill._uid"
                :blok="skill"
            />
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss">
.skill-group-blok {
    margin-top: 24px;

    &__name {
        color: var(--c-text-color-white);
    }

    &__skills-list {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 16px;

        > * {
            flex-basis: calc(100% / 6 - 14px);
        }
    }
}
</style>
