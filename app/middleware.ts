// app/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

/**
 * Redirect unauthenticated users trying to access /dashboard to /.
 * This is a simple check - replace with real session verification.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/dashboard')) {
    const token = req.cookies.get('aiteam_token')?.value;
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
