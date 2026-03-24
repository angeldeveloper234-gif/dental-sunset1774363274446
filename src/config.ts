export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ProductItem {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    agitation: string;
    solve: string;
    price: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
            m2Built?: string;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    branding: {
        name: "Dental Sunset",
        slogan: "Transforma tu Sonrisa en el Paraíso",
        logo: "Dental Sunset",
        trade: "Clínica de Especialidades Odontológicas",
    },
    supabase: {
        url: "",
        anonKey: "",
    },
    analytics: {
        webhookUrl: "",
    },
    bookingUrl: "#contact",
    paymentLink: "",
    googleMapsReviewUrl: "",
    dynamicContent: {
        city: "Cabo San Lucas",
        localAnchor: "Plaza GARA, Local 1",
        stats: {
            projectsDone: 3500,
            experienceYears: 15,
            happyClients: 3400,
            m2Built: "100%"
        },
        specialization: {
            title: "Odontología Estética",
            pain: "Inseguridad al sonreír",
            ego: "Tu Mejor Versión",
            hook: "Sonrisas Perfectas"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico Digital",
                desc: "Escaneo 3D y radiografía digital para una evaluación precisa sin molestias."
            },
            {
                step: "02",
                title: "Plan Personalizado",
                desc: "Diseñamos tu nueva sonrisa digitalmente antes de tocar un solo diente."
            },
            {
                step: "03",
                title: "Resolución Clínica",
                desc: "Tratamientos indoloros con tecnología láser y materiales de alta gama."
            }
        ],
        pricing: {
            basic: "Limpieza Ultrasónica desde $800 MXN",
            comprehensive: "Diseño de Sonrisa: Valoración Gratuita",
            retainer: "Ortodoncia: Mensualidades accesibles"
        }
    },
    services: [
        {
            id: "01",
            icon: "✨",
            title: "Diseño de Sonrisa",
            problem: "Dientes manchados o desgastados",
            agitation: "Tu sonrisa es tu carta de presentación; no dejes que te reste confianza.",
            solve: "Carillas de porcelana y blanqueamiento para una estética impecable.",
            price: "pricing.comprehensive"
        },
        {
            id: "02",
            icon: "🦷",
            title: "Ortodoncia",
            problem: "Dientes chuecos o mala mordida",
            agitation: "Afecta tu digestión y la armonía de tu rostro a largo plazo.",
            solve: "Brackets estéticos y alineadores invisibles de última generación.",
            price: "pricing.retainer"
        },
        {
            id: "03",
            icon: "🛡️",
            title: "Prótesis Dental",
            problem: "Ausencia de piezas dentales",
            agitation: "Dificultad para comer y desplazamiento de los dientes restantes.",
            solve: "Implantes y coronas de zirconio que se sienten como dientes naturales.",
            price: "pricing.basic"
        },
        {
            id: "04",
            icon: "💎",
            title: "Limpieza Profunda",
            problem: "Sarro y mal aliento",
            agitation: "La acumulación bacteriana es la principal causa de pérdida dental.",
            solve: "Profilaxis con ultrasonido para encías sanas y aliento fresco.",
            price: "pricing.basic"
        }
    ],
    testimonials: [
        {
            name: "Andrea López",
            role: "Paciente de Ortodoncia",
            text: "El Dr. Benito es increíble. Mi tratamiento fue rápido y casi no sentí dolor. Las instalaciones en Plaza GARA son hermosas.",
            tags: ["Amabilidad", "Resultados"]
        },
        {
            name: "Michael Brown",
            role: "Turista Médico",
            text: "Came to Cabo for vacation, left with a brand new smile. The quality is world-class and prices are unbeatable compared to the US.",
            tags: ["Quality", "Price"]
        },
        {
            name: "Sofía Ramírez",
            role: "Diseño de Sonrisa",
            text: "Me devolvieron la confianza para sonreír en mis fotos. El equipo es súper profesional y cálido.",
            tags: ["Estética", "Confianza"]
        }
    ],
    demoUser: {
        name: "Recepción Dental Sunset",
        email: "citas@dentalsunset.com",
        whatsapp: "+526241324179"
    },
    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },
    gallery: [
        {
            title: "Diseño de Sonrisa Completo",
            category: "Estética",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Implantes Dentales",
            category: "Restauración",
            image: "https://images.unsplash.com/photo-1609840114035-1c29046a8028?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Blanqueamiento Láser",
            category: "Estética",
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Ortodoncia Invisible",
            category: "Ortodoncia",
            image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
        }
    ],
    products: []
};