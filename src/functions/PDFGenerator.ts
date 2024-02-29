import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { exec, spawn } from "child_process";
import { series } from 'async';

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
}

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
