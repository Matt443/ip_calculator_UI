import type { IpAllFormatsType } from "./ip.type";

export type LanguageType = "de" | "en";

export type IpType = "default" | "decimal" | "binary" | "shorthand";

export type IpAddressType =
    | IpV4Type
    | IpBinaryType
    | IpDecimalType
    | IpShorthandType;

export type IpStateType = {
    type: IpType;
    address: IpAddressType;
};

export type IpV4Type = Number[];

export type IpBinaryType = String[];

export type IpDecimalType = number;

export type IpShorthandType = number;

export type SubnetsCalculatingType = "host" | "subnets";
export type SubnetsSettingStateType = {
    method: SubnetsCalculatingType;
    hostQuantity: number;
    subnetsQuantity: number;
};

export type NetworkInfoType = {
    networkAddress: IpAllFormatsType;
    broadcastAddress: IpAllFormatsType;
    ipMask: IpAllFormatsType;
    hosts: {
        quantity: number;
        first: IpAllFormatsType;
        last: IpAllFormatsType;
    };
    status: number;
};
