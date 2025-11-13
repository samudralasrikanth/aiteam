// components/navigation/Header.tsx
'use client';
import Link from 'next/link';
import { useTheme } from '../../providers/ThemeProvider';
import { useAuth } from '../../providers/AuthProvider';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const auth = useAuth();

  return (
    <header className="bg-slate-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold">
          Aiteam
        </Link>
        <nav className="hidden md:flex gap-3">
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="btn"
        >
          Theme
        </button>

        {auth.user ? (
          <button onClick={() => auth.signOut()} className="btn btn-ghost">
            Sign out
          </button>
        ) : (
          <button
            onClick={() => auth.signIn('dev@aiteam.local')}
            className="btn btn-primary"
          >
            Sign in (demo)
          </button>
        )}
      </div>
    </header>
  );
}
