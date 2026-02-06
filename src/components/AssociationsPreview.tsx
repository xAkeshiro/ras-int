"use client";

import { ArrowUpRight } from "lucide-react";
import { associations } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function AssociationsPreview() {
  return (
    <section className="py-24 sm:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Our Portfolio</SectionLabel>
          <h2 className="text-heading text-neutral-900 mb-4">
            Associations We Manage
          </h2>
          <p className="text-sm text-neutral-500 max-w-lg mb-14">
            Trusted by leading trade associations in the luxury ground transportation industry across the United States.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 rounded-lg overflow-hidden">
          {associations.map((assoc, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <a
                href={assoc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white p-8 h-full hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] tracking-[0.05em] uppercase text-neutral-400">
                    {assoc.region}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-neutral-300 group-hover:text-neutral-900 transition-colors"
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1.5">
                  {assoc.acronym}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {assoc.name}
                </p>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
