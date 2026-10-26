"use client";

import { motion } from "framer-motion";
import { Menu, X, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { branding } = config;
  const onHome = pathname === "/";
  const links = [
    {href:"/",label:"Inicio",active:pathname==="/"},
    {href:"/about",label:"La clínica",active:pathname==="/about"},
    {href:"/services",label:"Tratamientos",active:pathname==="/services"||pathname.startsWith("/tratamientos/")},
    {href:"/primera-visita",label:"Primera visita",active:pathname==="/primera-visita"},
    {href:"/blog",label:"Blog",active:pathname.startsWith("/blog")},
    {href:"/contact",label:"Contacto",active:pathname==="/contact"},
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7EDFA] bg-white/95 shadow-[0_4px_20px_rgba(21,37,66,0.04)] backdrop-blur-xl">
      <div className="bg-primary text-white">
        <div className="container mx-auto flex min-h-10 items-center justify-between gap-3 px-5 text-[11px] font-medium sm:px-6">
          <div className="flex items-center gap-6">
            <a
              href="/contact"
              className="inline-flex min-h-10 items-center gap-2 hover:text-white/75"
            >
              <Phone className="h-3.5 w-3.5" />
              Conversemos sobre tu sonrisa
            </a>
            <a
              href={config.googleMapsReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 hover:text-white/75 md:inline-flex"
            >
              <MapPin className="h-3.5 w-3.5" />
              {config.dynamicContent.localAnchor} · {config.dynamicContent.city}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-white/80 lg:block">
              Conectemos contigo
            </span>
            <SocialLinks />
          </div>
        </div>
      </div>
      <nav
        aria-label="Navegación principal"
        className="container mx-auto flex min-h-[80px] items-center justify-between gap-4 px-5 sm:px-6"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 flex-col"
          aria-label={`${branding.name}, inicio`}
        >
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`whitespace-nowrap text-[13px] font-medium transition-colors ${link.active ? "text-primary" : "text-dark/70 hover:text-primary"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/reservar"
          className="hidden sm:block"
        >
          <Button className="h-11 rounded-full bg-primary px-6 text-[13px] font-bold text-white shadow-[0_8px_18px_rgba(40,108,253,0.15)] transition hover:bg-[#1756E8]">
            Agendar cita <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <button
          type="button"
          className="rounded-full p-2 text-navy hover:bg-softblue xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X strokeWidth={1.7} /> : <Menu strokeWidth={1.7} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full max-h-[calc(100dvh-120px)] overflow-y-auto border-t border-[#E7EDFA] bg-white shadow-xl xl:hidden"
        >
          <div className="container mx-auto grid gap-1 px-5 py-4 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-navy transition hover:bg-softblue hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/reservar" onClick={closeMenu}>
              <Button className="mt-2 h-12 w-full rounded-full bg-primary text-xs font-bold uppercase tracking-widest text-white">
                Agendar cita
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
