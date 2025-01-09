import { Given, When, Then, AfterAll, After } from '@cucumber/cucumber';
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

Given('que estou na página {string}', async function (pageUrl) {
    await page.goto(pageUrl);
    await page.setViewport({width: 1080, height: 1024});
});

When('eu procuro por {string}', async function (searchString) {
    await page.locator('#APjFqb').fill(searchString);
    await page.keyboard.press('Enter');
});

Then('o título da página deve ter o texto {string}', async function (string) {
    await page.waitForNavigation();
});

After(async function (scenario) {
    await page.screenshot({ path: `screenshots/${scenario.pickle.id}.png` });
});

AfterAll(async function () {
    await browser.close();
});