<script setup lang="ts">
let className = ref("");

function openSidebar() {
    if (className.value !== "") return (className.value = "");
    return (className.value = "active");
}
</script>

<template>
    <div
        :class="`sidebar-container translate-x-[-100%] fixed bg-stone-800 h-[100%] duration-500 flex flex-col items-center z-[100] w-[40%] text-white lg:w-auto ${className}`"
    >
        <div class="top-content-container">
            <slot name="top-content"></slot>
        </div>
        <div
            @click="openSidebar"
            class="open-button-container translate-x-[100%] duration-500 delay-500 self-end"
        >
            <Button class="bg-green-400">
                <UIcon name="i-lucide-lightbulb" class="size-5 m-2" />
            </Button>
        </div>
        <div
            class="sidebar-content-container p-4 flex flex-col h-[100%] relative bottom-[0]"
        >
            <slot name="sidebar-content"></slot>
        </div>
    </div>
</template>

<style lang="scss">
.sidebar-container {
    &.active {
        transform: translateX(100%);
        .open-button-container {
            transform: translateX(-100%);
        }
    }
}
</style>
