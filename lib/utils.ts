// lib/utils.ts
export const cn = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(' ');

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
