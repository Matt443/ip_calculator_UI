<script setup lang="ts">
import IpAllFormats from "~/components/IpAllFormats.vue";
import { buttonClasses } from "~/consts/tailwind";
import type { IpSettingType } from "~/types/props.type";

const state = useStateStore();

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
    <div class="bg-stone-950 w-[100%] h-[100%] text-stone-100">
        <LanguageSwitcher />
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2">
            <div class="inputs-container">
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
                    :class="buttonClasses"
                    :ui="{
                        trailingIcon:
                            'ml-1 group-hover:translate-x-[5px] duration-500',
                    }"
                    >{{ $t("inputs.button") }}</UButton
                >
            </div>
            <div
                class="type-headings-container lg:flex flex-row flex-wrap hidden"
            >
                <div class="type-heading w-[20%] text-center"></div>
                <div class="type-heading w-[20%] text-center">
                    {{ $t("ipTypes.default") }}
                </div>
                <div class="type-heading w-[40%] text-center">
                    {{ $t("ipTypes.binary") }}
                </div>
                <div class="type-heading w-[10%] text-center">
                    {{ $t("ipTypes.decimal") }}
                </div>
                <div class="type-heading w-[10%] text-center">
                    {{ $t("ipTypes.shorthand") }}
                </div>
            </div>
            <IpAllFormats
                :default="[192, 168, 0, 1]"
                :mask-shorthand="9"
                :binary="['11111111', '11111111', '11111111', '00000000']"
                :decimal="10"
                :format-signature-class="``"
            >
                <template #addressName>
                    <span>{{ $t("ipTypes.default") }}</span>
                </template>
            </IpAllFormats>
            <IpAllFormats
                :default="[192, 168, 0, 1]"
                :mask-shorthand="24"
                :binary="['11111111', '11111111', '11111111', '00000000']"
                :decimal="10"
                :format-signature-class="`lg:hidden`"
            >
                <template #addressName>
                    <span class="whitespace-nowrap">{{
                        $t("info.broadcastAddress")
                    }}</span>
                </template>
            </IpAllFormats>
        </div>
    </div>
</template>
