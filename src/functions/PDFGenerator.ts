import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { exec, spawn } from "child_process";
import { series } from 'async';

function runCommand() {
    series([
      () => exec('cd web'),
      () => exec('cd html-generator'),
      () => exec('npm i'),
      () => exec('npm run dev')
    ]); 
    
    exec(`cd web && npm i && npm run dev`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing the script: ${error}`);
          return;
        }
        console.log(`Script output: ${stdout}`);
        console.error(`Script errors: ${stderr}`);
      });
};
export async function PDFGenerator(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    const name = request.query.get('name') || await request.text() || 'world';
    runCommand();
    return { body: `Hello, ${name}!` };
};

app.http('PDFGenerator', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: PDFGenerator
});
