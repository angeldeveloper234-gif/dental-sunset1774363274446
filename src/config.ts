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
    googleMapsReviewUrl: "https://g.page/dentalsunsetcabo",
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
    testimonials: [
        {
            name: "Ángel Leyva",
            role: "Google Maps",
            text: "Describe una diferencia entre la promoción de limpieza dental y el cobro final.",
            tags: ["Limpieza dental", "Precio"],
            rating: 1
        },
        {
            name: "Aldemar Amaral",
            role: "Google Maps",
            text: "Pide claridad sobre las promociones y señala que no le confirmaron el costo antes del servicio.",
            tags: ["Promociones", "Precio"],
            rating: 1
        },
        {
            name: "Zuleor 97",
            role: "Google Maps",
            text: "Destaca la amabilidad del Dr. Benito y comenta que se sintió cómoda en la clínica.",
            tags: ["Atención", "Trato"],
            rating: 5
        },
        {
            name: "Andres Aguilar",
            role: "Google Maps",
            text: "Resalta la actitud del equipo, la información que recibió y la eficiencia del trabajo.",
            tags: ["Atención", "Información"],
            rating: 5
        },
        {
            name: "José María Quintana Astorga",
            role: "Google Maps",
            text: "Valora la atención del Dr. Moisés y la puntualidad de las citas; comenta que su tratamiento le pareció algo elevado de precio.",
            tags: ["Atención", "Precio"],
            rating: 5
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
