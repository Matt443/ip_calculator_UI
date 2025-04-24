export type LanguageType = "de" | "en";

export type IpType = "default" | "decimal" | "binary" | "shorthand";

export type IpAddressType = Array<number> | number | Array<string>;

export type IpStateType = {
  type: IpType;
  address: IpAddressType;
};
