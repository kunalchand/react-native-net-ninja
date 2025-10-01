// utils/env.js

function getEnvVar(name, fallback) {
  const value = process.env[name];

  if (value === undefined) {
    if (fallback !== undefined) return fallback;
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const getEnv = () => ({
  APPWRITE_PROJECT_ID: getEnvVar("APPWRITE_PROJECT_ID"),
  APPWRITE_PLATFORM: getEnvVar("APPWRITE_PLATFORM"),
});
