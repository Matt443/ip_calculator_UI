import type { IpAllFormatsType } from "~/types/ip.type";

export type IpTypeSettingType = {
    clickCallback: Function;
    classCallback: Function;
    getter: Function;
    label: string;
};

export type IpValueSettingType = {
    valueGetter: Function;
    changeCallback: Function;
    label: string;
};

export type IpSettingType = {
    type: IpTypeSettingType;
    address: IpValueSettingType;
};

export interface IpPresentationType extends IpAllFormatsType {
    nameId: string;
}

export interface NetworkInfoPresentationType {
    addresses: IpPresentationType[];
    hostQuantity: number;
    maskShorthand: number;
}
