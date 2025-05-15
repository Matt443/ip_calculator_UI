import type {
    IpStateType,
    IpType,
    LanguageType,
    NetworkInfoType,
    SubnetsCalculatingType,
    SubnetsSettingStateType,
} from "~/types/store.type";
// import 'dotenv/config'

export const useStateStore = defineStore("state", {
    state: () => ({
        ip: { type: "default", address: [192, 168, 0, 1] } as IpStateType,
        mask: { type: "default", address: [255, 255, 255, 0] } as IpStateType,
        language: "en" as LanguageType,
        subnets: {
            method: "host",
            hostQuantity: 0,
            subnetsQuantity: 0,
        } as SubnetsSettingStateType,
        filters: [] as number[],
        networkInfo: { status: 0 } as NetworkInfoType,
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
        getSubnets(): SubnetsSettingStateType {
            return this.subnets;
        },
        getFilters(): number[] {
            return this.filters;
        },
        getNetworkInfo(): NetworkInfoType {
            return this.networkInfo;
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
        changeSubnetsType(method: SubnetsCalculatingType) {
            this.subnets.method = method;
        },
        changeSubnetsSetting(value: number) {
            if (this.subnets.method === "host") {
                this.subnets.hostQuantity = value;
                return true;
            }
            this.subnets.subnetsQuantity = value;
        },
        addFilter(value: number) {
            this.filters.push(value);
        },
        removeFilter(value: number) {
            const index = this.filters.indexOf(value);
            this.filters.splice(index, 1);
        },
        removeAllFilters() {
            this.filters = [];
        },
        async networkInfoApiCall() {
            const response = await apiGet(useRuntimeConfig().public.apiBase, {
                ip: anyIp[this.ip.type].prepareToSend(this.ip.address),
                type: this.ip.type,
                mask: anyIp[this.mask.type].prepareToSend(this.mask.address),
                maskType: this.mask.type,
            });
            this.networkInfo.status = response.code;
            if (response.data)
                this.networkInfo = { ...this.networkInfo, ...response.data };
        },
    },
});
