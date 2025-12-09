import { test } from '@playwright/test';

test("Adding quantity product", async ({ page }) => {
    await test.step("Navigate to User Registration page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Click 	Bài học 4: Personal notes", async () => {
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
    })

    // await test.step("Add Title 1 to 10", async () => {
    //     const loTitle = page.locator('//input[@id="note-title"]');
    //     const loContent = page.locator('//textarea[@id="note-content"]');
    //     const loAddNote = page.locator('//button[@id="add-note"]')

    //     for (let i = 0; i < 11; i++) {
    //         await loTitle.fill(`Đây là title ${i}`);
    //         await loContent.fill(`Testing title ${i} với body content khá là dàiiiii`);
    //         await loAddNote.click({
    //             delay: 100
    //         });
    //     }
    // })

    await test.step("Title 1 - click", async () => {
        await page.locator('//input[@id="note-title"]').fill('click');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm click dùng để thực hiện click vào các phần tử trên trang web');
        await page.locator('//button[@id="add-note"]').click();
    })

    await test.step("Title 2 - fill", async () => {
        await page.locator('//input[@id="note-title"]').fill('fill');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web');
        await page.locator('//button[@id="add-note"]').click();
    })

    await test.step("Title 3 - type", async () => {
        await page.locator('//input[@id="note-title"]').fill('type');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng');
        await page.locator('//button[@id="add-note"]').click();
    })

    await test.step("Title 4 - hover", async () => {
        await page.locator('//input[@id="note-title"]').fill('hover');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover');
        await page.locator('//button[@id="add-note"]').click();
    })
    
    await test.step("Title 5 - check", async () => {
        await page.locator('//input[@id="note-title"]').fill('check');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked');
        await page.locator('//button[@id="add-note"]').click();
    })
    
    await test.step("Title 6 - uncheck", async () => {
        await page.locator('//input[@id="note-title"]').fill('uncheck');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked');
        await page.locator('//button[@id="add-note"]').click();
    })

    await test.step("Title 7 - select option", async () => {
        await page.locator('//input[@id="note-title"]').fill('selectOption');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown');
        await page.locator('//button[@id="add-note"]').click();
    })

    await test.step("Title 8 - press", async () => {
        await page.locator('//input[@id="note-title"]').fill('press');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác');
        await page.locator('//button[@id="add-note"]').click();
    })

    await test.step("Title 9 - double click", async () => {
        await page.locator('//input[@id="note-title"]').fill('dblclick');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web');
        await page.locator('//button[@id="add-note"]').click();
    })

    await test.step("Title 10 - drag and drop", async () => {
        await page.locator('//input[@id="note-title"]').fill('dragAndDrop');
        await page.locator('//textarea[@id="note-content"]').fill('Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web');
        await page.locator('//button[@id="add-note"]').click();
    })

    await test.step("Search", async () => {
        await page.locator('//input[@id="search"]').fill('một hoặc nhiều');
        await page.locator('//button[@id="add-note"]').click();
    })
})