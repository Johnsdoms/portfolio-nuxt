<template>
    <div class="skill-list-blok">
        <div v-editable="blok">
            <h2 class="skill-list-blok__title">
                {{ blok.title_scaffold }}
                <span
                    :id="animatedTextId"
                    class="skill-list-blok__title-animated"
                />
            </h2>

            <StoryblokComponent
                v-for="skillGroup in blok.skillGroups"
                :key="skillGroup._uid"
                :blok="skillGroup"
            />
        </div>
    </div>
</template>

<script setup>
const animatedTextId = "skill_list_title_to_animate";
const props = defineProps({ blok: Object });

onMounted(() => {
    useTypewriter(
        animatedTextId,
        props.blok.title_to_animate,
        "skill-list-blok__title-animated-text",
    );
});
</script>

<style lang="scss">
.skill-list-blok {
    margin-top: 60px;
    background-color: var(--c-dark-grey);

    &__title {
        padding-top: 24px;
        color: var(--c-green);

        &-animated {
            @include backdrop-underline();
        }
    }
}
</style>
