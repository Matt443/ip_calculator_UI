<script setup lang="ts">
import networkInfo from "~/sample/subnetsVLSM.json";
const state = useStateStore();

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
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2">
            <NetworkMaskInput>
                <template #after-input>
                    <SubnetsVlsmSetting></SubnetsVlsmSetting>
                    <FiltersPresentation
                        :active-filters="state.getFilters"
                    ></FiltersPresentation>
                </template>
            </NetworkMaskInput>
            <IpsCollapsible :ips="subnets"></IpsCollapsible>
        </div>
    </div>
</template>
