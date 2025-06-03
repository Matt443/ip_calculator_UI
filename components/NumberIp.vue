<script setup lang="ts">
import { container } from "#build/ui";

const props = defineProps({
    ip: {
        type: String,
        default: "-",
    },
    containerClass: {
        type: String,
        default: "justify-center",
    },
});
</script>

<template>
    <div :class="`${containerClass} number-ip-container flex py-2`">
        <slot name="beforeIp"></slot>
        <span class="number-ip">
            {{ ip }}
        </span>
        <slot name="AfterIp"></slot>
        <CopyButton v-if="ip !== '-'" :to-copy="ip"></CopyButton>
    </div>
</template>
