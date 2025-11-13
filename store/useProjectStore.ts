// store/useProjectStore.ts
import create from 'zustand';

type Project = {
  id: string;
  name: string;
  description?: string;
  status?: string;
  url?: string;
};

type ProjectState = {
  projects: Project[];
  add: (p: Project) => void;
  loadMock: () => void;
};

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  add: (p) => set((s) => ({ projects: [...s.projects, p] })),
  loadMock: () =>
    set(() => ({
      projects: [
        { id: '1', name: 'Portfolio', description: 'Personal site', status: 'deployed', url: '#' },
        { id: '2', name: 'Landing', description: 'Marketing page', status: 'building', url: '#' },
      ],
    })),
}));
