"use client";

import { motion } from "framer-motion";
import { whatsappBookingUrl } from "@/lib/booking";

export function WhatsAppWidget() {
    const handleClick = () => { window.location.assign(whatsappBookingUrl()); };


    return (
        <motion.button
            type="button"
            onClick={handleClick}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-4 ring-white transition-shadow hover:shadow-[0_10px_28px_rgba(37,211,102,0.35)] md:bottom-7 md:right-7"
            aria-label="Contactar por WhatsApp"
            title="Escríbenos por WhatsApp"
        >
            <svg aria-hidden="true" viewBox="0 0 448 512" className="h-7 w-7 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.5 2 253.9c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.8 27 106.1 27h.1c122.3 0 224.1-99.5 224.1-221.9 0-59.3-25.1-115.1-67.1-157.1zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.3 0-101.8 82.8-184.6 184.7-184.6 49.3 0 95.6 19.2 130.4 54.1 34.8 34.8 56.2 81.1 56.1 130.4 0 101.8-85 184.9-186.7 184.9zm101.2-138.2c-5.5-2.7-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.7-12.5 2.7-3.7 5.5-14.3 18.1-17.6 21.8-3.2 3.7-6.5 4.1-12 1.4-32.6-16.3-54-29.1-75.5-65.9-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.6-1.4-2.7-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.6 1.4-14.7 6.9c-5.1 5.5-19.3 18.9-19.3 46.2s19.8 53.6 22.5 57.3c2.7 3.7 39 59.6 94.5 83.6 35.1 15.2 48.8 16.5 66.3 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.2-2.3-5-3.7-10.5-6.4z" />
            </svg>
        </motion.button>
    );
}
