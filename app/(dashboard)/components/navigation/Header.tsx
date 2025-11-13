"use client";

import React from "react";
import { useAuth } from '@/providers/AuthProvider';


export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
      <h1 className="text-xl font-bold text-white">AI Team</h1>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-gray-300">Hello, {user.name}</span>
            <button
              onClick={logout}
              className="px-3 py-1 text-sm bg-red-600 rounded-lg hover:bg-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <span className="text-gray-400 text-sm">Not signed in</span>
        )}
      </div>
    </header>
  );
}
