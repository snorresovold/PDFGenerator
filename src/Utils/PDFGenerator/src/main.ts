import puppeteer from "puppeteer";

async function generatePDFFromHTML(html: string, outputPath: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(html)
    await page.pdf({ path: outputPath, format: 'A4' });
    await browser.close();
}

generatePDFFromHTML("http://localhost:5173/", "ouput.pdf")