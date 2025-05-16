<script setup lang="ts">
import type { NetworkInfoPresentationType } from "~/types/props.type";
import type { NetworkInfoType } from "~/types/store.type";
const state = useStateStore();

const ips: Ref<NetworkInfoPresentationType[]> = ref([]);
const status: Ref<number> = ref(0);

watch(
    () => state.responses.subnetsVLSM.status,
    () => {
        const response: NetworkInfoType[] = state.responses.subnetsVLSM.data;
        ips.value = prepareSubnets(response);
        status.value = state.responses.subnetsVLSM.status;
    },
);
</script>

<template>
    <div
        class="page-container bg-stone-950 w-[100%] min-h-[100%] text-stone-100 pt-[50px]"
    >
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2">
            <NetworkMaskInput :button-click-callback="state.subnetsVLSMApiCall">
                <template #after-input>
                    <SubnetsVlsmSetting></SubnetsVlsmSetting>
                    <FiltersPresentation
                        :active-filters="state.getFilters"
                    ></FiltersPresentation>
                </template>
            </NetworkMaskInput>
            <IpsCollapsible :ips></IpsCollapsible>
            <Error :code="status">
                <template #error-422>
                    <span>{{ $t("subnetsVLSM.dataInvalid") }}</span>
                </template>
            </Error>
        </div>
    </div>
</template>
