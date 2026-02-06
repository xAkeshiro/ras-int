"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { associations } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function AssociationsPreview() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Our Portfolio</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Associations We Manage
              </h2>
              <p className="text-sm text-neutral-500 mt-2 max-w-lg">
                Trusted by leading trade associations in the luxury ground transportation industry.
              </p>
            </div>
            <Button href="/expertise" variant="outline" className="shrink-0 self-start sm:self-auto">
              Learn More
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {associations.map((assoc, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <a
                href={assoc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-accent group block p-6 rounded-xl border border-neutral-200 bg-white hover:shadow-md transition-all h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                    {assoc.region}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-neutral-300 group-hover:text-ras-green-600 transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1.5">
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
