<script setup lang="ts"></script>

<template>
    <div
        class="page-container bg-stone-950 w-[100%] min-h-[100%] text-stone-100 pt-[50px]"
    >
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2"></div>
        <NetworkMaskInput>
            <template #before-input>
                <SubnetsSetting></SubnetsSetting>
            </template>
        </NetworkMaskInput>
    </div>
</template>
