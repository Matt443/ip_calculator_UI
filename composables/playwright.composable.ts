import type { Locator, Page } from "playwright-core";

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
