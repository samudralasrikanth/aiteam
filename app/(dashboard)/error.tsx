// app/(dashboard)/error.tsx
'use client';
import { useEffect } from 'react';

export default function DashboardError({ error }: { error: Error }) {
  useEffect(() => {
    console.error('Dashboard error', error);
  }, [error]);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold">Something went wrong</h2>
      <pre className="mt-4 text-sm text-red-400">{error.message}</pre>
    </div>
  );
}
