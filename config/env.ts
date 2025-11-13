export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
};
