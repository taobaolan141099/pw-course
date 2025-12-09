import { test } from '@playwright/test';

test("Excercise Input value", async ({ page }) => {
    await test.step("Navigate to User Registration page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Click Bài học 1: Register Page", async () => {
        await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
    })

    await test.step("Fill value", async () => {
        //Input username
        await page.locator("//input[@id='username']").pressSequentially('Lan testing', {
            delay: 100,
        });

        //Input email
        await page.locator("//input[@id='email']").pressSequentially('Lantesting@email.com', {
            delay: 100,
        });

        //Select radio gender male
        await page.locator("//input[@id='male']").check();
        const isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);

        //Select radio gender female. Sẽ ko chọn đc vì ratio chỉ có thể chọn 1 trong các option đấy
        await page.locator("//input[@id='male']").check();
        const isCheckedFeMale = await page.locator("//input[@id='female']").isChecked();
        console.log(isCheckedFeMale);

        //Select checkbox hobbies. 
        await page.locator("//input[@id='reading']").setChecked(true);
        await page.locator("//input[@id='traveling']").setChecked(true);

        //Select interests. 
        await page.locator("//select[@id='interests']").selectOption("Art");

        //Select country
        await page.locator("//select[@id='country']").selectOption("Canada");

        //Select birthday
        await page.locator("//input[@id='dob']").pressSequentially('10/14/1999', {
            delay: 100,
        });

        //Select file upload
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/lesson-5.txt");

        //input Biography
        await page.locator("//textarea[@id='bio']").pressSequentially('Đây là 1 đoạn text khá dài', {
            delay: 100,
        });

        //Select rating
        await page.locator("//input[@id='rating']").fill('10');

        //Select color
        await page.locator("//input[@id='favcolor']").fill('#ffffff');

        //Select color
        await page.hover('text=Hover over me');
        await page.locator("//input[@id='newsletter']").setChecked(true);

        //Enable feature
        const toggle = page.locator("//input[@id='toggleOption']");
        const box = await toggle.boundingBox();

        //Xác định vị trí bấm chuột
        await page.mouse.click(box.x, box.y);

        //Rating star
        // Chưa suy nghĩ và tìm hiểu ra được cách để rate star
        // await page.locator("//div[@id='starRating']").fill('5');
    })
})