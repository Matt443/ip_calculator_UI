<script setup lang="ts">
import { hostsPartClasses, networkPartClasses } from "~/consts/tailwind.const";

interface Props {
    default: number[];
    binary: string[];
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
        octetToBreak.value = -1;
        breakIndex.value = -1;
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
watch(
    () => props.maskShorthand,
    () => {
        calculateBreak(props.maskShorthand);
    },
);
</script>

<template>
    <div class="ip-comparison-container">
        <div
            class="ip-comparison-row flex flex-col lg:flex-row w-[100%] flex-wrap"
        >
            <USeparator
                :class="'bg-green-900 h-[2px] lg:hidden mt-2'"
                type="solid"
            />
            <div
                class="comparison-cell lg:p-2 px-1 py-2 lg:w-[17.5%] lg:text-center flex justify-center flex-col w-[100%]"
            >
                <slot name="addressName"></slot>
            </div>
            <div
                class="comparison-cell lg:p-2 px-1 w-[20%] text-center flex lg:flex-col flex-row"
            >
                <span :class="`${formatSignatureClass} py-2 pr-2 lg:hidden`">
                    {{ $t("ipTypes.default") }}:
                </span>
                <IpWithOctets
                    :address="default"
                    :octets-classes="octetsClasses"
                ></IpWithOctets>
            </div>
            <div
                class="comparison-cell lg:p-2 px-1 text-center flex lg:flex-col flex-row lg:w-[40%] w-[100%]"
            >
                <span :class="`${formatSignatureClass} py-2 pr-2 lg:hidden`">
                    {{ $t("ipTypes.binary") }}:
                </span>
                <IpWithOctets
                    :container-classes="'ip-binary-container'"
                    :address="binary"
                    :octets-classes="octetsClassesBinary"
                    :octet-to-break="octetToBreak"
                    :break-index="breakIndex"
                ></IpWithOctets>
            </div>
            <div
                class="comparison-cell lg:p-2 px-1 text-center flex lg:flex-col flex-row w-[15%]"
            >
                <span :class="`${formatSignatureClass} py-2 pr-2 lg:hidden`">
                    {{ $t("ipTypes.decimal") }}:
                </span>
                <NumberIp :ip="String(decimal)"></NumberIp>
            </div>
            <div
                class="comparison-cell lg:p-2 px-1 text-center flex lg:flex-col flex-row w-[7.5%]"
            >
                <span :class="`${formatSignatureClass} py-2 pr-2 lg:hidden`">
                    {{ $t("ipTypes.shorthand") }}:
                </span>
                <NumberIp :ip="String(shorthand ? shorthand : '-')"></NumberIp>
            </div>
        </div>
    </div>
</template>
