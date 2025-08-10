import "./globals.css";
import type { ReactNode } from "react";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "SaaS Starter",
  description: "Dashboard starter by Pruthvi",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
