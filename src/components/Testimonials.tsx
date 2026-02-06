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
    <section className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel>Trusted by Leaders</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                What Our Partners Say
              </h2>
              <p className="text-sm text-neutral-500 mt-2 max-w-md">
                Hear from the association leaders and members who trust RAS International to deliver results.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll testimonials left"
                className="p-2 rounded-lg border border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:border-neutral-300 hover:bg-white transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll testimonials right"
                className="p-2 rounded-lg border border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:border-neutral-300 hover:bg-white transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="snap-start shrink-0 w-[340px] bg-white rounded-xl p-6 border border-neutral-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <Quote size={20} className="text-ras-green-300 mb-4" />
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 flex-1">
                  {t.quote}
                </p>
                <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-ras-green-50 flex items-center justify-center">
                    <span className="text-xs font-bold text-ras-green-600">
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {t.author}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
