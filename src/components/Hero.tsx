"use client";

import { stats, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.15] tracking-tight mb-5">
              {siteConfig.tagline}
            </h1>
            <p className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact-us">Start a Conversation</Button>
              <Button href="/expertise" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-16 pt-10 border-t border-neutral-200 grid grid-cols-3 gap-8 max-w-md">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className="text-2xl sm:text-3xl font-bold text-neutral-900">
                  {stat.value}
                </span>
                <p className="text-xs text-neutral-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
