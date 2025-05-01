import type {
    IpAddressType,
    IpBinaryType,
    IpType,
    IpV4Type,
} from "~/types/store.type";
import type { AnyIpAddressStrategy } from "~/types/strategies.types";

export const anyIp: Record<IpType, AnyIpAddressStrategy> = {
    default: {
        /**
         *
         * @param {IpAddressType} previousAddress
         * @param {number} newVal
         * @param {number} index
         * @returns {IpAddressType}
         */
        changeAddress(
            previousAddress: IpAddressType,
            newVal: number,
            index: number,
        ): IpAddressType {
            //@ts-ignore
            previousAddress[index] = newVal;
            return previousAddress;
        },
        /**
         *
         * @returns {IpV4Type}
         */
        resetAddress(): IpV4Type {
            return [0, 0, 0, 0];
        },
    },
    binary: {
        /**
         *
         * @param {IpAddressType} previousAddress
         * @param {string} newVal
         * @param {number} index
         * @returns {IpAddressType}
         */
        changeAddress(
            previousAddress: IpAddressType,
            newVal: string,
            index: number,
        ): IpAddressType {
            //@ts-ignore
            previousAddress[index] = newVal;
            return previousAddress;
        },
        /**
         *
         * @returns {IpBinaryType}
         */
        resetAddress(): IpBinaryType {
            return ["", "", "", ""];
        },
    },
};
