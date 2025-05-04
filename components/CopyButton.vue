<script setup lang="ts">
import { buttonClasses } from "~/consts/tailwind";
import useClipboard from "vue-clipboard3";

const props = defineProps({
    toCopy: {
        type: String,
        default: "",
    },
});

async function clickAction(): Promise<void> {
    const { toClipboard } = useClipboard();
    await toClipboard(props.toCopy);
}
</script>

<template>
    <div class="copy-button-container">
        <UButton
            @click="clickAction"
            :class="`${buttonClasses} ml-2`"
            icon="i-lucide-copy"
            :ui="{
                leadingIcon: 'group-hover:translate-y-[-3px] duration-500',
            }"
        ></UButton>
    </div>
</template>
