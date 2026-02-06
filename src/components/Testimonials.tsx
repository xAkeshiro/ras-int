"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>Trusted by Leaders</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                What Our Partners Say
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll testimonials left"
                className="p-1.5 rounded-md border border-neutral-200 text-neutral-400 hover:text-neutral-600 hover:border-neutral-300 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll testimonials right"
                className="p-1.5 rounded-md border border-neutral-200 text-neutral-400 hover:text-neutral-600 hover:border-neutral-300 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="snap-start shrink-0 w-80 bg-white rounded-lg p-5 border border-neutral-200 flex flex-col">
                <p className="text-sm text-neutral-600 leading-relaxed mb-5 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-neutral-100">
                  <p className="text-sm font-medium text-neutral-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
