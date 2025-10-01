import { createContext, useState, useMemo } from "react";
import { ID } from "react-native-appwrite";

import { account } from "../lib/appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession({ email, password });
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw new Error(error?.message ?? "Login Failed");
    }
  }

  async function register(email, password) {
    try {
      await account.create({ userId: ID.unique(), email, password });
      await login(email, password);
    } catch (error) {
      throw new Error(error?.message ?? "Registration Failed");
    }
  }

  async function logout() {}

  const value = useMemo(
    () => ({ user, login, register, logout }),
    [user] // only re-create if `user` changes
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
