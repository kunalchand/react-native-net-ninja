function requireEnv(name, value) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const getEnv = () => ({
  APPWRITE_PROJECT_ID: requireEnv(
    "EXPO_PUBLIC_APPWRITE_PROJECT_ID",
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
  ),
  APPWRITE_PLATFORM: requireEnv(
    "EXPO_PUBLIC_APPWRITE_PLATFORM",
    process.env.EXPO_PUBLIC_APPWRITE_PLATFORM
  ),
  APPWRITE_PROJECT_NAME: requireEnv(
    "EXPO_PUBLIC_APPWRITE_PROJECT_NAME",
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME
  ),
  APPWRITE_ENDPOINT: requireEnv(
    "EXPO_PUBLIC_APPWRITE_ENDPOINT",
    process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT
  ),
});
