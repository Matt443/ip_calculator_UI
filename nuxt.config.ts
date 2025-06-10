// https://nuxt.com/docs/api/configuration/nuxt-config

import "dotenv/config";
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    ssr: true,
    css: ["@/assets/css/main.css", "@mdi/font/css/materialdesignicons.css"],
    alias: {
        "@config": "./config",
        "@assets": "./assets",
    },
    nitro: {
        preset: "static",
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.API_URL,
        },
    },
    router: {
        //@ts-ignore
        mode: "history",
        generate: {
            fallback: "404.html", // Ensures unknown routes don't break
        },
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
        "@nuxtjs/seo",
    ],
    i18n: {
        defaultLocale: "de",
        strategy: "no_prefix",
        locales: [
            { code: "en", name: "English", file: "en.json" },
            { code: "de", name: "German", file: "de.json" },
        ],
        langDir: "./",
        lazy: true,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
            alwaysRedirect: true,
        },
    },
    icon: {
        clientBundle: {
            scan: true,

            sizeLimitKb: 256,
        },
    },
    vite: {
        server: {
            watch: {
                ignored: [
                    "**/dist/**",
                    "**/tests/e2e/**",
                    "**/playwright-report/**",
                    "**/test-results/**",
                ],
            },
        },
    },
    app: {
        head: {
            titleTemplate: "%s",
        },
    },
});
