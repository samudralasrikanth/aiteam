#!/usr/bin/env node
import { spawnSync } from 'child_process';
const res = spawnSync('pnpm', ['build'], { stdio: 'inherit' });
process.exit(res.status);
