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
};

export type NetworkInfoResponseType = NetworkInfoType & { status: number };
export type SubnetsResponseType = { data: NetworkInfoType[] } & {
    status: number;
};

export type ConversionResponseType = {
    joined: string[] | string;
    separated: number[] | string[];
    decimal?: number;
    shorthand?: number;
    status: number;
};

export type ClassResponseType = ClassDetailsType & {
    status: number;
};

export type ClassDetailsType = {
    name: "A" | "B" | "C" | "D" | "-";
    min: number[];
    max: number[];
    hostQuantity: number;
    defaultMask?: number[];
};

export type ConversionsSettingType = {
    resultType: IpType;
};
