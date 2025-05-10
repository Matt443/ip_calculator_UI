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
            <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2">
                <NuxtPage />
            </div>
        </NuxtLayout>
    </UApp>
</template>
