import axios from "axios";
import type {
    ConversionResponseType,
    NetworkInfoType,
} from "~/types/store.type";
/**
 *
 * @param {string} url
 * @param {object} paramsObject - object with query parameters
 * @returns {Promise<{ data?: NetworkInfoType | NetworkInfoType[] | ConversionResponseType; code: number }}
 */
export async function apiGet(
    url: string,
    paramsObject: object,
): Promise<{
    data?: NetworkInfoType | NetworkInfoType[] | ConversionResponseType;
    code: number;
}> {
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

/**
 *
 * @param {string} url
 * @param {object} postBody
 * @returns {{ data?: NetworkInfoType | NetworkInfoType[]; code: number }}
 */
export async function apiPost(
    url: string,
    postBody: object,
): Promise<{ data?: NetworkInfoType | NetworkInfoType[]; code: number }> {
    try {
        const response = await axios.post(url, postBody);

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

/**
 *
 * @param {Record<string, any>}params
 * @returns {string}
 */
export function createParams(params: Record<string, any>): string {
    let paramsString = "?";

    Object.keys(params).forEach((property: string) => {
        paramsString += `${property}=${params[property]}&`;
    });
    paramsString = paramsString.slice(0, paramsString.length - 1);
    return paramsString;
}
