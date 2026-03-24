import { motion } from 'framer-motion';
import { config } from '@/config';

export function Stats() {
    const { stats } = config.dynamicContent;

    const data = [
        { label: "Pacientes Felices", value: stats.happyClients, suffix: "+" },
        { label: "Años de Experiencia", value: stats.experienceYears, suffix: "" },
        { label: "Tratamientos Exitosos", value: stats.projectsDone, suffix: "+" },
        { label: "Garantía de Satisfacción", value: stats.m2Built, suffix: "" },
    ];

    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                                {item.value}{item.suffix}
                            </div>
                            <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}