"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/content/faqs";
import { BrandSparkles } from "@/components/ui/BrandSparkles";
export function FAQ({ full = false }: { full?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return (
    <section
      id="faq"
      className="relative border-t border-navy/5 py-20 md:py-24"
    >
      <BrandSparkles className="absolute left-[5%] top-16 hidden h-16 w-16 text-primary/10 lg:block" />
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            Resolvamos tus dudas
          </p>
          <h2 className="text-4xl md:text-5xl">
            Preguntas{" "}
            <span className="font-normal text-muted">frecuentes.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {(full ? faqs : faqs.slice(0, 4)).map((faq, i) => (
            <div
              className="overflow-hidden rounded-2xl border border-[#E3E8F1] bg-white"
              key={faq.q}
            >
              <h3>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={"faq-answer-" + i}
                  className="flex w-full items-center justify-between gap-5 p-6 text-left text-base font-bold"
                >
                  <span>{faq.q}</span>
                  <Plus
                    className={
                      "h-5 w-5 shrink-0 text-primary transition-transform " +
                      (open === i ? "rotate-45" : "")
                    }
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={"faq-answer-" + i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.28 }}
                  >
                    <p className="px-6 pb-6 text-sm leading-7 text-muted">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {!full && (
          <div className="mt-7 text-center">
            <Link
              href="/preguntas-frecuentes"
              className="text-sm font-bold text-primary"
            >
              Todas las preguntas →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
