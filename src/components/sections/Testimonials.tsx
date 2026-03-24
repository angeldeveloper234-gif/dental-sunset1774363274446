import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { config } from "@/config";

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section className="py-24 bg-blue-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-gray-900">
                        Historias de <span className="text-primary">Éxito</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-100 w-10 h-10" fill="currentColor" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic relative z-10">
                                "{item.text}"
                            </p>
                            <div>
                                <p className="font-bold text-gray-900">{item.name}</p>
                                <p className="text-xs text-primary font-bold uppercase tracking-wide">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}