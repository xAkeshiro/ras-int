"use client";

import { steps } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Approach() {
  return (
    <section id="approach" className="py-20 sm:py-28 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
                How We Drive Results
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed max-w-sm">
                Our proven four-step process ensures your association gets more
                than strategy — it gets execution, growth, and a lasting
                partnership.
              </p>
            </div>
          </RevealOnScroll>

          <div>
            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div
                  className={`py-6 ${
                    i < steps.length - 1
                      ? "border-b border-neutral-100"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-medium text-ras-green-600 mt-0.5 shrink-0 tabular-nums">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
