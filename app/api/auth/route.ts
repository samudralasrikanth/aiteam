// app/api/auth/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Lightweight auth route example for issuing a dev token (demo only).
 * Replace with NextAuth or proper auth in production.
 */
export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 });

  // In a real app create session and return cookie/session token
  return NextResponse.json({ token: `dev-token-${Date.now()}`, email });
}
