import { motion } from 'framer-motion';
import { config } from '@/config';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Tu Experiencia</span>
                        <h2 className="text-4xl font-display font-bold text-gray-900 mt-2">
                            PROCESO <span className="text-primary">CLÍNICO</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-md">
                        Hemos optimizado cada paso para que tu visita sea relajante, eficiente y transparente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10" />

                    {roadmap.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-white pt-4"
                        >
                            <div className="w-16 h-16 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-sm">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}