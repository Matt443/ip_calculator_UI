<script setup lang="ts">
import { buttonClasses, inputClasses } from "~/consts/tailwind.const";

const inputValue = ref(0);
const state = useStateStore();
function addFilter(value: number) {
    value = Number(value);
    inputValue.value = value;
    if (value < 1) return (value = 1);
    else if (value > 4294967294) return (value = 4294967294);

    state.addFilter(value);
    inputValue.value = 0;
}
</script>

<template>
    <div class="vlsm-setting-container flex py-3">
        <div class="ipv4-input-label pr-1 whitespace-nowrap">
            <slot name="label">{{ $t("info.hostQuantity") }}:</slot>
        </div>
        <input
            type="number"
            :min="1"
            :max="4294967294"
            :class="inputClasses"
            v-model="inputValue"
            @keyup.enter="addFilter(inputValue)"
        />
        <UButton
            :class="`${buttonClasses} ml-2`"
            @click="addFilter(inputValue)"
            >{{ $t("subnetsVLSM.button.add") }}</UButton
        >
        <UButton
            :class="`${buttonClasses} ml-2`"
            @click="state.removeAllFilters"
            >{{ $t("subnetsVLSM.button.delete") }}</UButton
        >
    </div>
</template>
