<script setup lang="ts">
import type { Reactive } from "vue";
import networkInfo from "~/sample/subnets.json";
import type { NetworkInfoPresentationType } from "~/types/props.type";
import type { NetworkInfoType } from "~/types/store.type";

const { result } = networkInfo;
const state = useStateStore();

const ips: Ref<NetworkInfoPresentationType[]> = ref([]);

watch(
    () => state.responses.subnets,
    () => {
        const response: NetworkInfoType[] = state.responses.subnets.data;
        ips.value = ips.value.slice(0);
        ips.value = response.map((ipAddress: NetworkInfoType) => {
            return {
                addresses: [
                    {
                        nameId: "info.networkAddress",
                        ...ipAddress.networkAddress,
                    },
                    {
                        nameId: "info.broadcastAddress",
                        ...ipAddress.broadcastAddress,
                    },
                    { nameId: "info.ipMask", ...ipAddress.ipMask },
                    { nameId: "info.hostFirst", ...ipAddress.hosts.first },
                    { nameId: "info.hostLast", ...ipAddress.hosts.last },
                ],
                hostQuantity: ipAddress.hosts.quantity,
                maskShorthand: ipAddress.ipMask.shorthand || -1,
            };
        });
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
