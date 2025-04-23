<script setup lang="ts">
import type { IpType } from "~/types/store.types";

const state = useStateStore();

const ipTypes: IpType[] = ["default", "binary", "decimal", "shorthand"];
</script>

<template>
  <div class="type-switcher-container flex w-[100%] flex-row py-2">
    <div class="p-1 pl-0 w-max text-nowrap">
      <slot name="label">Ip Type:</slot>
    </div>
    <div
      v-for="type in ipTypes"
      :key="type"
      class="type-container p-1 w-[100%] text-center hover:bg-stone-700 hover:text-stone-200"
      :class="{ active: state.getCurrentType === type }"
      @click="state.changeType(type)"
    >
      {{ $t(`ipTypes.${type}`) }}
    </div>
  </div>
</template>

<style lang="scss">
.type-container {
  &.active {
    background-color: var(--color-stone-700);
  }
}
</style>
