<script setup lang="ts">
const state = useStateStore();
</script>

<template>
  <div class="bg-stone-950 w-[100%] h-[100%] text-stone-100">
    <LanguageSwitcher />
    <div class="content-container w-[1000px] m-auto">
      <IpTypeSwitcher
        :click-callback="state.changeIpType"
        :class-callback="
          () => {
            const { type } = state.getIp;
            return type;
          }
        "
      >
        <template #label>
          <span>{{ $t("info.ip.type") }}:</span>
        </template>
      </IpTypeSwitcher>
      <ipv4Input
        :change-callback="state.changeIpAdress"
        :value-getter="
          () => {
            const { address } = state.getIp;
            return address;
          }
        "
      >
        <template #label>
          <span>{{ $t("info.ip.label") }}:</span>
        </template>
      </ipv4Input>
      <IpTypeSwitcher
        :click-callback="state.changeMaskType"
        :class-callback="
          () => {
            const { type } = state.getMask;
            return type;
          }
        "
      >
        <template #label>
          <span>{{ $t("info.mask.type") }}:</span>
        </template>
      </IpTypeSwitcher>
      <ipv4Input
        :change-callback="state.changeMaskAdress"
        :value-getter="
          () => {
            const { address } = state.getMask;
            return address;
          }
        "
      >
        <template #label>
          <span>{{ $t("info.mask.label") }}:</span>
        </template>
      </ipv4Input>
      <UButton
        trailing-icon="i-lucide-arrow-right"
        class="flex align-center bg-stone-700 border-stone-700 border-[2px] px-3 py-1 rounded-sm group hover:bg-transparent duration-500 cursor-pointer"
        :ui="{
          trailingIcon: 'ml-1 group-hover:translate-x-[5px] duration-500',
        }"
        >{{ $t("info.button") }}</UButton
      >
    </div>
  </div>
</template>
