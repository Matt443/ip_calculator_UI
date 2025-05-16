import type { NetworkInfoType } from "~/types/store.type";

export function prepareSubnets(data: NetworkInfoType[]) {
    const resultArray = data.map((ipAddress: NetworkInfoType) => {
        return {
            addresses: [
                {
                    nameId: "info.networkAddress",
                    ...ipAddress.networkAddress,
                },
                {
                    nameId: "info.broadcastAddress",
                    ...ipAddress.broadcastAddress,
                },
                { nameId: "info.ipMask", ...ipAddress.ipMask },
                { nameId: "info.hostFirst", ...ipAddress.hosts.first },
                { nameId: "info.hostLast", ...ipAddress.hosts.last },
            ],
            hostQuantity: ipAddress.hosts.quantity,
            maskShorthand: ipAddress.ipMask.shorthand || -1,
        };
    });
    return resultArray;
}
