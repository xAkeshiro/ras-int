"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    <section className="py-24 sm:py-32 bg-ras-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-16">
            <div>
              <SectionLabel>Trusted by Leaders</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ras-neutral-800">
                What Our Partners Say
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll testimonials left"
                className="p-2 rounded-full border border-ras-neutral-200 text-ras-neutral-500 hover:border-ras-green-400 hover:text-ras-green-600 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll testimonials right"
                className="p-2 rounded-full border border-ras-neutral-200 text-ras-neutral-500 hover:border-ras-green-400 hover:text-ras-green-600 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="snap-start shrink-0 w-80 sm:w-96 bg-white rounded-xl p-6 sm:p-8 border border-ras-neutral-200 flex flex-col">
                <Quote
                  size={24}
                  className="text-ras-green-300 mb-4 shrink-0"
                />
                <p className="font-sans text-sm text-ras-neutral-600 leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-sans text-sm font-semibold text-ras-neutral-800">
                    {t.author}
                  </p>
                  <p className="font-sans text-xs text-ras-neutral-400">
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
