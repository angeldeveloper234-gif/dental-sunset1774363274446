import { motion } from "framer-motion";
import { config } from "@/config";
import { ArrowRight } from "lucide-react";

export function Features() {
    const { services } = config;

    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Nuestros Servicios</span>
                    <h2 className="text-4xl font-display font-bold text-gray-900 mt-3 mb-6">
                        TRATAMIENTOS <span className="text-primary">INTEGRALES</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Combinamos ciencia, arte y tecnología para brindarte la salud bucal que mereces.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {service.solve}
                            </p>
                            <div className="flex items-center text-primary font-bold text-sm cursor-pointer group/link">
                                Saber más <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}