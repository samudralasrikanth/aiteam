# 🤖 AI Team — Agentic Developer Platform

AI Team lets users describe an idea, and our **AI developer agents** (Architect, Developer, Deployer) build a full web app from it.

## 🚀 Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind + Shadcn/UI
- Zustand (state management)
- Firebase / FastAPI backend
- Agentic pipeline (Architect → Developer → Deployer)

## 🧩 Folder Overview
- `/app` — Route groups for public & dashboard
- `/lib` — Core logic, services, and LLM agents
- `/hooks` — Reusable client hooks
- `/store` — Zustand-based stores
- `/config` — Environment & constants

## ⚙️ Setup
```bash
pnpm install
pnpm dev
