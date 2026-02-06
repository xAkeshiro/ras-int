"use client";

import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const highlights = [
  {
    number: "01",
    title: "Operations & Fiscal Management",
    description:
      "End-to-end operational leadership including budgeting, financial reporting, compliance, and day-to-day association management.",
  },
  {
    number: "02",
    title: "Membership Growth",
    description:
      "Strategic campaigns to attract, retain, and engage members with value propositions that make membership indispensable.",
  },
  {
    number: "03",
    title: "Sponsorship & Revenue",
    description:
      "Compelling sponsorship packages and marketing programs that deliver real ROI for partners and sustainable revenue.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 sm:py-32 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="text-heading text-neutral-900">
                Turnkey Association Management
              </h2>
            </div>
            <Button href="/expertise" variant="ghost" className="shrink-0 self-start sm:self-auto">
              View All Services
              <ArrowRight size={14} className="ml-1.5" />
            </Button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
          {highlights.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="bg-white p-8 h-full">
                <span className="font-mono text-[10px] tracking-[0.05em] text-neutral-300 mb-4 block">
                  {item.number}
                </span>
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">
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
