"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function ScrollMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const elements = [
      ...document.querySelectorAll(
        "main section h2, main section h3, main section article, main section .reveal-item, main section > .container > p",
      ),
    ];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
          } else if (entry.boundingClientRect.top > innerHeight) {
            element.classList.remove("is-visible");
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      (element as HTMLElement).style.setProperty(
        "--reveal-delay",
        String((index % 3) * 45) + "ms",
      );
      observer.observe(element);
    });
    const change = () => {
      if (media.matches)
        elements.forEach((el) => el.classList.add("is-visible"));
    };
    media.addEventListener("change", change);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", change);
      elements.forEach((el) =>
        el.classList.remove("scroll-reveal", "is-visible"),
      );
    };
  }, [pathname]);
  return null;
}
