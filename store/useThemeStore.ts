// store/useThemeStore.ts
import create from 'zustand';

type ThemeState = { theme: 'dark' | 'light'; setTheme: (t: 'dark' | 'light') => void };

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}));
