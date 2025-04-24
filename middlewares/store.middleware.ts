import type { IpAddressType, IpType } from "~/types/store.types";

export function changeAddress(
  type: IpType,
  previousAddress: IpAddressType,
  value: number | string,
  index: number,
) {
  if (type === "default" && Array.isArray(previousAddress)) {
    previousAddress[index] = value;
    return previousAddress;
  }
  return previousAddress;
}
