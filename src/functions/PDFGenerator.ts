import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { exec, spawn } from "child_process";

function RunFiles () {
    exec('ping google.com', (error, stdout, stderr) => {
  
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }console.log(`stdout:\n${stdout}`);
      }
    );
};

export async function PDFGenerator(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    exec("ls -l", (error, stdout, stderr) => {
        if (error) {
            context.log(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            context.log(`Stderr: ${stderr}`);
            return;
        }
        context.log(`Stdout: ${stdout}`);
    });
    RunFiles()

    return { body: `Hello, ${name}!` };
};

app.http('PDFGenerator', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: PDFGenerator
});