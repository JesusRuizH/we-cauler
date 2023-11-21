import { blogScraper } from "./blog-scraper"

const url = "https://css-tricks.com";

const cssTricks = async () => {
    let obj = await blogScraper(url, 'article', 'a', 'div');
    return obj
};

export { cssTricks };