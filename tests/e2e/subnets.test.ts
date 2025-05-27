import { test, expect } from "@playwright/test";
import {
    sampleRequests,
    setSubnets,
} from "@/composables/playwright.composable";

test("subnets default", async ({ page }) => {
    await page.goto("/subnets");

    await setSubnets(page, "2", 1);

    page.getByRole("button", { name: "Get complete ip info" }).click();

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });

    const content = await page
        .locator(".ipv4-container")
        .first()
        .allTextContents();
    expect(content[0]).toBe("192.168.0.0");
});

test("network info binary", async ({ page }) => {
    await page.goto("/subnets");

    await setSubnets(page, "2", 1);

    await sampleRequests.binary(page);

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });
    const content = await page
        .locator(".ip-comparison-container")
        .locator(".ip-comparison-row")
        .nth(1)
        .locator(".ipv4-container")
        .allTextContents();
    expect(content[0]).toBe("192.168.0.127");
});

test("network info decimal", async ({ page }) => {
    await page.goto("/subnets");

    await setSubnets(page, "2", 1);

    await sampleRequests.decimal(page);

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });
    const content = await page
        .locator(".ip-comparison-container")
        .locator(".ip-comparison-row")
        .nth(3)
        .locator(".ipv4-container")
        .allTextContents();
    expect(content[0]).toBe("192.168.0.1");
});

test("network info shorthand", async ({ page }) => {
    await page.goto("/subnets");

    await setSubnets(page, "2", 1);
    await sampleRequests.shorthand(page);

    await page.waitForSelector(".ip-comparison-container", { timeout: 15000 });

    const content = await page
        .locator(".ip-comparison-container")
        .locator(".ip-comparison-row")
        .nth(1)
        .locator(".ipv4-container")
        .allTextContents();
    expect(content[0]).toBe("255.0.0.127");
});
