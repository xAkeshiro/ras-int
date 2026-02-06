"use client";

import { ArrowRight } from "lucide-react";
import { stats, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - copy */}
          <RevealOnScroll>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ras-green-50 border border-ras-green-200 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-ras-green-500" />
                <span className="text-xs font-medium text-ras-green-700">
                  Association Management Experts
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-5">
                Deeply Rooted in Growing{" "}
                <span className="text-gradient">Partnerships</span>{" "}
                with Purpose
              </h1>

              <p className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-8 max-w-lg">
                {siteConfig.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact-us">
                  Start a Conversation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button href="/expertise" variant="outline">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right - stats cards */}
          <RevealOnScroll delay={0.15}>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-5 rounded-xl bg-white border border-neutral-200 shadow-sm"
                >
                  <span className="text-3xl sm:text-4xl font-bold text-gradient tabular-nums">
                    {stat.value}
                  </span>
                  <div className="h-8 w-px bg-neutral-200" />
                  <p className="text-sm text-neutral-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
