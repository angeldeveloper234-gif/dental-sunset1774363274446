import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Contact() {
    const { dynamicContent, demoUser } = config;

    return (
        <section id="contact" className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Contacto</span>
                        <h2 className="text-4xl font-display font-bold text-gray-900 mt-2 mb-8">
                            VISÍTANOS EN <span className="text-primary">CABO</span>
                        </h2>
                        <p className="text-gray-600 mb-10">
                            Estamos ubicados estratégicamente en Plaza GARA. Estacionamiento disponible y acceso para sillas de ruedas.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Dirección</h4>
                                    <p className="text-gray-600">Calle Kukulkán plaza GARA local 1, Cabo San Lucas, 23472</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Teléfono / WhatsApp</h4>
                                    <p className="text-gray-600">{demoUser.whatsapp}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Horario</h4>
                                    <p className="text-gray-600">Lun - Vie: 9:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600">Sáb: 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu Valoración</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Nombre" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors" />
                                <input type="text" placeholder="Apellido" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors" />
                            </div>
                            <input type="tel" placeholder="Teléfono" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors" />
                            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors text-gray-500">
                                <option>Interés del Tratamiento</option>
                                <option>Diseño de Sonrisa</option>
                                <option>Ortodoncia</option>
                                <option>Implantes</option>
                                <option>Limpieza / General</option>
                            </select>
                            <textarea rows={4} placeholder="¿Cómo podemos ayudarte?" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors"></textarea>
                            <Button className="w-full text-lg shadow-xl shadow-primary/20">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}