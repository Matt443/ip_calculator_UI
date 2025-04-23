<script setup lang="ts"></script>

<template>
  <div class="bg-stone-950 w-[100%] h-[100%] text-stone-100">
    <LanguageSwitcher />
    <div class="content-container w-[1000px] m-auto">
      <IpTypeSwitcher>
        <template #label>
          <span>{{ $t("info.ip.type") }}:</span>
        </template>
      </IpTypeSwitcher>
      <ipv4Input>
        <template #label>
          <span>{{ $t("info.ip.label") }}:</span>
        </template>
      </ipv4Input>
      <IpTypeSwitcher>
        <template #label>
          <span>{{ $t("info.mask.type") }}:</span>
        </template>
      </IpTypeSwitcher>
      <ipv4Input>
        <template #label>
          <span>{{ $t("info.mask.label") }}:</span>
        </template>
      </ipv4Input>
    </div>
  </div>
</template>
