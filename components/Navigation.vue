<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = [
    {
        label: "Calculations",
        icon: "",
        slot: "calculations" as const,
        class: "text-md font-bold",
    },
] satisfies NavigationMenuItem[];
</script>

<template>
    <UNavigationMenu :items="items" class="w-full justify-center">
        <template #calculations-content>
            <ul class="list-none m-0 p-0 pl-1 pt-2">
                <li class="whitespace-nowrap text-sm my-2">
                    <NuxtLink to="/">Network info</NuxtLink>
                </li>
                <li class="whitespace-nowrap text-sm my-2">
                    <NuxtLink to="/subnets">Subnets</NuxtLink>
                </li>
                <li class="whitespace-nowrap text-sm my-2">
                    <NuxtLink to="/subnetsVLSM">Subnets VLSM</NuxtLink>
                </li>
            </ul>
        </template>
        <template #calculations-label> </template>
    </UNavigationMenu>
</template>
