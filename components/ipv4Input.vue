<script setup lang="ts">
import { setFocusToNext } from "~/utils/nodelist.util";
import { inputClasses } from "~/consts/tailwind";

const props = defineProps({
    valueGetter: {
        type: Function,
        required: true,
    },
    changeCallback: {
        type: Function,
        required: true,
    },
});

const ip: Ref<number[]> = ref([...props.valueGetter()]);
const input = useTemplateRef("input");
const inputs: { nodes: Array<HTMLInputElement> } = reactive({ nodes: [] });

onMounted(() => {
    const retrievedNodes = input.value?.querySelectorAll("input.octet-input");
    if (!retrievedNodes || retrievedNodes.length < 1)
        return (inputs.nodes = []);
    inputs.nodes = Array.from(retrievedNodes) as HTMLInputElement[];
});

function keyupEvent(index: number) {
    if (String(ip.value[index]).length > 2 && Array.isArray(inputs.nodes))
        setFocusToNext(toRaw(inputs.nodes), index);
}

function changeEvent(index: number) {
    ip.value[index] = Number(ip.value[index]);

    if (ip.value[index] < min) ip.value[index] = 0;
    else if (ip.value[index] > max) ip.value[index] = 255;

    props.changeCallback(ip.value[index], index);
    keyupEvent(index);
}
const min = 0;
const max = 255;

const ipV4Classes: string = "w-[100%]";
</script>

<template>
    <div
        ref="input"
        class="ipv4-input-container flex flex-row relative py-3 items-end"
    >
        <div class="ipv4-input-label pr-1 whitespace-nowrap">
            <slot name="label">Your ipv4:</slot>
        </div>
        <input
            v-model="ip[0]"
            type="number"
            :min
            :max
            :class="`${inputClasses} octet-input ${ipV4Classes}`"
            @input="changeEvent(0)"
        />
        <span class="text-3x1 font-bold px-1">.</span>
        <input
            v-model="ip[1]"
            type="number"
            :min
            :max
            :class="`${inputClasses} octet-input ${ipV4Classes}`"
            @input="changeEvent(1)"
        />
        <span class="text-3x1 font-bold px-1">.</span>
        <input
            v-model="ip[2]"
            :min
            :max
            :class="`${inputClasses} octet-input ${ipV4Classes}`"
            @input="changeEvent(2)"
        />
        <span class="text-3x1 font-bold px-1">.</span>
        <input
            v-model="ip[3]"
            type="number"
            :min
            :max
            :class="`${inputClasses} octet-input ${ipV4Classes}`"
            @input="changeEvent(3)"
        />
    </div>
</template>
