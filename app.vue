<script setup lang="ts">
// import { useStateStore } from '@/stores/state.store'
import { useStateStore } from "./stores/state.store";
const store = useStateStore();
console.log(store.doubleCount);
</script>

<template>
  <div>
    <h1 class="text-xl">Hello world</h1>
  </div>
</template>
