import type { IpAddressType, IpType } from "~/types/store.type";
/**
 *
 * @param {IpType} type
 * @param {IpAddressType} previousAddress
 * @param {number | string} value
 * @param {number} index
 * @returns {IpAddressType}
 */
export function changeAddress(
    type: IpType,
    previousAddress: IpAddressType,
    value: number | string,
    index: number,
): IpAddressType {
    if (
        (type === "default" || type === "binary") &&
        Array.isArray(previousAddress)
    ) {
        previousAddress[index] = value;
        return previousAddress;
    }
    return previousAddress;
}
