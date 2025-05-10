<script setup lang="ts">
import { duration } from "happy-dom/lib/PropertySymbol.js";
import { buttonClasses, inputClasses } from "~/consts/tailwind.const";
import networkInfo from "~/sample/subnets.json";

const { result } = networkInfo;

const subnets = result.map((ipAddress) => {
    return [
        { nameId: "info.networkAddress", ...ipAddress.networkAddress },
        { nameId: "info.broadcastAddress", ...ipAddress.broadcastAddress },
        { nameId: "info.ipMask", ...ipAddress.ipMask },
        { nameId: "info.hostFirst", ...ipAddress.hosts.first },
        { nameId: "info.hostLast", ...ipAddress.hosts.last },
    ];
});
</script>

<template>
    <div
        class="page-container bg-stone-950 w-[100%] min-h-[100%] text-stone-100 pt-[50px]"
    >
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2"></div>
        <NetworkMaskInput>
            <template #before-input>
                <SubnetsSetting></SubnetsSetting>
            </template>
        </NetworkMaskInput>

        <UCollapsible
            v-for="(subnet, index) in subnets"
            class="flex m-2 mt-4 flex-col w-[100%]"
            :default-open="index === 0"
        >
            <UButton
                color="neutral"
                variant="subtle"
                trailing-icon="i-lucide-chevron-down"
                block
                :class="`${buttonClasses} flex w-fit items-center p-2 m-auto`"
                >{{ $t("subnets.name") + ` #${index}` }}</UButton
            >

            <template #content>
                <IpsPresentation
                    :ips="subnet"
                    :host-quantity="result[index].hosts.quantity"
                    :mask-shorthand="result[index].ipMask.shorthand"
                ></IpsPresentation>
            </template>
        </UCollapsible>
    </div>
</template>
