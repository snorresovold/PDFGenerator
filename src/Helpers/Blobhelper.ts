import { ContainerClient, BlobServiceClient, BlockBlobClient, BlobDeleteOptions, BlobDeleteResponse, BlobClient } from "@azure/storage-blob";
const connStr = process.env.CONNECTIONSTRING;
const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);

export async function CreateContainer() {
    const containerName = `newcontainer${new Date().getTime()}`;
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const createContainerResponse = await containerClient.create();
    console.log(`Create container ${containerName} successfully`, createContainerResponse.requestId);
}

export async function ListContainers(){
    let i = 1;
    let containers = blobServiceClient.listContainers();
    for await (const container of containers) {
      console.log(`Container ${i++}: ${container.name}`);
    }
}

export async function CreateBlob(containerClient: ContainerClient, content: string, blobName:string) {
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
    return blobName
}

export async function CreateBlobFromBuffer(containerClient: ContainerClient, buffer: any) {
  deleteBlob(containerClient, "output.pdf")
  const blockBlobClient = containerClient.getBlockBlobClient("output.pdf");
  await blockBlobClient.uploadData(buffer);
  return "output.pdf"
}

export async function downloadBlobToFile(
  blobName: string,
  fileNameWithPath: string
): Promise<void> {
  const containerClient = blobServiceClient.getContainerClient("newcontainer1710491836524");
  const blobClient = containerClient.getBlobClient(blobName);
  const downloadResult = await blobClient.downloadToFile(fileNameWithPath);
  if (!downloadResult.errorCode) {
    console.log(
      `download of ${blobName} success ${downloadResult.blobCommittedBlockCount}`
    );
  }
}

export async function DownloadBlobAsStream(
  containerClient: ContainerClient,
  blobName: string,
  writableStream: any
) {
  const blobClient: BlobClient = await containerClient.getBlobClient(blobName);

  const downloadResponse = await blobClient.download();

  if (!downloadResponse.errorCode && downloadResponse?.readableStreamBody) {
    downloadResponse.readableStreamBody.pipe(writableStream);
    console.log(`download of ${blobName} succeeded`);
  }
}

export async function deleteBlob(
  containerClient: ContainerClient,
  blobName: string
): Promise<void> {
  const blockBlobClient: BlockBlobClient =
    containerClient.getBlockBlobClient(blobName);
  const options: BlobDeleteOptions = {
    deleteSnapshots: 'include'
  };
  const blobDeleteResponse: BlobDeleteResponse = await blockBlobClient.delete(
    options
  );
  if (!blobDeleteResponse.errorCode) {
    console.log(`deleted blob ${blobName}`);
  }
}