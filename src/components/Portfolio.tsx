"use client";

import { ArrowUpRight } from "lucide-react";
import { associations } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Our Portfolio</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 max-w-lg tracking-tight">
            Associations We Manage
          </h2>
          <p className="text-base text-neutral-500 leading-relaxed max-w-xl mb-14">
            We serve as the backbone for leading trade associations in the
            luxury ground transportation industry across the United States.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {associations.map((assoc, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-white rounded-lg p-5 border border-neutral-200 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-neutral-400">
                    {assoc.region}
                  </span>
                  <a
                    href={assoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${assoc.acronym} website`}
                    className="text-neutral-300 hover:text-ras-green-600 transition-colors"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-1.5">
                  {assoc.acronym}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 flex-1">
                  {assoc.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {assoc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-neutral-100 text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
