import type { IpType, LanguageType } from "@/types/store.types";

export const useStateStore = defineStore("state", {
  state: () => ({
    ip: { type: "default" as IpType },
    language: "en" as LanguageType,
  }),
  getters: {
    getCurrentLanguage(): LanguageType {
      return this.language;
    },
    getCurrentType(): IpType {
      return this.ip.type;
    },
  },
  actions: {
    changeLanguage(language: LanguageType) {
      this.language = language;
    },
    changeType(type: IpType) {
      this.ip.type = type;
    },
  },
});
