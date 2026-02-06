"use client";

import { aboutCopy, values, ourWhyMission, ourWhyCopy } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function About() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Our Why</SectionLabel>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-5 max-w-lg tracking-tight">
            We Do the Work, Not Just Consult About It
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed max-w-2xl mb-6">
            {aboutCopy}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="my-12 p-6 rounded-lg bg-neutral-50 border border-neutral-200 max-w-2xl">
            <p className="text-xs font-medium text-ras-green-600 mb-2">Our Mission</p>
            <p className="text-sm text-neutral-600 leading-relaxed italic">
              {ourWhyMission}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="space-y-4 max-w-2xl mb-16">
            {ourWhyCopy.map((paragraph, i) => (
              <p key={i} className="text-base text-neutral-500 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <h2 className="text-xl font-bold text-neutral-900 mb-6 tracking-tight">
            What Drives Us
          </h2>
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
