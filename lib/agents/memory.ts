// lib/agents/memory.ts
const store = new Map<string, any>();

export const memory = {
  async save(key: string, value: any) {
    store.set(key, value);
  },
  async get(key: string) {
    return store.get(key);
  },
};
