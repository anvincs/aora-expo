import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.avn.aora",
  projectId: "662799534c976c738d35",
  databaseId: "66279b1b0b5d67b17ed9",
  userCollectionid: "66279b44734cb64c4c81",
  videoCollectionId: "66279b7dc251b9d3c5e2",
  storageId: "66279d7b590e5351e4a3",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
