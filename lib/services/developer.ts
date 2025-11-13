// lib/services/developer.ts
import { executor } from '../agents/executor';
import { Blueprint } from '../types/blueprint';

export async function buildProject(plan: Blueprint) {
  return await executor.executePlan(plan);
}
