"use client";

import { ArrowUpRight } from "lucide-react";
import { associations } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-ras-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Our Portfolio</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ras-neutral-800 mb-4 max-w-xl">
            Associations We Manage
          </h2>
          <p className="font-sans text-base sm:text-lg text-ras-neutral-500 leading-relaxed max-w-3xl mb-16">
            We serve as the backbone for leading trade associations in the
            luxury ground transportation industry across the United States.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {associations.map((assoc, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <div className="group bg-white rounded-xl p-6 sm:p-8 border border-ras-neutral-200 hover:border-t-2 hover:border-t-ras-green-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-ras-green-50 text-ras-green-600 border border-ras-green-100">
                    {assoc.region}
                  </span>
                  <a
                    href={assoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${assoc.acronym} website`}
                    className="text-ras-neutral-400 hover:text-ras-green-500 transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ras-neutral-800 mb-2">
                  {assoc.acronym}
                </h3>
                <p className="font-sans text-sm text-ras-neutral-500 leading-relaxed mb-6 flex-1">
                  {assoc.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {assoc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs px-2.5 py-1 rounded-md bg-ras-neutral-100 text-ras-neutral-500"
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
