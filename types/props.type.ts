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
