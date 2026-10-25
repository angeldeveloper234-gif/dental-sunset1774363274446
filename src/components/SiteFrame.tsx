"use client";

import type { ReactNode } from "react";
import { UserProvider } from "@/context/UserContext";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <div className="relative min-h-screen overflow-x-clip bg-white">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </div>
    </UserProvider>
  );
}
