<script setup lang="ts">
import IpAllFormats from "~/components/IpAllFormats.vue";
import { buttonClasses } from "~/consts/tailwind";
import type { IpSettingType } from "~/types/props.type";
import networkInfo from "~/sample/networkInfo.json";

const state = useStateStore();
const { result } = networkInfo;

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
    <div class="bg-stone-950 w-[100%] min-h-[100%] text-stone-100 pt-[50px]">
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
            <div class="network-info-container py-4 text-sm">
                <div
                    class="type-headings-container lg:flex flex-row flex-wrap hidden text-md"
                >
                    <div class="type-heading w-[17.5%] text-center"></div>
                    <div class="type-heading w-[20%] text-center">
                        {{ $t("ipTypes.default") }}
                    </div>
                    <div class="type-heading w-[40%] text-center">
                        {{ $t("ipTypes.binary") }}
                    </div>
                    <div class="type-heading w-[15%] text-center">
                        {{ $t("ipTypes.decimal") }}
                    </div>
                    <div class="type-heading w-[7.5%] text-center">
                        {{ $t("ipTypes.shorthand") }}
                    </div>
                </div>
                <IpAllFormats
                    :default="result.networkAddress.ip"
                    :mask-shorthand="result.ipMask.shorthand"
                    :binary="result.networkAddress.binary"
                    :decimal="result.networkAddress.decimal"
                    :shorthand="result.broadcastAddress.shorthand"
                    :format-signature-class="``"
                >
                    <template #addressName>
                        <span class="whitespace-nowrap font-bold">{{
                            $t("ipTypes.default")
                        }}</span>
                    </template>
                </IpAllFormats>
                <IpAllFormats
                    :default="result.broadcastAddress.ip"
                    :mask-shorthand="result.ipMask.shorthand"
                    :binary="result.broadcastAddress.binary"
                    :decimal="result.broadcastAddress.decimal"
                    :shorthand="result.broadcastAddress.shorthand"
                    :format-signature-class="`lg:hidden`"
                >
                    <template #addressName>
                        <span class="whitespace-nowrap font-bold">{{
                            $t("info.broadcastAddress")
                        }}</span>
                    </template>
                </IpAllFormats>
                <IpAllFormats
                    :default="result.ipMask.ip"
                    :mask-shorthand="result.ipMask.shorthand"
                    :binary="result.ipMask.binary"
                    :decimal="result.ipMask.decimal"
                    :shorthand="result.ipMask.shorthand"
                    :format-signature-class="`lg:hidden`"
                >
                    <template #addressName>
                        <span class="whitespace-nowrap font-bold">{{
                            $t("info.ipMask")
                        }}</span>
                    </template></IpAllFormats
                >
                <IpAllFormats
                    :default="result.hosts.first.ip"
                    :mask-shorthand="result.ipMask.shorthand"
                    :binary="result.hosts.first.binary"
                    :decimal="result.hosts.first.decimal"
                    :shorthand="result.hosts.first.shorthand"
                    :format-signature-class="`lg:hidden`"
                >
                    <template #addressName>
                        <span class="whitespace-nowrap font-bold">{{
                            $t("info.hostFirst")
                        }}</span>
                    </template></IpAllFormats
                >
                <IpAllFormats
                    :default="result.hosts.last.ip"
                    :mask-shorthand="result.ipMask.shorthand"
                    :binary="result.hosts.last.binary"
                    :decimal="result.hosts.last.decimal"
                    :shorthand="result.hosts.last.shorthand"
                    :format-signature-class="`lg:hidden`"
                >
                    <template #addressName>
                        <span class="whitespace-nowrap font-bold">{{
                            $t("info.hostLast")
                        }}</span>
                    </template></IpAllFormats
                >
                <HostQuantity>
                    <template #hostQuantity>
                        {{ result.hosts.quantity }}
                    </template>
                </HostQuantity>
            </div>
        </div>
    </div>
</template>
