import { blogScraper } from "./blog-scraper"

const url = "https://www.joshwcomeau.com/";

const joshwComeau = async () => {
    let obj = await blogScraper(url, 'article', 'h3', 'p')
    return obj
};

export { joshwComeau };


