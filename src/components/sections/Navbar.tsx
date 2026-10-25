"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { branding } = config;
    const onHome = pathname === "/";
    const links = [
        { href: "/", label: "Inicio", active: pathname === "/" },
        { href: onHome ? "/#sobre-nosotros" : "/about", label: "Sobre nosotros", active: pathname === "/about" },
        { href: onHome ? "/#tratamientos" : "/services", label: "Tratamientos", active: pathname === "/services" },
        { href: "/#ubicacion", label: "Ubicación", active: pathname === "/contact" },
        { href: onHome ? "/#contact" : "/contact", label: "Contacto", active: pathname === "/contact" },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#E7EDFA] bg-white/95 shadow-[0_4px_20px_rgba(21,37,66,0.04)] backdrop-blur-xl">
            <nav aria-label="Navegación principal" className="container mx-auto flex min-h-[68px] items-center justify-between gap-4 px-5 sm:px-6">
                <Link href="/" onClick={closeMenu} className="flex shrink-0 flex-col" aria-label={`${branding.name}, inicio`}>
                    <span className="block font-serif text-2xl font-bold tracking-tight text-navy">{branding.name}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-dark/50">Odontología de excelencia</span>
                </Link>

                <div className="hidden items-center gap-7 xl:flex">
                    {links.map((link) => (
                        <Link key={link.label} href={link.href} aria-current={link.active ? "page" : undefined}
                            className={`whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] transition-colors ${link.active ? "text-primary" : "text-dark/65 hover:text-primary"}`}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link href={onHome ? "/#contact" : "/contact"} className="hidden sm:block">
                    <Button className="h-11 rounded-full bg-primary px-7 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_18px_rgba(40,108,253,0.22)] transition hover:bg-[#1756E8]">
                        Agendar
                    </Button>
                </Link>

                <button type="button" className="rounded-full p-2 text-navy hover:bg-softblue xl:hidden" onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen}>
                    {isOpen ? <X strokeWidth={1.7} /> : <Menu strokeWidth={1.7} />}
                </button>
            </nav>

            {isOpen && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    className="absolute left-0 right-0 top-full border-t border-[#E7EDFA] bg-white shadow-xl xl:hidden">
                    <div className="container mx-auto grid gap-1 px-5 py-4 sm:px-6">
                        {links.map((link) => (
                            <Link key={link.label} href={link.href} onClick={closeMenu}
                                className="rounded-xl px-4 py-3 text-sm font-semibold text-navy transition hover:bg-softblue hover:text-primary">
                                {link.label}
                            </Link>
                        ))}
                        <Link href={onHome ? "/#contact" : "/contact"} onClick={closeMenu}>
                            <Button className="mt-2 h-12 w-full rounded-full bg-primary text-xs font-bold uppercase tracking-widest text-white">Agendar cita</Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </header>
    );
}
