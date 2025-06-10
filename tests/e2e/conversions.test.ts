import { test, expect, type Locator } from "@playwright/test";
import {
    conversions,
    clickType,
    getAllInputs,
    fillAllInputs,
} from "@/composables/playwright.composable";

test.beforeAll(async ({ browser }) => {
    await browser.newPage();
});

test.describe("/conversions Sending data tests default", () => {
    test("conversion binary", async ({ page }) => {
        await conversions.default(page, ["192", "168", "0", "1"], 1);

        const content = await page
            .locator(".ipv4-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("11000000.10101000.00000000.00000001");
    });
    test("conversion decimal", async ({ page }) => {
        await conversions.default(page, ["192", "168", "0", "1"], 2);

        const content = await page
            .locator(".result-item .number-ip-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("3232235521");
    });
    test("conversion shorthand", async ({ page }) => {
        await conversions.default(page, ["255", "255", "255", "0"], 3);

        const content = await page
            .locator(".result-item .number-ip-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("24");
    });
});

test.describe("/conversions Sending data tests binary", () => {
    test("conversion default", async ({ page }) => {
        await conversions.binary(
            page,
            ["11000000", "10101000", "00000000", "00000001"],
            1,
            0,
        );

        const content = await page
            .locator(".result-item .ipv4-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("192.168.0.1");
    });
    test("conversion decimal", async ({ page }) => {
        await conversions.binary(
            page,
            ["11000000", "10101000", "00000000", "00000001"],
            1,
            2,
        );

        const content = await page
            .locator(".result-item .number-ip-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("3232235521");
    });
    test("conversion shorthand", async ({ page }) => {
        await conversions.binary(
            page,
            ["11111111", "11111111", "00000000", "00000000"],
            1,
            3,
        );

        const content = await page
            .locator(".result-item .number-ip-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("16");
    });
});

test.describe("/conversions Sending data tests decimal", () => {
    test("conversion default", async ({ page }) => {
        await conversions.numberIp(page, "3232235521", 2, 0);

        const content = await page
            .locator(".result-item .ipv4-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("192.168.0.1");
    });
    test("conversion binary", async ({ page }) => {
        await conversions.numberIp(page, "3232235521", 2, 1);

        const content = await page
            .locator(".result-item .ipv4-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("11000000.10101000.00000000.00000001");
    });
    test("conversion shorthand", async ({ page }) => {
        await conversions.numberIp(page, "4294967040", 2, 3);

        const content = await page
            .locator(".result-item .number-ip-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("24");
    });
});

test.describe("/conversions Sending data tests shorthand", () => {
    test("conversion default", async ({ page }) => {
        await conversions.numberIp(page, "24", 3);

        const content = await page
            .locator(".result-item .ipv4-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("255.255.255.0");
    });
    test("conversion binary", async ({ page }) => {
        await conversions.numberIp(page, "24", 3, 1);

        const content = await page
            .locator(".result-item .ipv4-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("11111111.11111111.11111111.00000000");
    });
    test("conversion decimal", async ({ page }) => {
        await conversions.numberIp(page, "24", 3, 2);

        const content = await page
            .locator(".result-item .number-ip-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("4294967040");
    });
});

test.describe("/conversions Incorrect data", () => {
    test("Shorthand cannot be generated", async ({ page }) => {
        await page.goto("/conversions");

        //Set input data type to inputType
        await clickType(page, 0, 1);

        //Set output data type to outputType
        await clickType(page, 1, 3);

        const allInputs: Locator[] = await getAllInputs(
            page,
            "binary-inputs-container",
            "binary-input-container",
        );
        await fillAllInputs(allInputs, [
            "11000000",
            "10101000",
            "00000000",
            "00000001",
        ]);

        page.getByRole("button", { name: "Get complete ip info" }).click();

        await page.waitForSelector(".error-container .error-400-container", {
            timeout: 15000,
        });

        const content = await page
            .locator(".error-container")
            .first()
            .allTextContents();

        expect(content[0]).toBe("Your data seems to be incorrect.");
    });
});
