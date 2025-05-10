<script setup lang="ts">
import type { IpPresentationType } from "~/types/props.type";

const state = useStateStore();
const props = defineProps<{
    ips: IpPresentationType[];
    hostQuantity: number;
    maskShorthand: number;
}>();
</script>

<template>
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
            v-for="singleIp in ips"
            :default="singleIp.ip"
            :mask-shorthand="maskShorthand"
            :binary="singleIp.binary"
            :decimal="singleIp.decimal"
            :shorthand="singleIp.shorthand"
            :format-signature-class="``"
        >
            <template #addressName>
                <span class="whitespace-nowrap font-bold">{{
                    $t(singleIp.nameId)
                }}</span>
            </template>
        </IpAllFormats>
        <!-- 
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
            >-->
        <HostQuantity>
            <template #hostQuantity>
                {{ hostQuantity }}
            </template>
        </HostQuantity>
    </div>
</template>
