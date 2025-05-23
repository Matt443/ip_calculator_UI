import { test, expect } from "@playwright/test";
import {
    clickType,
    getAllInputs,
    fillAllInputs,
} from "@/composables/playwright.composable";

test.beforeAll(async ({ browser }) => {
    await browser.newPage();
});
test("network info default", async ({ page }) => {
    await page.goto("/");

    page.getByRole("button", { name: "Get complete ip info" }).click();

    await page.waitForSelector(".ip-comparison-container", { timeout: 5000 });
    await page.waitForTimeout(5000);

    const content = await page
        .locator(".ipv4-container")
        .first()
        .allTextContents();
    expect(content[0]).toBe("192.168.0.0");
});

test("network info binary", async ({ page }) => {
    await page.goto("/");

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

    await page.getByRole("button", { name: "Get complete ip info" }).click();

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });
    const content = await page
        .locator(".ip-comparison-container")
        .locator(".ip-comparison-row")
        .nth(1)
        .locator(".ipv4-container")
        .allTextContents();
    expect(content[0]).toBe("192.168.0.255");
});
