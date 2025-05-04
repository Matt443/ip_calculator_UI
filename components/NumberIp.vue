<script setup lang="ts">
const props = defineProps({
    ip: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <div class="number-ip-container flex justify-center py-2">
        <slot name="beforeIp"></slot>
        <span class="number-ip">
            {{ ip }}
        </span>
        <slot name="AfterIp"></slot>
        <CopyButton :to-copy="ip"></CopyButton>
    </div>
</template>
