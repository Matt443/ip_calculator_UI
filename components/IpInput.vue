<script setup lang="ts">
import type { IpTypeSettingType, IpValueSettingType } from "~/types/props.type";

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
    <TypeSwitcher
        :click-callback="type.clickCallback"
        :class-callback="type.classCallback"
        :types="['default', 'binary', 'decimal', 'shorthand']"
        :label-parent="'ipTypes'"
    >
        <template #label>
            <span>{{ $t(type.label) }}:</span>
        </template>
    </TypeSwitcher>
    <Ipv4Input
        v-if="type.getter() === 'default'"
        :change-callback="address.changeCallback"
        :value-getter="address.valueGetter"
    >
        <template #label>
            <span>{{ $t(address.label) }}:</span>
        </template>
    </Ipv4Input>
    <BinaryIpInput
        v-if="type.getter() === 'binary'"
        :getter-callback="address.valueGetter"
        :change-callback="address.changeCallback"
    >
        <template #label>
            <span>{{ $t(address.label) }}:</span>
        </template>
    </BinaryIpInput>
    <IpNumberInput
        v-if="type.getter() === 'decimal'"
        :change-callback="address.changeCallback"
        :max="4294967295"
        additional-input-class="max-w-[250px]"
    >
        <template #label>
            <span>{{ $t(address.label) }}:</span>
        </template>
    </IpNumberInput>
    <IpNumberInput
        v-if="type.getter() === 'shorthand'"
        :change-callback="address.changeCallback"
        additional-input-class="max-w-[150px]"
    >
        <template #label>
            <span>{{ $t(address.label) }}:</span>
        </template>
        <template #beforeInput>
            <span class="mr-1">/</span>
        </template>
    </IpNumberInput>
</template>
