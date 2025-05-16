<script setup lang="ts">
import type { IpPresentationType } from "~/types/props.type";

const state = useStateStore();
const ips: Ref<IpPresentationType[]> = ref([]);
const hostQuantity = ref(0);
const maskShorthand = ref(0);

watch(
    () => state.responses.networkInfo,
    () => {
        const response = state.responses.networkInfo;
        ips.value = [
            {
                nameId: "info.networkAddress",
                ...response.networkAddress,
            },
            {
                nameId: "info.broadcastAddress",
                ...response.broadcastAddress,
            },
            { nameId: "info.ipMask", ...response.ipMask },
        ];
        if (response.hosts.quantity > 0) {
            ips.value.push({
                nameId: "info.hostFirst",
                ...response.hosts.first,
            });
            ips.value.push({
                nameId: "info.hostLast",
                ...response.hosts.last,
            });
        }
        hostQuantity.value = response.hosts.quantity;
        if (response.ipMask.shorthand)
            maskShorthand.value = response.ipMask.shorthand;
    },
);
</script>

<template>
    <div class="w-[100%] min-h-[100%] text-stone-100 pt-[50px]">
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2">
            <NetworkMaskInput
                :button-click-callback="state.networkInfoApiCall"
            ></NetworkMaskInput>
            <IpsPresentation
                v-if="
                    Object.keys(state.getNetworkInfo).length > 1 &&
                    state.responses.networkInfo.status === 200
                "
                :ips="ips"
                :host-quantity="hostQuantity"
                :mask-shorthand="maskShorthand"
            ></IpsPresentation>
            <Error :code="state.responses.networkInfo.status"></Error>
        </div>
    </div>
</template>
