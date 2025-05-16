<script setup lang="ts">
import { buttonClasses } from "~/consts/tailwind.const";
import type { NetworkInfoPresentationType } from "~/types/props.type";

const props = defineProps<{
    ips: NetworkInfoPresentationType[];
}>();
</script>

<template>
    <UCollapsible
        v-for="(ip, index) in ips"
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
                :ips="ip.addresses"
                :host-quantity="ip.hostQuantity"
                :mask-shorthand="ips[index].maskShorthand"
            ></IpsPresentation>
        </template>
    </UCollapsible>
</template>
