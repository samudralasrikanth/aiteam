// lib/config.ts
export const config = {
  apiBase: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000',
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'Aiteam',
  defaultTheme: 'dark',
};
