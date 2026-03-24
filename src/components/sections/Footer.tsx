import { config } from "@/config";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    const { branding } = config;

    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-display font-bold mb-4">{branding.name}</h2>
                        <p className="text-gray-400 max-w-sm mb-6">
                            {branding.slogan}. Comprometidos con la excelencia clínica y la calidez humana en cada tratamiento.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">Nosotros</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">Tratamientos</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}