import { BlobServiceClient } from "@azure/storage-blob";
import { CreateBlobFromBuffer } from "../../Helpers/Blobhelper";
import puppeteer from "puppeteer";

const connStr = process.env.CONNECTIONSTRING;
const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
const containerClient = blobServiceClient.getContainerClient("newcontainer1710491836524");

async function generatePDFFromHTML(html: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(html, {waitUntil: "networkidle2"});
    const pdf = await page.pdf({ format: 'A4', });
    CreateBlobFromBuffer(containerClient, pdf)
    await browser.close();
}

generatePDFFromHTML("http://localhost:4173/");