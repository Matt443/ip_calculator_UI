<script setup lang="ts">
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

const min = 0;
const max = 255;
const ui = { increment: "hidden", decrement: "hidden", base: "text-center" };
</script>

<template>
  <div class="ipv4-input-container flex flex-row relative py-2">
    <div class="ipv4-input-label pr-1">
      <slot name="label">Your ipv4:</slot>
    </div>
    <UInputNumber
      v-model="ip[0]"
      orientation="vertical"
      :min
      :max
      class="flex w-[100px] bg-green-600"
      :ui
      @change="changeCallback(ip[0])"
    />
    <span class="text-3x1 font-bold px-1">.</span>
    <UInputNumber
      v-model="ip[1]"
      orientation="vertical"
      :min
      :max
      class="flex w-[100px] bg-green-600"
      :ui
      @change="changeCallback(ip[1], 1)"
    />
    <span class="text-3x1 font-bold px-1">.</span>
    <UInputNumber
      v-model="ip[2]"
      orientation="vertical"
      :min
      :max
      class="flex w-[100px] bg-green-600"
      :ui
      @change="changeCallback(ip[2], 2)"
    />
    <span class="text-3x1 font-bold px-1">.</span>
    <UInputNumber
      v-model="ip[3]"
      orientation="vertical"
      :min
      :max
      class="flex w-[100px] bg-green-600"
      :ui
      @change="changeCallback(ip[3], 3)"
    />
  </div>
</template>
