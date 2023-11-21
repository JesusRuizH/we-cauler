import puppeteer from "puppeteer";
import { joshwComeau } from "./joshcomeau";
import { cssTricks } from "./cssTricks";
import { swizec } from "./swizec";

export default async function home(req, res) {
    let articles = []
    let article1 = await joshwComeau()
    let article2 = await cssTricks()
    let article3 = await swizec()
    articles.push(article1, article2, article3)
    return res.status(200).json(articles)
    console.log(articles)
    //return await res.status(200).json(joshwComeau());
    //cssTricks();
    //swizec();
}
