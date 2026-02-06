"use client";

import { aboutCopy, values } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-5 max-w-lg tracking-tight">
            We Do the Work, Not Just Consult About It
          </h2>
          <p className="text-base text-neutral-500 leading-relaxed max-w-2xl mb-14">
            {aboutCopy}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200 rounded-lg overflow-hidden">
          {values.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-white p-6 sm:p-8 h-full">
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
