import { test } from '@playwright/test';

test("Adding quantity product", async ({ page }) => {
    await test.step("Navigate to User Registration page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Click Bài học 2: Product page", async () => {
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    })

    await test.step("Product 1", async () => {
        await page.locator("//button[@data-product-id='1']").click();
        await page.locator("//button[@data-product-id='1']").click();
    })

    await test.step("Product 2", async () => {
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").dblclick();
    })

    await test.step("Product 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    })
})