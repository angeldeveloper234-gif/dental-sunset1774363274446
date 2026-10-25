import { useId } from "react";

export const toothOutline = "M200 47C153 30 124 12 88 26C32 47 30 105 42 158C51 201 66 226 72 271C79 328 94 412 125 417C150 421 156 358 166 315C174 279 184 259 200 259C216 259 226 279 234 315C244 358 250 421 275 417C306 412 321 328 328 271C334 226 349 201 358 158C370 105 368 47 312 26C276 12 247 30 200 47Z";

export function ToothPhoto({ src, className = "" }: { src: string; className?: string }) {
    const clipId = useId().replace(/:/g, "");
    return (
        <svg viewBox="0 0 400 440" aria-hidden="true" focusable="false" className={className}>
            <defs><clipPath id={clipId}><path d={toothOutline} /></clipPath></defs>
            <path d={toothOutline} fill="#EEF3FF" stroke="white" strokeWidth="12" />
            <image href={src} width="400" height="440" preserveAspectRatio="xMidYMin slice" clipPath={`url(#${clipId})`} />
            <path d={toothOutline} fill="none" stroke="white" strokeWidth="7" />
        </svg>
    );
}
