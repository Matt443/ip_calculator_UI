import { test, expect } from "@playwright/test";
import { sampleRequests } from "@/composables/playwright.composable";

test.beforeAll(async ({ browser }) => {
    await browser.newPage();
});
test("network info default", async ({ page }) => {
    await page.goto("/");

    page.getByRole("button", { name: "Get complete ip info" }).click();

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });

    const content = await page
        .locator(".ipv4-container")
        .first()
        .allTextContents();
    expect(content[0]).toBe("192.168.0.0");
});

test("network info binary", async ({ page }) => {
    await page.goto("/");

    await sampleRequests.binary(page);

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });
    const content = await page
        .locator(".ip-comparison-container")
        .locator(".ip-comparison-row")
        .nth(1)
        .locator(".ipv4-container")
        .allTextContents();
    expect(content[0]).toBe("192.168.0.255");
});

test("network info decimal", async ({ page }) => {
    await page.goto("/");

    await sampleRequests.decimal(page);

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });

    const content = await page
        .locator(".ip-comparison-container")
        .locator(".ip-comparison-row")
        .nth(1)
        .locator(".ipv4-container")
        .allTextContents();
    expect(content[0]).toBe("192.168.0.255");
});

test("network info shorthand", async ({ page }) => {
    await page.goto("/");

    await sampleRequests.shorthand(page);

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });

    const content = await page
        .locator(".ip-comparison-container")
        .locator(".ip-comparison-row")
        .nth(1)
        .locator(".ipv4-container")
        .allTextContents();
    expect(content[0]).toBe("255.0.0.255");
});
