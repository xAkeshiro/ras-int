"use client";

import { aboutCopy, values } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-ras-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ras-neutral-800 mb-6 max-w-xl">
            We Do the Work, Not Just Consult About It
          </h2>
          <p className="font-sans text-base sm:text-lg text-ras-neutral-500 leading-relaxed max-w-3xl mb-16">
            {aboutCopy}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-ras-neutral-200 hover:border-t-ras-green-400 hover:border-t-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full">
                <h3 className="font-serif text-xl font-semibold text-ras-neutral-800 mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-ras-neutral-500 leading-relaxed">
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
