import { demoReviews } from "./content/demoReviews";
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
    rating: number;
}

export interface Config {
    demoMode: boolean;
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
    social: { facebook: string; instagram: string };
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
    demoMode: true,
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
    googleMapsReviewUrl: "https://www.google.com/maps/search/?api=1&query=Cabo+San+Lucas",
    social: { facebook: "/contact?canal=facebook", instagram: "/contact?canal=instagram" },
    dynamicContent: {
        city: "Cabo San Lucas",
        localAnchor: "Ubicación de referencia",
        stats: {
            projectsDone: 0,
            experienceYears: 0,
            happyClients: 0,
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
                title: "Cuéntanos qué necesitas",
                desc: "Escríbenos o llámanos para consultar por el tratamiento que te interesa."
            },
            {
                step: "02",
                title: "Resuelve tus dudas",
                desc: "El equipo de Dental Sunset puede orientarte sobre los servicios y la disponibilidad."
            },
            {
                step: "03",
                title: "Coordina tu visita",
                desc: "Confirma directamente con la clínica los detalles de tu consulta en Cabo San Lucas."
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
            solve: "Consulta las alternativas de odontología estética disponibles en la clínica.",
            price: "pricing.comprehensive"
        },
        {
            id: "02",
            icon: "🦷",
            title: "Ortodoncia",
            problem: "Dientes chuecos o mala mordida",
            agitation: "Afecta tu digestión y la armonía de tu rostro a largo plazo.",
            solve: "Pregunta al equipo por las opciones de ortodoncia disponibles.",
            price: "pricing.retainer"
        },
        {
            id: "03",
            icon: "🛡️",
            title: "Prótesis Dental",
            problem: "Ausencia de piezas dentales",
            agitation: "Dificultad para comer y desplazamiento de los dientes restantes.",
            solve: "Consulta sobre prótesis, implantes y opciones para restaurar piezas dentales.",
            price: "pricing.basic"
        },
        {
            id: "04",
            icon: "💎",
            title: "Limpieza Profunda",
            problem: "Sarro y mal aliento",
            agitation: "La acumulación bacteriana es la principal causa de pérdida dental.",
            solve: "Pregunta por los servicios de limpieza y cuidado dental disponibles.",
            price: "pricing.basic"
        }
    ],
    testimonials: demoReviews,
    demoUser: {
        name: "Recepción Dental Sunset",
        email: "hola@example.com",
        whatsapp: ""
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
