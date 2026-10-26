import { config } from "@/config";

export function ToothIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 6C11 3 5 3 5 10c0 5 3 7 4 13 1 6 3 6 4 1l1-4c1-3 3-3 4 0l1 4c1 5 3 5 4-1 1-6 4-8 4-13 0-7-6-7-11-4Z" />
      <path d="M12 6c2 1 4 2 6 2" />
    </svg>
  );
}

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 60 60"
        className={`h-11 w-11 shrink-0 ${light ? "text-white" : "text-primary"}`}
        aria-hidden="true"
      >
        <rect x="1" y="1" width="58" height="58" rx="18" fill="currentColor" />
        <g
          fill="none"
          stroke={light ? "#286CFD" : "white"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M30 24c-5-3-13-6-14 2-1 7 4 10 5 17 1 6 4 6 5 0l1-5c1-4 5-4 6 0l1 5c1 6 4 6 5 0 1-7 6-10 5-17-1-8-9-5-14-2Z" />
          <path d="M23 19a7 7 0 0 1 14 0M30 8v3M18 12l2 3M42 12l-2 3M13 20h3M44 20h3" />
          <path d="M24 25c3 2 6 3 9 3" />
        </g>
      </svg>
      <span className="flex flex-col">
        <span
          className={`text-[21px] font-bold leading-tight tracking-[-0.045em] sm:text-[23px] ${light ? "text-white" : "text-navy"}`}
        >
          {config.branding.name}
        </span>
        <span
          className={`mt-0.5 text-[8px] font-medium uppercase tracking-[0.19em] ${light ? "text-white/65" : "text-muted"}`}
        >
          Odontología · Cabo San Lucas
        </span>
      </span>
    </span>
  );
}
