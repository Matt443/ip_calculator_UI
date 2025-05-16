<script setup lang="ts">
import type { NetworkInfoPresentationType } from "~/types/props.type";
import type { NetworkInfoType } from "~/types/store.type";

const state = useStateStore();

const ips: Ref<NetworkInfoPresentationType[]> = ref([]);

watch(
    () => state.responses.subnets,
    () => {
        const response: NetworkInfoType[] = state.responses.subnets.data;
        ips.value = prepareSubnets(response);
    },
);
</script>

<template>
    <div
        class="page-container bg-stone-950 w-[100%] min-h-[100%] text-stone-100 pt-[50px]"
    >
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2">
            <NetworkMaskInput :button-click-callback="state.subnetsApiCall">
                <template #after-input>
                    <SubnetsSetting></SubnetsSetting>
                </template>
            </NetworkMaskInput>

            <IpsCollapsible :ips></IpsCollapsible>
            <Error :code="state.responses.subnets.status"></Error>
        </div>
    </div>
</template>
