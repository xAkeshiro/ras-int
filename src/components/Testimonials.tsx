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
      scrollRef.current.scrollBy({
        left: direction === "left" ? -380 : 380,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 sm:py-32 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-14">
            <div>
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="text-heading text-neutral-900">
                What Our Partners Say
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="p-2 border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="p-2 border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="snap-start shrink-0 w-[360px] border border-neutral-200 p-8 flex flex-col hover:border-neutral-300 transition-colors">
                <p className="text-sm text-neutral-600 leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-5 border-t border-neutral-100">
                  <p className="text-sm font-medium text-neutral-900">
                    {t.author}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.05em] text-neutral-400 mt-1">
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
