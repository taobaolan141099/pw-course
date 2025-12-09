import { test } from '@playwright/test';

test("Adding quantity product", async ({ page }) => {
    await test.step("Navigate to User Registration page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Click Bài học 3: Todo page", async () => {
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    })

    await test.step("Add 100 To do lists", async () => {
        const addList100 = page.locator('//input[@id="new-task"]')

        const clickButton100 = page.locator('//button[@id="add-task"]')
        for (let i = 0; i < 100; i++) {
            await addList100.fill(`Todo list ${i}`)
            await clickButton100.click();
        }
    })

    await test.step("Delete Odd Todo lists", async () => {
        //Nên chạy Dialog accept này trước khi popup xuất hiện. Ở trường hợp này nếu bỏ vào vòng for sẽ bị timeout
        page.on('dialog', dialog => dialog.accept());

        for (let i = 0; i < 100; i++) {
            if (i % 2 !== 0) {
                const delOddLists = page.locator(`//button[@id="todo-list-${i}-delete"]`);
                await delOddLists.click({
                    delay: 20
                });
            }
        }
    })
})