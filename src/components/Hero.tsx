"use client";

import { stats, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-ras-neutral-50 overflow-hidden">
      {/* Subtle radial green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ras-green-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ras-green-500 mb-6 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-ras-green-400" />
              Association Management & Business Development
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ras-neutral-800 leading-tight mb-6">
              {siteConfig.tagline}
            </h1>
            <p className="font-sans text-lg sm:text-xl text-ras-neutral-500 leading-relaxed mb-10 max-w-2xl">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact">Start a Conversation</Button>
              <Button href="#services" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Stats row */}
        <RevealOnScroll delay={0.3}>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col sm:items-start items-center"
              >
                <span className="font-serif text-3xl sm:text-4xl font-bold text-ras-green-600">
                  {stat.value}
                </span>
                <span className="font-sans text-sm text-ras-neutral-500 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Decorative spiral SVG */}
      <svg
        className="absolute right-0 bottom-0 w-64 h-64 text-ras-green-100/50 opacity-50 pointer-events-none hidden lg:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 20 C60 20 30 50 30 90 C30 130 60 160 100 160 C130 160 155 140 155 110 C155 85 135 65 110 65 C90 65 75 80 75 95 C75 108 85 118 100 118"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
