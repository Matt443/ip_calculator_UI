<script setup lang="ts">
const values: Ref<number[]> = ref([0, 0, 0, 0]);

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
      v-model="values[0]"
      orientation="vertical"
      :min
      :max
      class="flex w-[100px] bg-green-600"
      :ui
    />
    <span class="text-3x1 font-bold px-1">.</span>
    <UInputNumber
      v-model="values[1]"
      orientation="vertical"
      :min
      :max
      class="flex w-[100px] bg-green-600"
      :ui
    />
    <span class="text-3x1 font-bold px-1">.</span>
    <UInputNumber
      v-model="values[2]"
      orientation="vertical"
      :min
      :max
      class="flex w-[100px] bg-green-600"
      :ui
    />
    <span class="text-3x1 font-bold px-1">.</span>
    <UInputNumber
      v-model="values[3]"
      orientation="vertical"
      :min
      :max
      class="flex w-[100px] bg-green-600"
      :ui
    />
  </div>
</template>
