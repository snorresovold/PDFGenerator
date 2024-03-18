import { ContainerClient, BlobServiceClient, BlockBlobClient, BlobDeleteOptions, BlobDeleteResponse } from "@azure/storage-blob";
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

export async function CreateBlob(containerClient: ContainerClient, content: string) {
    const blobName = "newblob" + new Date().getTime();
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
    return blobName
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