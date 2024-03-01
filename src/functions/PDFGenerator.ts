import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { exec, spawn } from "child_process";
import { series } from 'async';
import * as fs from 'fs';
import path = require("node:path");

function runCommand(){
    const childProcess = spawn('npm', ['run', 'preview'], { cwd: 'src/html-generator' });

    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    childProcess.on('error', (error) => {
        console.error(`spawn error: ${error.message}`);
    });

    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
    exec('cd src/PDFGenerator && node dist/main.js', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    childProcess.kill();
}

export async function PDFGenerator(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    fs.readdir(path.join(process.cwd(), './src/PDFGenerator'), (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
    const output = "./src/PDFGenerator/output.pdf"
    console.log(files);
    });
    try {
        const outputPath = '/Users/snorresovold/Documents/GitHub/PDFGenerator/src/PDFGenerator/ouput.pdf';
        const body: any = await request.json();
        const pdfBuffer = fs.readFileSync(outputPath);
        console.log(pdfBuffer, "Test");
        return {
            body: pdfBuffer,
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${outputPath}.pdf"`
            }}
    } catch {
        return {
            body: "Bad Request, try giving an ISO-8859-1 encoded html string",
            status: 400,
        }
    }
};

app.http('PDFGenerator', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: PDFGenerator
});
