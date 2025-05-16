<script setup lang="ts">
import type { IpSettingType } from "~/types/props.type";
import { buttonClasses } from "~/consts/tailwind.const";
const state = useStateStore();

const props = defineProps({
    buttonClickCallback: {
        type: Function,
        default: () => {},
    },
});

const ipInputConfig: IpSettingType = {
    type: {
        clickCallback: state.changeIpType,
        classCallback: () => state.getIp.type,
        getter: () => state.getIp.type,
        label: "inputs.ip.type",
    },
    address: {
        changeCallback: state.changeIpAdress,
        valueGetter: () => state.getIp.address,
        label: "inputs.ip.label",
    },
};

const maskInputConfig: IpSettingType = {
    type: {
        clickCallback: state.changeMaskType,
        classCallback: () => state.getMask.type,
        getter: () => state.getMask.type,
        label: "inputs.mask.type",
    },
    address: {
        changeCallback: state.changeMaskAdress,
        valueGetter: () => state.getMask.address,
        label: "inputs.mask.label",
    },
};
</script>

<template>
    <div class="inputs-container">
        <IpInput
            :type="ipInputConfig.type"
            :address="ipInputConfig.address"
        ></IpInput>
        <IpInput
            :type="maskInputConfig.type"
            :address="maskInputConfig.address"
        ></IpInput>
        <slot name="after-input"></slot>
        <UButton
            trailing-icon="i-lucide-arrow-right"
            :class="buttonClasses"
            @click="
                () => {
                    buttonClickCallback();
                }
            "
            :ui="{
                trailingIcon: 'ml-1 group-hover:translate-x-[5px] duration-500',
            }"
            >{{ $t("inputs.button") }}</UButton
        >
    </div>
</template>
