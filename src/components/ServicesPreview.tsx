"use client";

import { ArrowRight, Layers, Users, TrendingUp } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const highlights = [
  {
    icon: Layers,
    title: "Operations & Fiscal Management",
    description:
      "End-to-end operational leadership including budgeting, financial reporting, compliance, and day-to-day association management.",
  },
  {
    icon: Users,
    title: "Membership Growth",
    description:
      "Strategic campaigns to attract, retain, and engage members with value propositions that make membership indispensable.",
  },
  {
    icon: TrendingUp,
    title: "Sponsorship & Revenue",
    description:
      "Compelling sponsorship packages and marketing programs that deliver real ROI for partners and sustainable revenue.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Turnkey Association Management
              </h2>
              <p className="text-sm text-neutral-500 mt-2 max-w-lg">
                We handle every aspect of your trade association so your board can focus on leadership and advocacy.
              </p>
            </div>
            <Button href="/expertise" variant="outline" className="shrink-0 self-start sm:self-auto">
              View All Services
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="card-accent group p-6 rounded-xl border border-neutral-200 bg-white hover:shadow-md transition-all h-full">
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
