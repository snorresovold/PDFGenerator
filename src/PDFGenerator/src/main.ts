import puppeteer from "puppeteer";

async function generatePDFFromHTML(html: string, outputPath: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(html, {waitUntil: "networkidle2"})
    await page.pdf({ path: outputPath, format: 'A4' });
    await browser.close();
}

generatePDFFromHTML("http://localhost:4173/", "/Users/snorresovold/Documents/GitHub/PDFGenerator/src/functions/output.pdf")