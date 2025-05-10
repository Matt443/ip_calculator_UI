<script setup lang="ts">
const props = defineProps({
    clickCallback: {
        type: Function,
        required: true,
    },
    classCallback: {
        type: Function,
        required: true,
    },
    types: {
        type: Array<string>,
        required: true,
    },
    labelParent: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="type-switcher-container flex w-[100%] flex-row py-2">
        <div class="p-1 pl-0 w-max text-nowrap">
            <slot name="label">Ip Type:</slot>
        </div>
        <div
            v-for="type in types"
            :key="type"
            class="type-container p-1 w-[100%] text-center hover:bg-stone-700 hover:text-stone-200"
            :class="{ active: classCallback() === type }"
            @click="props.clickCallback(type)"
        >
            {{ $t(`${labelParent}.${type}`) }}
        </div>
    </div>
</template>

<style lang="scss">
.type-container {
    &.active {
        background-color: var(--color-stone-700);
    }
}
</style>
