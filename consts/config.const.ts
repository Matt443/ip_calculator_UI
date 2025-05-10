import type { IpSettingType } from "~/types/props.type";

export function getIpInputConfig(state: any): IpSettingType {
    return {
        type: {
            clickCallback: state.changeIpType,
            classCallback: () => state.getIp.type,
            getter: () => state.getIp.type,
            label: "inputs.ip.type",
        },
        address: {
            changeCallback: state.changeIpAdress,
            valueGetter: () => state.getIp.address,
            label: "inputs.ip.label",
        },
    };
}
