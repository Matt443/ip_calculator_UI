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

export type IpV4Type = [number, number, number, number];

export type IpBinaryType = [string, string, string, string];

export type IpDecimalType = number;

export type IpShorthandType = number;

export type SubnetsCalculatingType = "host" | "subnets";
export type SubnetsSettingStateType = {
    method: SubnetsCalculatingType;
    hostQuantity: number;
    subnetsQuantity: number;
};
