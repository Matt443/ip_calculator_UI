<script setup lang="ts">
import type {
    IpTypeSettingType,
    IpValueSettingType,
} from "~/types/props.types";

const state = useStateStore();

const props = defineProps({
    type: {
        type: Object as PropType<IpTypeSettingType>,
        required: true,
    },
    address: {
        type: Object as PropType<IpValueSettingType>,
        required: true,
    },
});
</script>

<template>
    <IpTypeSwitcher
        :click-callback="type.clickCallback"
        :class-callback="type.classCallback"
    >
        <template #label>
            <span>{{ $t(type.label) }}:</span>
        </template>
    </IpTypeSwitcher>
    <ipv4Input
        :change-callback="address.changeCallback"
        :value-getter="address.valueGetter"
    >
        <template #label>
            <span>{{ $t(address.label) }}:</span>
        </template>
    </ipv4Input>
</template>
