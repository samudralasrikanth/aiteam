// lib/types/agent.ts
export type AgentStatus = 'idle' | 'running' | 'completed' | 'failed';

export type AgentResult = {
  agent: string;
  status: AgentStatus;
  message?: string;
  output?: any;
};
