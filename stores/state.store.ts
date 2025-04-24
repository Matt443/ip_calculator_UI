import type { IpStateType, IpType, LanguageType } from "@/types/store.types";
import { changeAddress } from "~/middlewares/store.middleware";

export const useStateStore = defineStore("state", {
  state: () => ({
    ip: { type: "default", address: [0, 0, 0, 0] } as IpStateType,
    mask: { type: "default", address: [255, 255, 255, 0] } as IpStateType,
    language: "en" as LanguageType,
  }),
  getters: {
    getCurrentLanguage(): LanguageType {
      return this.language;
    },
    getIp(): IpStateType {
      return this.ip;
    },
    getMask(): IpStateType {
      return this.mask;
    },
  },
  actions: {
    changeLanguage(language: LanguageType) {
      this.language = language;
    },
    changeIpType(type: IpType) {
      this.ip.type = type;
    },
    changeMaskType(type: IpType) {
      this.mask.type = type;
    },
    changeIpAdress(value: number, index: number = 0) {
      this.ip.address = changeAddress(
        this.ip.type,
        this.ip.address,
        value,
        index,
      );
    },
    changeMaskAdress(value: number, index: number = 0) {
      this.mask.address = changeAddress(
        this.mask.type,
        this.mask.address,
        value,
        index,
      );
    },
  },
});
