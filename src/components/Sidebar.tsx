"use client";

import Link from "next/link";
import { LayoutDashboard, Folder, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects",  label: "Projects",  icon: Folder },
  { href: "/settings",  label: "Settings",  icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:block w-60 p-4 lg:p-6 bg-white border-r border-gray-100">
      <div className="mb-8">
        <Link href="/dashboard" className="inline-block">
          <div className="font-semibold text-lg">SaaS Starter</div>
          <div className="text-xs text-gray-500">by Pruthvi</div>
        </Link>
      </div>

      <nav className="space-y-1">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-3 px-3 py-2 rounded-xl text-sm",
              pathname === href ? "bg-gray-900 text-white" : "hover:bg-gray-100"
            )}
          >
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
