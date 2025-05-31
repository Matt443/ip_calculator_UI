<script setup lang="ts">
const state = useStateStore();
state.changeLanguage("en");

useSeoMeta({
    title: "Ip Calculator",
    ogTitle: "Ip Calculator",
    description:
        "An IP calculator for computing the network address, broadcast address, number of hosts, and subnets, including support for the VLSM method.",
    ogDescription:
        "An IP calculator for computing the network address, broadcast address, number of hosts, and subnets, including support for the VLSM method.",
    ogImage: "https://ip-calculator.marcinregula.de/icon.png",
    twitterCard: "summary_large_image",
});
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
