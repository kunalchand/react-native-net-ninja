import { createContext, useState, useEffect } from "react";
import { ID } from "react-native-appwrite";
import { makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

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

  async function loginWithOAuth(provider = "google") {
    try {
      // Create deep link using the existing expoblank scheme
      const redirectUri = makeRedirectUri({
        scheme: "expoblank",
        preferLocalhost: true,
      });

      console.log("=== OAuth Debug Info ===");
      console.log("Redirect URI:", redirectUri);
      console.log("Provider:", provider);

      // Generate OAuth URL
      const authUrlResponse = account.createOAuth2Token(
        provider,
        redirectUri,
        redirectUri
      );

      console.log("Raw authUrlResponse:", authUrlResponse);

      // Try multiple approaches to get the URL string
      let authUrlString = authUrlResponse.toString();

      console.log("Final authUrlString:", authUrlString);
      console.log("=====================");

      // Open browser for OAuth flow
      const result = await WebBrowser.openAuthSessionAsync(
        authUrlString,
        redirectUri
      );

      if (result.type === "success") {
        console.log("OAuth success, processing callback...");
        const url = new URL(result.url);
        const secret = url.searchParams.get("secret");
        const userId = url.searchParams.get("userId");

        console.log(
          "OAuth callback params - secret:",
          !!secret,
          "userId:",
          userId
        );

        if (secret && userId) {
          // Create session with OAuth credentials
          await account.createSession(userId, secret);

          // Get user data and update state
          const userData = await account.get();
          setUser(userData);
          return userData;
        } else {
          throw new Error("OAuth authentication failed: Missing credentials");
        }
      } else if (result.type === "cancel") {
        throw new Error("OAuth flow was cancelled by user");
      } else {
        throw new Error("OAuth flow failed");
      }
    } catch (error) {
      console.log("OAuth Login Error:", error);
      throw new Error(error?.message || "OAuth authentication failed");
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
      value={{ user, login, loginWithOAuth, register, logout, authChecked }}
    >
      {children}
    </UserContext.Provider>
  );
}
