"use client";

import { steps } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Approach() {
  return (
    <section id="approach" className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
                How We{" "}
                <span className="text-gradient">Drive Results</span>
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed max-w-sm">
                Our proven four-step process ensures your association gets more
                than strategy — it gets execution, growth, and a lasting
                partnership.
              </p>
            </div>
          </RevealOnScroll>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-8 bottom-8 w-px bg-neutral-200 hidden sm:block" />

            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="relative flex items-start gap-5 py-6">
                  {/* Step number circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-ras-green-200 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-ras-green-600 tabular-nums">
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-1.5">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
