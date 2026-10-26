import { useId } from "react";
export function DentalPattern({ className = "" }: { className?: string }) {
  const id = "pattern-" + useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden="true"
      className={"pointer-events-none absolute " + className}
    >
      <defs>
        <pattern id={id} width="100" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M35 30c-8-5-17-4-16 6 0 8 5 11 6 20 2 9 5 8 7-2l1-7c1-5 5-5 6 0l1 7c2 10 5 11 7 2 1-9 6-12 6-20 1-10-8-11-18-6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M75 70v12m-6-6h12" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={"url(#" + id + ")"} />
    </svg>
  );
}
