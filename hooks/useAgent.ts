// hooks/useAgent.ts
'use client';
import { useState } from 'react';
import { coordinator } from '../lib/agents/coordinator';
import type { Blueprint } from '../lib/types/blueprint';

export default function useAgent() {
  const [running, setRunning] = useState(false);

  async function run(input: Partial<Blueprint>) {
    setRunning(true);
    try {
      const res = await coordinator.run(input);
      return res;
    } finally {
      setRunning(false);
    }
  }

  return { run, running };
}
