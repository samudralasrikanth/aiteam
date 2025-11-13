// lib/agents/coordinator.ts
import { Blueprint } from '../types/blueprint';
import { planner } from './planner';
import { executor } from './executor';
import { memory } from './memory';
import { logger } from '../logger';

export const coordinator = {
  async run(buildRequest: Partial<Blueprint>) {
    logger.info('Coordinator: starting run');
    const plan = await planner.createPlan(buildRequest);
    await memory.save('latest_plan', plan);
    const result = await executor.executePlan(plan);
    return result;
  },
};
