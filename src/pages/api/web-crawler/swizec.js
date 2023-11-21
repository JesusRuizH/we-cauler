import { blogScraper } from "./blog-scraper"

const url = "https://swizec.com/blog";

const swizec = async (req, res) => {
    let obj = await blogScraper(url, '.css-zo9vbf', 'a', 'p');
    return obj
};

export { swizec };