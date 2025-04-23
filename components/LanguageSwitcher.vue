<script setup lang="ts">
import { availableLanguages } from "@/config/config";
import type { LanguageType } from "~/types/store.types";

const { setLocale } = useI18n();
const state = useStateStore();

function imgUrl(name: string) {
  return `/svg/${name}.svg`;
}

function changeLanguage(name: LanguageType) {
  state.changeLanguage(name);
  setLocale(name);
}
</script>

<template>
  <div class="language-switcher-container">
    <button
      class="current-lang w-full flex bg-stone-950 items-center"
      popovertarget="my-popover"
    >
      <img
        :src="imgUrl(state.getCurrentLanguage)"
        alt="flag"
        class="w-[25px] m-2"
      />
      <span>{{ state.getCurrentLanguage }}</span>
    </button>
    <div id="my-popover" class="langs-container m-2 items-center" popover>
      <div
        v-for="lang in availableLanguages"
        :key="lang"
        class="flex hover:bg-stone-200 p-1"
        @click="changeLanguage(lang)"
      >
        <img :src="imgUrl(lang)" alt="flag" class="w-[25px] m-2" />
        <span class="w-full">{{ lang }}</span>
      </div>
    </div>
  </div>
</template>
