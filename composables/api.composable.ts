import axios from "axios";
import type { NetworkInfoType } from "~/types/store.type";
export async function apiGet(
    url: string,
    paramsObject: object,
): Promise<{ data?: NetworkInfoType; code: number }> {
    try {
        const response = await axios.get(url + createParams(paramsObject));

        const result = {} as { data?: NetworkInfoType; code: number };
        result.code = response.status;

        if (response.status === 200) {
            result.data = response.data.result;
            return result;
        }

        return result;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return { code: error.response.status };
        }
        return { code: -1 };
    }
}

export function createParams(params: Record<string, any>) {
    let paramsString = "?";

    Object.keys(params).forEach((property: string) => {
        paramsString += `${property}=${params[property]}&`;
    });
    paramsString = paramsString.slice(0, paramsString.length - 1);
    return paramsString;
}
