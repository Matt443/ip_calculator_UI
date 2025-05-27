<script setup lang="ts">
import { inputClasses } from "~/consts/tailwind.const";

const state = useStateStore();
const subnetNumber = ref(0);

function typeClassCallback() {
    const { method } = state.getSubnets;
    return method;
}
</script>

<template>
    <TypeSwitcher
        :click-callback="state.changeSubnetsType"
        :class-callback="typeClassCallback"
        :types="['host', 'subnets']"
        :label-parent="'subnets.calculating'"
    >
        <template #label>
            <span>{{ $t("subnets.calculating.method") }}:</span>
        </template>
    </TypeSwitcher>
    <div class="flex py-3 subnets-setting-container">
        <span class="pr-1 whitespace-nowrap"
            >{{ $t(`subnets.calculating.${state.subnets.method}`) }}:</span
        >
        <input
            v-model="subnetNumber"
            type="number"
            :min="0"
            :max="1024"
            :class="`${inputClasses} w-[150px]`"
            @input="state.changeSubnetsSetting(subnetNumber)"
        />
    </div>
</template>
