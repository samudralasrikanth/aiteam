// store/useAuthStore.ts
import create from 'zustand';

type AuthState = {
  user: { email?: string } | null;
  setUser: (u: any) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
}));
