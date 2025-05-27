import type { Locator, Page } from "playwright-core";

/**
 *
 * @param {Locator[]} inputsContainer
 * @param {string[]} toFill
 * @returns {Promise<void>}
 */
export async function fillAllInputs(
    inputsContainer: Locator[],
    toFill: string[],
): Promise<void> {
    let i = 0;
    for (const inputContainer of inputsContainer) {
        await inputContainer.locator("input").fill(toFill[i]);
        i++;
    }
}

/**
 *
 * @param {Page} page
 * @param {string} parent - class name
 * @param {string} container - class name
 * @param {number} nth
 * @returns {Promise<Locator[]>}
 */
export async function getAllInputs(
    page: Page,
    parent: string,
    container: string,
    nth: number = 0,
): Promise<Locator[]> {
    return await page
        .locator(`.${parent}`)
        .nth(nth)
        .locator(`.${container}`)
        .all();
}

/**
 *
 * @param {Page} page
 * @param {number} nthTypeSwitcher
 * @param {number} nthType
 */
export async function clickType(
    page: Page,
    nthTypeSwitcher: number = 0,
    nthType: number = 0,
) {
    await page
        .locator(".type-switcher-container")
        .nth(nthTypeSwitcher)
        .locator(".type-container")
        .nth(nthType)
        .click();
}

export const sampleRequests = {
    /**
     *
     * @param {Page} page
     * @returns {Promise<void>}
     */
    binary: async function (page: Page): Promise<void> {
        await page.locator(".type-switcher-container").first().waitFor();

        await clickType(page, 0, 1);
        const ipInputsContainer = await getAllInputs(
            page,
            "binary-inputs-container",
            "binary-input-container",
            0,
        );
        await fillAllInputs(ipInputsContainer, [
            "11000000",
            "10101000",
            "00000000",
            "00000001",
        ]);

        await page.locator(".type-switcher-container").nth(1).waitFor();

        await clickType(page, 1, 1);
        const maskInputsContainer = await getAllInputs(
            page,
            "binary-inputs-container",
            "binary-input-container",
            1,
        );
        await fillAllInputs(maskInputsContainer, [
            "11111111",
            "11111111",
            "11111111",
            "00000000",
        ]);

        await page
            .getByRole("button", { name: "Get complete ip info" })
            .click();
    },
    /**
     *
     * @param {Page} page
     * @returns {Promise<void>}
     */
    decimal: async function (page: Page): Promise<void> {
        await page.locator(".type-switcher-container").first().waitFor();

        await clickType(page, 0, 2);

        await page
            .locator(".inputs-container")
            .nth(0)
            .locator(".number-input-container input")
            .fill("3232235521");

        await page.locator(".type-switcher-container").nth(1).waitFor();

        await clickType(page, 1, 2);
        await page
            .locator(".inputs-container")
            .nth(0)
            .locator(".number-input-container input")
            .nth(1)
            .fill("4294967040");

        await page
            .getByRole("button", { name: "Get complete ip info" })
            .click();
    },
    /**
     *
     * @param {Page} page
     * @returns {Promise<void>}
     */
    shorthand: async function (page: Page) {
        await page.locator(".type-switcher-container").first().waitFor();

        await clickType(page, 0, 3);

        await page
            .locator(".inputs-container")
            .nth(0)
            .locator(".number-input-container input")
            .fill("8");

        await page.locator(".type-switcher-container").nth(1).waitFor();

        await clickType(page, 1, 3);
        await page
            .locator(".inputs-container")
            .nth(0)
            .locator(".number-input-container input")
            .nth(1)
            .fill("24");

        await page
            .getByRole("button", { name: "Get complete ip info" })
            .click();
    },
};

/**
 *
 * @param {Page} page
 * @param {string} inputValue
 * @param {number} modeToBeActive
 * @returns {Promise<void>}
 */
export async function setSubnets(
    page: Page,
    inputValue: string,
    modeToBeActive: number,
): Promise<void> {
    await page
        .locator(".type-switcher-container")
        .nth(2)
        .locator(".type-container")
        .nth(modeToBeActive)
        .click();
    await page.locator(".subnets-setting-container input").fill(inputValue);
}

/**
 *
 * @param {Page} page
 * @param {number[]} hostQuantitities
 * @returns {Promise<void>}
 */
export async function setSubnetsVLSM(
    page: Page,
    hostQuantitities: number[],
): Promise<void> {
    for (const hostQuantity of hostQuantitities) {
        await page
            .locator(".vlsm-setting-container input")
            .fill(String(hostQuantity));
        await page.locator(".vlsm-setting-container button").nth(0).click();
    }
}
