<script setup lang="ts">
import { inputClasses } from "~/consts/tailwind.const";

const numberClasses = "w-[100%]";
const ip: Ref<number> = ref(0);

const props = defineProps({
    changeCallback: {
        type: Function,
        required: true,
    },
    max: {
        type: Number,
        default: 32,
    },
    min: {
        type: Number,
        default: 0,
    },
    additionalInputClass: {
        type: String,
        default: "",
    },
});

function changeEvent(ipNumber: number) {
    if (ipNumber < props.min) ip.value = props.min;
    else if (ipNumber > props.max) ip.value = props.max;
    props.changeCallback(ip);
}
</script>

<template>
    <div
        class="number-input-container flex flex-col flex-row lg:flex-row relative py-3 items-center"
    >
        <div class="ipv4-input-label pr-1 whitespace-nowrap">
            <slot name="label">Your ip:</slot>
        </div>
        <div class="before-input-container">
            <slot name="beforeInput"></slot>
        </div>
        <input
            type="number"
            v-model="ip"
            :min
            :max
            @input="changeEvent(Number(ip))"
            :class="`${inputClasses} ${numberClasses} ${additionalInputClass}`"
        />
    </div>
</template>
