import { createContext, useState, useMemo, useEffect } from "react";
import { ID } from "react-native-appwrite";

import { account } from "../lib/appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

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

  async function logout() {
    try {
      await account.deleteSession({ sessionId: "current" });
      setUser(null);
    } catch (error) {
      throw new Error(error?.message ?? "Logout Failed");
    }
  }

  async function getLoggedInUser() {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(null);
      console.log(error);
    } finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, authChecked }}
    >
      {children}
    </UserContext.Provider>
  );
}
