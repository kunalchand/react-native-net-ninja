import { Client, Account, Avatars } from "react-native-appwrite";

import { getEnv } from "../utils/env.js";

const { APPWRITE_PROJECT_ID, APPWRITE_PLATFORM } = getEnv();

export const client = new Client()
  .setProject(APPWRITE_PROJECT_ID)
  .setPlatform(APPWRITE_PLATFORM);

export const account = new Account(client);

export const avatars = new Avatars(client);
