<script setup lang="ts">
import type { IpSettingType } from "~/types/props.types";

const state = useStateStore();

const ipInputConfig: IpSettingType = {
    type: {
        clickCallback: state.changeIpType,
        classCallback: () => state.getIp.type,
        getter: () => state.getIp.type,
        label: "info.ip.type",
    },
    address: {
        changeCallback: state.changeIpAdress,
        valueGetter: () => state.getIp.address,
        label: "info.ip.label",
    },
};

const maskInputConfig: IpSettingType = {
    type: {
        clickCallback: state.changeMaskType,
        classCallback: () => state.getMask.type,
        getter: () => state.getMask.type,
        label: "info.mask.type",
    },
    address: {
        changeCallback: state.changeMaskAdress,
        valueGetter: () => state.getMask.address,
        label: "info.mask.label",
    },
};
</script>

<template>
    <div class="bg-stone-950 w-[100%] h-[100%] text-stone-100">
        <LanguageSwitcher />
        <div class="content-container w-[1000px] m-auto">
            <IpInput
                :type="ipInputConfig.type"
                :address="ipInputConfig.address"
            ></IpInput>
            <IpInput
                :type="maskInputConfig.type"
                :address="maskInputConfig.address"
            ></IpInput>

            <UButton
                trailing-icon="i-lucide-arrow-right"
                class="flex align-center bg-stone-700 border-stone-700 border-[2px] px-3 py-1 rounded-sm group hover:bg-transparent duration-500 cursor-pointer"
                :ui="{
                    trailingIcon:
                        'ml-1 group-hover:translate-x-[5px] duration-500',
                }"
                >{{ $t("info.button") }}</UButton
            >
        </div>
    </div>
</template>
