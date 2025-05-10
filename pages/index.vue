<script setup lang="ts">
import networkInfo from "~/sample/networkInfo.json";

const { result } = networkInfo;

const ips = [
    { nameId: "info.networkAddress", ...result.networkAddress },
    { nameId: "info.broadcastAddress", ...result.broadcastAddress },
    { nameId: "info.ipMask", ...result.ipMask },
    { nameId: "info.hostFirst", ...result.hosts.first },
    { nameId: "info.hostLast", ...result.hosts.last },
];
</script>

<template>
    <div class="w-[100%] min-h-[100%] text-stone-100 pt-[50px]">
        <NetworkMaskInput></NetworkMaskInput>
        <IpsPresentation
            :ips
            :host-quantity="result.hosts.quantity"
            :mask-shorthand="result.ipMask.shorthand"
        ></IpsPresentation>
    </div>
</template>
