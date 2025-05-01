import type { IpStateType, IpType, LanguageType } from "~/types/store.type";

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
            this.ip.address = anyIp[this.ip.type].resetAddress();
        },
        changeMaskType(type: IpType) {
            this.mask.type = type;
            this.mask.address = anyIp[this.mask.type].resetAddress();
        },
        changeIpAdress(value: number | string, index: number = 0) {
            this.ip.address = anyIp[this.ip.type].changeAddress(
                this.ip.address,
                value,
                index,
            );
        },
        changeMaskAdress(value: number | string, index: number = 0) {
            this.mask.address = anyIp[this.mask.type].changeAddress(
                this.mask.address,
                value,
                index,
            );
        },
    },
});
