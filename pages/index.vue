<script setup lang="ts">
import networkInfo from "~/sample/networkInfo.json";
import type { IpPresentationType } from "~/types/props.type";

const { result } = networkInfo;

const state = useStateStore();
const ips: Ref<IpPresentationType[]> = ref([]);
const hostQuantity = ref(0);

watch(
    () => state.networkInfo,
    () => {
        // if (state.networkInfo !==)
        ips.value = [
            {
                nameId: "info.networkAddress",
                ...state.networkInfo.networkAddress,
            },
            {
                nameId: "info.broadcastAddress",
                ...state.networkInfo.broadcastAddress,
            },
            { nameId: "info.ipMask", ...state.networkInfo.ipMask },
        ];
        if (state.networkInfo.hosts.quantity > 0) {
            ips.value.push({
                nameId: "info.hostFirst",
                ...state.networkInfo.hosts.first,
            });
            ips.value.push({
                nameId: "info.hostLast",
                ...state.networkInfo.hosts.last,
            });
        }
        hostQuantity.value = state.networkInfo.hosts.quantity;
    },
);
</script>

<template>
    <div class="w-[100%] min-h-[100%] text-stone-100 pt-[50px]">
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2">
            <NetworkMaskInput></NetworkMaskInput>
            <IpsPresentation
                v-if="
                    Object.keys(state.getNetworkInfo).length > 1 &&
                    state.networkInfo.status === 200
                "
                :ips="ips"
                :host-quantity="hostQuantity"
                :mask-shorthand="result.ipMask.shorthand"
            ></IpsPresentation>
            <Error :code="state.networkInfo.status"></Error>
        </div>
    </div>
</template>
