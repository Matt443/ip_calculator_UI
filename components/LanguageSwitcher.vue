<script setup lang="ts">
import { availableLanguages } from "@/config/config";
import type { LanguageType } from "~/types/store.type";

const { setLocale, locale } = useI18n();
const state = useStateStore();

function imgUrl(name: string) {
    return `/svg/${name}.svg`;
}

function changeLanguage(name: LanguageType) {
    state.changeLanguage(name);
    setLocale(name);
}

state.changeLanguage(locale.value);
</script>

<template>
    <div class="language-switcher-container w-[100%]">
        <button
            class="current-lang w-full flex bg-stone-950 items-center absolute left-[0] h-[42px]"
            popovertarget="my-popover"
        >
            <img
                :src="imgUrl(state.getCurrentLanguage)"
                alt="flag"
                class="w-[25px] m-2"
            />
            <span>{{ state.getCurrentLanguage }}</span>
        </button>
        <div
            id="my-popover"
            class="langs-container m-2 items-center absolute bottom-[0]"
            popover
        >
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
