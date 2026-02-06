"use client";

import { ArrowRight } from "lucide-react";
import { stats, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Hero() {
  return (
    <section className="pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <p className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-neutral-400 mb-6">
            Association Management & Business Development
          </p>

          <h1 className="text-display text-neutral-900 max-w-2xl mb-6">
            Deeply Rooted in Growing Partnerships with Purpose
          </h1>

          <p className="text-base sm:text-lg text-neutral-500 leading-relaxed max-w-xl mb-10">
            {siteConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-20">
            <Button href="/contact-us">
              Start a Conversation
              <ArrowRight size={14} className="ml-2" />
            </Button>
            <Button href="/expertise" variant="ghost">
              Explore Our Services
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="border-t border-neutral-200 pt-10">
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              {stats.map((stat, i) => (
                <div key={i}>
                  <span className="font-mono text-2xl sm:text-3xl font-medium text-neutral-900 tabular-nums tracking-tight">
                    {stat.value}
                  </span>
                  <p className="font-mono text-[10px] tracking-[0.05em] uppercase text-neutral-400 mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
