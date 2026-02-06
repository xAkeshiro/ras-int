"use client";

import { Target, Heart, TrendingUp, Zap } from "lucide-react";
import { aboutCopy, values, ourWhyMission, ourWhyCopy } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const valueIcons = [Heart, Target, TrendingUp, Zap];

export default function About() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero header */}
        <div className="relative mb-16">
          <RevealOnScroll>
            <SectionLabel>Our Why</SectionLabel>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-5 max-w-lg tracking-tight">
              We Do the Work,{" "}
              <span className="text-gradient">Not Just Consult</span> About It
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed max-w-2xl">
              {aboutCopy}
            </p>
          </RevealOnScroll>
        </div>

        {/* Mission callout */}
        <RevealOnScroll delay={0.1}>
          <div className="relative my-12 p-6 sm:p-8 rounded-xl bg-green-subtle border border-ras-green-100 max-w-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-3">
                <Target size={14} className="text-ras-green-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-ras-green-600">
                  Our Mission
                </span>
              </div>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium italic">
                &ldquo;{ourWhyMission}&rdquo;
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Extended copy */}
        <RevealOnScroll delay={0.15}>
          <div className="space-y-4 max-w-2xl mb-20">
            {ourWhyCopy.map((paragraph, i) => (
              <p key={i} className="text-base text-neutral-500 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>

        {/* Values */}
        <RevealOnScroll delay={0.2}>
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 tracking-tight">
            What Drives Us
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((item, i) => {
            const Icon = valueIcons[i];
            return (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="card-accent p-6 rounded-xl border border-neutral-200 bg-white hover:shadow-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-ras-green-50 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-ras-green-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
