import type {
    IpAddressType,
    IpBinaryType,
    IpDecimalType,
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
            (previousAddress as any)[index] = newVal;
            return previousAddress;
        },
        /**
         *
         * @returns {IpV4Type}
         */
        resetAddress(): IpV4Type {
            return [0, 0, 0, 0];
        },
        prepareToSend(address: IpAddressType): string {
            if (typeof address !== "number") return address.join(".");
            return String(address);
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
            (previousAddress as any)[index] = newVal;
            return previousAddress;
        },
        /**
         *
         * @returns {IpBinaryType}
         */
        resetAddress(): IpBinaryType {
            return ["", "", "", ""];
        },
        prepareToSend(address: IpAddressType): string {
            if (typeof address !== "number") return address.join("");
            return String(address);
        },
    },
    decimal: {
        /**
         *
         * @param {IpAddressType} newVal
         * @returns {IpAddressType}
         */
        changeAddress(
            previousAddress: IpAddressType,
            newVal: number,
            index: number,
        ): IpAddressType {
            return newVal;
        },
        /**
         *
         * @returns {IpDecimalType}
         */
        resetAddress(): IpDecimalType {
            return 0;
        },
        prepareToSend(address: IpAddressType): string {
            return String(address);
        },
    },
    shorthand: {
        /**
         *
         * @param newVal
         * @returns {newVal}
         */
        changeAddress(
            previousAddress: IpAddressType,
            newVal: number,
            index: number,
        ): IpAddressType {
            return newVal;
        },
        /**
         *
         * @returns {IpDecimalType}
         */
        resetAddress(): IpDecimalType {
            return 0;
        },
        prepareToSend(address: IpAddressType): string {
            return String(address);
        },
    },
};
