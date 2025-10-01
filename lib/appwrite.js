import { Client, Account, Avatars, TablesDB } from "react-native-appwrite";

import { getEnv } from "../utils/env.js";

const { APPWRITE_PROJECT_ID, APPWRITE_PLATFORM, APPWRITE_ENDPOINT } = getEnv();

export const client = new Client()
  .setProject(APPWRITE_PROJECT_ID)
  .setPlatform(APPWRITE_PLATFORM)
  .setEndpoint(APPWRITE_ENDPOINT);

export const account = new Account(client);

export const avatars = new Avatars(client);

export const tablesdb = new TablesDB(client);
