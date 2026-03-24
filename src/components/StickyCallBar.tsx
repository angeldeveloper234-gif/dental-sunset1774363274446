import { Phone, Calendar } from 'lucide-react';
import { config } from '@/config';

export function StickyCallBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden flex">
            <a 
                href={`tel:${config.demoUser.whatsapp}`}
                className="flex-1 flex flex-col items-center justify-center py-3 active:bg-gray-50"
            >
                <Phone size={20} className="text-primary mb-1" />
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Llamar</span>
            </a>
            <div className="w-[1px] bg-gray-200 my-2"></div>
            <a 
                href={config.bookingUrl}
                className="flex-1 flex flex-col items-center justify-center py-3 bg-primary text-white"
            >
                <Calendar size={20} className="mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Agendar</span>
            </a>
        </div>
    );
}