"use client";

import { services, expertiseIntro, expertiseHighlights } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Services() {
  return (
    <section className="pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Our Expertise</SectionLabel>
          <h1 className="text-display text-neutral-900 max-w-xl mb-5">
            Comprehensive Association Services
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed max-w-2xl mb-16">
            {expertiseIntro}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 mb-24">
          {services.map((service, i) => (
            <RevealOnScroll key={i} delay={i * 0.04}>
              <div className="bg-white p-8 h-full">
                <span className="font-mono text-[10px] tracking-[0.05em] text-neutral-300 mb-5 block">
                  {service.number}
                </span>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <SectionLabel>Our Edge</SectionLabel>
          <h2 className="text-heading text-neutral-900 mb-10">
            What Sets Us Apart
          </h2>
        </RevealOnScroll>

        <div className="space-y-px bg-neutral-200">
          {expertiseHighlights.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="bg-white p-8">
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
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
