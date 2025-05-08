<script setup lang="ts">
const state = useStateStore();
state.changeLanguage("en");
</script>

<template>
    <Sidebar>
        <template #sidebar-content>
            <Navigation></Navigation>
        </template>
        <template #top-content>
            <LanguageSwitcher />
        </template>
    </Sidebar>
    <UApp>
        <NuxtLayout class="layouts">
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
