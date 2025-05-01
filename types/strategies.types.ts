import type { IpAddressType } from "./store.type";

export type AnyIpAddressStrategy = {
    changeAddress(
        previousAddress: IpAddressType,
        value: string | number,
        index: number,
    ): IpAddressType;
    resetAddress(): IpAddressType;
};
