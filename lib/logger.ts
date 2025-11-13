// lib/logger.ts
const isProd = process.env.NODE_ENV === 'production';

export const logger = {
  info: (...args: any[]) => {
    if (!isProd) console.log('[INFO]', ...args);
  },
  warn: (...args: any[]) => {
    if (!isProd) console.warn('[WARN]', ...args);
  },
  error: (...args: any[]) => {
    console.error('[ERROR]', ...args);
  },
};
