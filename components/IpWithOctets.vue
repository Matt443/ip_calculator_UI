<script setup lang="ts">
import { hostsPartClasses, networkPartClasses } from "~/consts/tailwind";

const props = defineProps({
    address: {
        type: Array<number | string>,
        required: true,
    },
    octetsClasses: {
        type: Array<string>,
        required: false,
        default: ["", "", "", ""],
    },
    octetToBreak: {
        type: Number,
        default: -1,
    },
    breakIndex: {
        type: Number,
        default: -1,
    },
});
</script>

<template>
    <div class="ipv4-container flex py-2">
        <slot name="beforeAddress"></slot>
        <div
            v-for="(octet, index) in address"
            :class="`${octetsClasses[index]} octet-container flex`"
        >
            <span v-if="index !== octetToBreak" class="octet-number">{{
                octet
            }}</span>
            <div v-if="index === octetToBreak" class="breaked-octet flex">
                <span :class="`${networkPartClasses} splittet-octet-network`">{{
                    String(octet).slice(0, breakIndex)
                }}</span>
                <span class="text-white">|</span>
                <span :class="`${hostsPartClasses} splittet-octet-host`">{{
                    String(octet).slice(breakIndex)
                }}</span>
            </div>
            <span
                class="octet-separator text-3x1 font-bold px-1 text-white"
                v-if="index < address.length - 1"
                >.</span
            >
        </div>
        <slot name="afterAddress"></slot>
        <CopyButton :to-copy="address.join('.')"></CopyButton>
    </div>
</template>
