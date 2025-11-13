// lib/services/architect.ts
import { planner } from '../agents/planner';
import { Blueprint } from '../types/blueprint';

export async function createBlueprint(input: Partial<Blueprint>) {
  return await planner.createPlan(input);
}
