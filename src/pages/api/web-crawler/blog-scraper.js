import puppeteer from "puppeteer";

const blogScraper = async (url, elements, titleElement, information) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const allArticles = await page.evaluate((allElementsSelector, titleSelector, infor) => {
        const articles = document.querySelectorAll(allElementsSelector);

        return Array.from(articles).slice(0, 3).map((article) => {
            const title = article.querySelector(titleSelector).innerText;
            const info = article.querySelector(infor).innerText;
            const url = article.querySelector('a').href;
            return { title, url , info};
        });
    }, elements, titleElement, information);
    return allArticles
};

export { blogScraper };