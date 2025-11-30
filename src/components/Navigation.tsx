"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export function Navigation() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const links = [
    { href: "/pantry", label: "Pantry" },
    { href: "/table", label: "Table" },
    { href: "/diary", label: "Diary" },
  ];

  const handleLogout = async () => {
    await signOut({ redirect: true });
  };

  return (
    <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl text-emerald-400">
            <Link href="/">Foodalyzer</Link>
          </div>
          <div className="flex space-x-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? "bg-emerald-600 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          {session?.user && (
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-300">
                <p className="font-medium">
                  {session.user.firstName || session.user.email}
                </p>
              </div>
              <Button
                onClick={handleLogout}
                variant="secondary"
                className="text-xs px-2 py-1"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
