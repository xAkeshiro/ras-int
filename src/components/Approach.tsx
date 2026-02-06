"use client";

import { steps } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Approach() {
  return (
    <section id="approach" className="py-24 sm:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-heading text-neutral-900 mb-4">
                How We Drive Results
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed max-w-sm">
                Our proven four-step process ensures your association gets more
                than strategy — it gets execution, growth, and a lasting
                partnership.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-px bg-neutral-200">
            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="bg-white p-8">
                  <span className="font-mono text-[10px] tracking-[0.05em] text-neutral-300 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
