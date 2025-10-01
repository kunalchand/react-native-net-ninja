import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setProject("68dc867d0035f09a3be6")
  .setPlatform("dev.netninja.shelfie.blank");

export const account = new Account(client);

export const avatars = new Avatars(client);
