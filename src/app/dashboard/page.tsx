// src/app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import TrafficArea from "@/components/TrafficArea";
import type { Metadata } from "next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Dashboard • SaaS Starter",
  description: "Product metrics overview",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-500">Snapshot of your product metrics</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <StatCard title="MRR" value="₹82,400" subtext="+6.2% MoM" />
          <StatCard title="Active Users" value="1,284" subtext="+3.1% WoW" />
          <StatCard title="Churn" value="2.4%" subtext="↓ 0.3 pts" />
          <StatCard title="Tickets" value="37" subtext="SLA 98%" />
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
          <div className="xl:col-span-2 rounded-2xl bg-white p-4 lg:p-6 shadow-sm">
            <h2 className="font-medium mb-4">Traffic &amp; Signups</h2>
            <div className="h-72">
              <TrafficArea />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 lg:p-6 shadow-sm">
            <h2 className="font-medium mb-4">Quick Actions</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between">
                <span>Create new project</span>
                <button className="px-3 py-1.5 rounded-xl bg-gray-900 text-white text-xs">New</button>
              </li>
              <li className="flex items-center justify-between">
                <span>Invite teammate</span>
                <button className="px-3 py-1.5 rounded-xl bg-gray-900 text-white text-xs">Invite</button>
              </li>
              <li className="flex items-center justify-between">
                <span>View incidents</span>
                <button className="px-3 py-1.5 rounded-xl bg-gray-900 text-white text-xs">Open</button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
