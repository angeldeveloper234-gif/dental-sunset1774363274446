"use client";

import type { ReactNode } from "react";
import { UserProvider } from "@/context/UserContext";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

import { ScrollMotion } from "@/components/ui/ScrollMotion";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <div className="relative min-h-screen overflow-x-clip bg-white">
        <ScrollMotion />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </div>
    </UserProvider>
  );
}
