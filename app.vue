<script setup lang="ts">
const state = useStateStore();
state.changeLanguage("en");
</script>

<template>
  <UApp>
    <NuxtLayout class="layouts">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
