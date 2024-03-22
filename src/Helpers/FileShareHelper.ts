const { ShareServiceClient, StorageSharedKeyCredential } = require("@azure/storage-file-share");
import * as crypto from 'crypto';

const account = process.env.ACCOUNT;
const accountKey = process.env.ACCOUNTKEY;

const credential = new StorageSharedKeyCredential(account, accountKey);
const serviceClient = new ShareServiceClient(
  `https://${account}.file.core.windows.net`,
  credential
);

const shareName = "cache";
const directoryName = "data";

async function ReadFiles() {
  const directoryClient = serviceClient.getShareClient(shareName).getDirectoryClient(directoryName);

  let dirIter = directoryClient.listFilesAndDirectories();
  let i = 1;
  for await (const item of dirIter) {
    if (item.kind === "directory") {
      console.log(`${i} - directory\t: ${item.name}`);
    } else {
      console.log(`${i} - file\t: ${item.name}`);
    }
    i++;
  }
}

async function streamToBuffer(readableStream: any) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => {
      chunks.push(data instanceof Buffer ? data : Buffer.from(data));
    });
    readableStream.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on("error", reject);
  });
}


async function CreateFile(content: string) {
  const directoryClient = serviceClient.getShareClient(shareName).getDirectoryClient(directoryName);

  const fileName = crypto.randomUUID() + ".json"
  const fileClient = directoryClient.getFileClient(fileName);
  await fileClient.create(content.length);
  console.log(`Create file ${fileName} successfully`);

  await fileClient.uploadRange(content, 0, content.length);
  console.log(`Upload file range "${content}" to ${fileName} successfully`);
  return fileName;
}

async function DownloadFile(fileName: string) {
  const fileClient = serviceClient
    .getShareClient(shareName)
    .rootDirectoryClient.getFileClient(fileName);

  const downloadFileResponse = await fileClient.download();
  console.log(
    `Downloaded file content: ${(
      await streamToBuffer(downloadFileResponse.readableStreamBody)
    ).toString()}`
  );
}

export { ReadFiles, CreateFile, DownloadFile }