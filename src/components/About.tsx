"use client";

import { aboutCopy, values, ourWhyMission, ourWhyCopy } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function About() {
  return (
    <section className="pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Our Why</SectionLabel>
          <h1 className="text-display text-neutral-900 max-w-xl mb-6">
            We Do the Work, Not Just Consult About It
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed max-w-2xl">
            {aboutCopy}
          </p>
        </RevealOnScroll>

        {/* Mission */}
        <RevealOnScroll delay={0.1}>
          <div className="my-16 border-l-2 border-neutral-900 pl-8 max-w-2xl">
            <p className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-neutral-400 mb-3">
              Our Mission
            </p>
            <p className="text-base text-neutral-700 leading-relaxed italic">
              &ldquo;{ourWhyMission}&rdquo;
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="space-y-4 max-w-2xl mb-24">
            {ourWhyCopy.map((paragraph, i) => (
              <p key={i} className="text-base text-neutral-500 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>

        {/* Values */}
        <RevealOnScroll delay={0.1}>
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="text-heading text-neutral-900 mb-10">
            What Drives Us
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200">
          {values.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="bg-white p-8 h-full">
                <span className="font-mono text-[10px] tracking-[0.05em] text-neutral-300 mb-4 block">
                  0{i + 1}
                </span>
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
