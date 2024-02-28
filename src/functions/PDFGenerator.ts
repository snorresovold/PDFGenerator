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
