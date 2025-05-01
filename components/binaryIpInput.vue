<script setup lang="ts">
import { inputClasses } from "~/consts/tailwind";

const state = useStateStore();
const binaryClasses: string = "lg:w-[100%] w-[95%] octet-input";
const ip = ref(["", "", "", ""]);
const input = useTemplateRef("input");
const inputs: { nodes: Array<HTMLInputElement> } = reactive({ nodes: [] });

const props = defineProps({
    getterCallback: {
        type: Function,
        required: true,
    },
    changeCallback: {
        type: Function,
        required: true,
    },
});

onMounted(() => {
    const retrievedNodes = input.value?.querySelectorAll("input.octet-input");
    if (!retrievedNodes || retrievedNodes.length < 1)
        return (inputs.nodes = []);
    inputs.nodes = Array.from(retrievedNodes) as HTMLInputElement[];
});

function changeEvent(event: Event, index: number) {
    const inputEvent = event as InputEvent;
    if (!isInRange(String(ip.value[index]).length, 0, 8))
        setFocusToNext(toRaw(inputs.nodes), index);
    else if (
        inputEvent.data === null ||
        validationWithRegex(String(ip.value[index]), new RegExp("^[01]+$"))
    ) {
        props.changeCallback(String(ip.value[index]), index);
        return true;
    }

    const previousValue = props.getterCallback();
    if (Array.isArray(previousValue))
        ip.value[index] = String(previousValue[index]);
}
</script>

<template>
    <div
        class="binary-input-container flex flex-col lg:flex-row relative py-3 items-center"
        ref="input"
    >
        <div class="ipv4-input-label pr-1 whitespace-nowrap">
            <slot name="label">Your binary ip:</slot>
        </div>
        <div class="binary-input-container flex w-[100%] my-2">
            <input
                type="text"
                pattern="[01]{8}"
                v-model="ip[0]"
                :class="`${inputClasses} ${binaryClasses}`"
                @input="changeEvent($event, 0)"
            />
            <span class="text-3x1 font-bold px-1">.</span>
        </div>
        <div class="binary-input-container flex w-[100%] my-2">
            <input
                type="text"
                pattern="[01]{8}"
                v-model="ip[1]"
                :class="`${inputClasses} ${binaryClasses}`"
                @input="changeEvent($event, 1)"
            />
            <span class="text-3x1 font-bold px-1">.</span>
        </div>
        <div class="binary-input-container flex w-[100%] my-2">
            <input
                type="text"
                pattern="[01]{8}"
                v-model="ip[2]"
                :class="`${inputClasses} ${binaryClasses}`"
                @input="changeEvent($event, 2)"
            />
            <span class="text-3x1 font-bold px-1">.</span>
        </div>
        <div class="binary-input-container flex w-[100%] my-2">
            <input
                type="text"
                pattern="[01]{8}"
                v-model="ip[3]"
                :class="`${inputClasses} ${binaryClasses}`"
                @input="changeEvent($event, 3)"
            />
        </div>
    </div>
</template>
