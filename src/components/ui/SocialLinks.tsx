import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { config } from "@/config";
import { whatsappBookingUrl } from "@/lib/booking";

export function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    {
      label: "Facebook de Dental Sunset",
      href: config.social.facebook,
      icon: Facebook,
    },
    {
      label: "Instagram de Dental Sunset",
      href: config.social.instagram,
      icon: Instagram,
    },
    {
      label: "WhatsApp de Dental Sunset",
      href: whatsappBookingUrl(),
      icon: MessageCircle,
    },
  ];
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Icon className="h-4 w-4" strokeWidth={1.6} />
        </a>
      ))}
    </div>
  );
}
