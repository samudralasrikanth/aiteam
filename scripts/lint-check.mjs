#!/usr/bin/env node
// scripts/lint-check.mjs
import { spawnSync } from 'child_process';
const res = spawnSync('pnpm', ['lint'], { stdio: 'inherit' });
process.exit(res.status);
