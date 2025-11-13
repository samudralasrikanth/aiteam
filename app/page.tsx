// app/(public)/page.tsx
import Link from 'next/link';

export default function PublicHome() {
  return (
    <div className="container mx-auto p-8">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">Aiteam — AI Developer Teams</h1>
        <p className="text-lg text-slate-300 mb-6">
          Build apps by describing them. Architect, Designer, Developer, Deployer — all as agents.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="btn">
            Try Demo
          </Link>
          <Link href="/pricing" className="btn btn-secondary">
            Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
