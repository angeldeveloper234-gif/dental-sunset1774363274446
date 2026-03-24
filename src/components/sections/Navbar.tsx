import { motion } from "framer-motion";
import { Menu, X, HeartPulse } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { branding } = config;

    const links = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Nosotros" },
        { href: "/services", label: "Tratamientos" },
        { href: "/contact", label: "Contacto" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <HeartPulse size={24} className="text-white" />
                    </div>
                    <div>
                        <span className="text-xl font-display font-bold text-primary leading-none block">
                            {branding.name}
                        </span>
                        <span className="text-[10px] text-gray-500 font-sans tracking-wider uppercase">
                            {branding.trade}
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-sm font-sans font-medium transition-colors ${isActive(link.href) ? "text-primary" : "text-gray-500 hover:text-primary"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <Button size="sm" className="rounded-full px-6">
                            Agendar Cita
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-gray-100 shadow-xl"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-base font-medium py-2 ${isActive(link.href) ? "text-primary" : "text-gray-600"}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full mt-4">
                                Agendar Cita
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}