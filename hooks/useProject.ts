// hooks/useProject.ts
import { useProjectStore } from '../store/useProjectStore';
export default function useProject() {
  return useProjectStore();
}
