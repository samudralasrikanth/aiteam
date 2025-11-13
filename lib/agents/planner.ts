// lib/agents/planner.ts
import { Blueprint } from '../types/blueprint';
import { logger } from '../logger';

export const planner = {
  async createPlan(input: Partial<Blueprint>) {
    logger.info('Planner: creating plan from input', input);
    // Minimal plan generation (in real system call LLM)
    const plan: Blueprint = {
      app_name: input.app_name || 'ai-app',
      goal: input.goal || 'Auto-generated app',
      type: input.type || 'web',
      features: input.features || ['home'],
      tech_stack: input.tech_stack || {
        frontend: 'Next.js',
        backend: 'FastAPI',
        database: 'Firestore',
      },
      ui_theme: input.ui_theme || 'cyber',
    };
    return plan;
  },
};
