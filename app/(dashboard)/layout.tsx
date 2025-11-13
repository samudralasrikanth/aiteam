// app/(dashboard)/layout.tsx
import { ReactNode } from 'react';
import { AuthProvider } from "../providers/AuthProvider";
import { StoreProvider } from "../providers/StoreProvider";
import Header from "../../components/navigation/Header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-layout min-h-screen bg-slate-900 text-white">
      <div className="p-6">{children}</div>
    </div>
  );
}
