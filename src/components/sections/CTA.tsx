import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function CTA() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        ¿Listo para sonreír sin miedo?
                    </h2>
                    <p className="text-blue-100 text-xl mb-12">
                        Agenda tu valoración hoy mismo. Sin compromiso y con la mejor tecnología de Cabo San Lucas.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-50 shadow-xl">
                            <CalendarCheck className="mr-2 w-5 h-5" />
                            Agendar Cita Online
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="border-white text-white hover:bg-white/10"
                            onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}`}
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            WhatsApp Directo
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}