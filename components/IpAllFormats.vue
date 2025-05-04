<script setup lang="ts">
import { hostsPartClasses, networkPartClasses } from "~/consts/tailwind";

const state = useStateStore();

interface Props {
    default: [number, number, number, number];
    binary: [string, string, string, string];
    decimal: number;
    shorthand?: number;
    maskShorthand: number;
    formatSignatureClass: string;
}

const props = defineProps<Props>();
const octetsClasses: Ref<Array<string>> = ref([""]);
const octetsClassesBinary: Ref<Array<string>> = ref([""]);
const octetToBreak: Ref<number> = ref(-1);
const breakIndex: Ref<number> = ref(-1);

function calculateBreak(maskShorthand: number) {
    if (!isInRange(maskShorthand, 0, 32)) return -1;

    const networkOctets = maskShorthand % 8;
    if (networkOctets === 0) {
        octetsClasses.value = createOctetClass(
            maskShorthand / 8,
            4 - networkOctets,
        );
        octetsClassesBinary.value = [...octetsClasses.value];
    } else {
        const networkPart = Math.floor(maskShorthand / 8);
        octetsClassesBinary.value = createOctetClass(
            networkPart,
            4 - networkPart,
        );
        octetToBreak.value = networkPart;
        breakIndex.value = networkOctets;
    }
}

function createOctetClass(network: number, hosts: number): Array<string> {
    if (!isInRange(network, 0, 4) || !isInRange(hosts, 0, 4)) return [];
    const classes = [];

    for (let i = 0; i < network; i++) classes.push(networkPartClasses);

    for (let i = network; i < 5; i++) classes.push(hostsPartClasses);

    return classes;
}
calculateBreak(props.maskShorthand);
</script>

<template>
    <div class="ip-comparison-container">
        <div
            class="ip-comparison-row flex flex-col lg:flex-row w-[100%] flex-wrap"
        >
            <div
                class="comparison-cell p-2 w-[20%] text-center flex justify-center flex-col"
            >
                <slot name="addressName"></slot>
            </div>
            <div
                class="comparison-cell p-2 w-[20%] text-center flex lg:flex-col flex-row"
            >
                <span :class="`${formatSignatureClass} py-2 lg:hidden`">
                    {{ $t("ipTypes.default") }}
                </span>
                <IpWithOctets
                    :address="default"
                    :octets-classes="octetsClasses"
                ></IpWithOctets>
            </div>
            <div
                class="comparison-cell p-2 text-center flex lg:flex-col flex-row w-[40%]"
            >
                <span :class="`${formatSignatureClass} py-2 lg:hidden`">
                    {{ $t("ipTypes.default") }}
                </span>
                <IpWithOctets
                    :address="binary"
                    :octets-classes="octetsClassesBinary"
                    :octet-to-break="octetToBreak"
                    :break-index="breakIndex"
                ></IpWithOctets>
            </div>
            <div
                class="comparison-cell p-2 text-center flex lg:flex-col flex-row w-[10%]"
            >
                <span :class="`${formatSignatureClass} py-2 lg:hidden`">
                    {{ $t("ipTypes.default") }}
                </span>
                <NumberIp :ip="String(decimal)"></NumberIp>
            </div>
            <div
                class="comparison-cell p-2 text-center flex lg:flex-col flex-row w-[10%]"
            >
                <span :class="`${formatSignatureClass} py-2 lg:hidden`">
                    {{ $t("ipTypes.default") }}
                </span>
                <span>{{ shorthand }}</span>
            </div>
        </div>
    </div>
</template>
