import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Hero() {
    const { dynamicContent } = config;
    const { city, localAnchor } = dynamicContent;

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-8">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                Especialistas en Ortodoncia y Diseño de Sonrisa
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
                            TRANSFORMA TU <span className="text-primary">SONRISA</span> EN EL PARAÍSO
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            Atención cálida y profesional con el Dr. Benito y el Dr. César. 
                            Tecnología de vanguardia para tratamientos sin dolor en {city}.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button size="lg" className="shadow-xl shadow-primary/20">
                                AGENDAR CITA <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="bg-white">
                                Conocer Tratamientos
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                            <div className="flex items-center gap-2">
                                <MapPin className="text-secondary" size={18} />
                                {localAnchor}, {city}
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-secondary" size={18} />
                                Aceptamos Seguros
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white">
                            <img 
                                src="https://images.unsplash.com/photo-1538108149393-cebb47cdf504?q=80&w=2000&auto=format&fit=crop" 
                                alt="Sonrisa perfecta" 
                                className="w-full h-[600px] object-cover"
                            />
                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-lg border border-blue-50">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Próxima disponibilidad</p>
                                        <p className="text-xl font-bold text-gray-900">Hoy, 4:00 PM</p>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                        Abierto Ahora
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}