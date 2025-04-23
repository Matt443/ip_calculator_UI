// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  alias: {
    "@config": "./config",
    "@assets": "./assets",
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/test-utils",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    "@nuxtjs/i18n",
  ],
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "de", name: "German", file: "de.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    langDir: "./",
  },
});
