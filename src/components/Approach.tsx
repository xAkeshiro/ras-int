"use client";

import { steps } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Approach() {
  return (
    <section id="approach" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: sticky heading */}
          <RevealOnScroll>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ras-neutral-800 mb-6">
                How We Drive Results
              </h2>
              <p className="font-sans text-base sm:text-lg text-ras-neutral-500 leading-relaxed max-w-md">
                Our proven four-step process ensures your association gets more
                than strategy — it gets execution, growth, and a lasting
                partnership.
              </p>
            </div>
          </RevealOnScroll>

          {/* Right: steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div
                  className={`py-8 ${
                    i < steps.length - 1
                      ? "border-b border-ras-neutral-200"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm text-ras-green-400 font-semibold mt-1 shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-ras-neutral-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-ras-neutral-500 leading-relaxed">
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
