import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { exec, spawn } from "child_process";
import * as fs from 'fs';
import path = require("node:path");


function getPDF(){
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

    exec('cd ./src/PDFGenerator && node dist/main.js', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    const PDF = fs.readFileSync("./src/PDFGenerator/output.pdf")
    return PDF
}

export async function PDFGenerator(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const data = request.query.get('data') || (await request.text()) || 'world';
    console.log(data);
    try {
        const files = fs.readdirSync(path.join(process.cwd(), './src/PDFGenerator'));
        console.log(files);
    } catch (err) {
        console.error('Error reading directory:', err);
    }
    const pdf = getPDF();
    try {
        // const pdf = fs.readFileSync(outputPath);
        return {
            body: pdf,
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="output.pdf"`
            }
        };
    } catch (err) {
        console.error('Error reading PDF file:', err);
        return {
            status: 500,
            body: 'Internal Server Error'
        };
    }
}

app.http('PDFGenerator', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: PDFGenerator
});
