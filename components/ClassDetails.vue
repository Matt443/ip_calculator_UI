<script setup lang="ts">
import type { ClassResponseType } from "~/types/store.type";

const state = useStateStore();

const props = defineProps<{
    details: ClassResponseType;
}>();
</script>

<template>
    <UCollapsible v-if="details.name" default-open>
        <template #content>
            <div class="class-info-container">
                <ul>
                    <li class="whitespace-nowrap flex items-center">
                        <span>
                            {{ `${$t("conversions.class.first")}: ` }}
                        </span>
                        <IpWithOctets
                            :address="details.min"
                            :container-classes="'ipv4-container items-center ml-2'"
                        ></IpWithOctets>
                    </li>
                    <li class="whitespace-nowrap flex items-center">
                        <span> {{ $t("conversions.class.last") }}: </span>
                        <IpWithOctets
                            :address="details.max"
                            :container-classes="'ipv4-container items-center ml-2'"
                        ></IpWithOctets>
                    </li>
                    <li
                        v-if="
                            details.defaultMask &&
                            details.defaultMask.length !== 0
                        "
                        class="whitespace-nowrap flex items-center"
                    >
                        <span> {{ $t("conversions.class.mask") }}: </span>
                        <IpWithOctets
                            :address="details.defaultMask"
                            :container-classes="'ipv4-container items-center ml-2'"
                        ></IpWithOctets>
                    </li>
                    <li
                        v-if="details.hostQuantity !== -1"
                        class="whitespace-nowrap flex items-center py-2"
                    >
                        {{
                            `${$t("info.hostQuantity")}: ${details.hostQuantity}`
                        }}
                    </li>
                </ul>
            </div>
        </template>
    </UCollapsible>
</template>
