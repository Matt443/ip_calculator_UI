<script setup lang="ts"></script>

<template>
    <div class="flex flex-wrap">
        <USeparator
            :class="'bg-green-900 h-[2px] lg:hidden mt-2'"
            type="solid"
        />
        <div class="host-quantity-presention p-2 flex flex-row w-[100%]">
            <span
                class="w-[17.5%] py-2 pr-2 lg:text-center font-bold whitespace-nowrap"
                >Host Quantity:
            </span>
            <span class="w-[20%] py-2 pr-2 text-center font-bold">
                <slot name="hostQuantity"></slot>
            </span>
        </div>
    </div>
</template>
