"use client";

import {
  Layers,
  Users,
  TrendingUp,
  MapPin,
  FileText,
  Globe,
  ArrowRight,
} from "lucide-react";
import { services, expertiseIntro, expertiseHighlights } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Users,
  TrendingUp,
  MapPin,
  FileText,
  Globe,
};

export default function Services() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>Our Expertise</SectionLabel>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 max-w-lg tracking-tight">
            Comprehensive Association{" "}
            <span className="text-gradient">Services</span>
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed max-w-2xl mb-14">
            {expertiseIntro}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="card-accent group p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-all h-full bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-ras-green-50 flex items-center justify-center">
                      {Icon && (
                        <Icon
                          size={18}
                          strokeWidth={2}
                          className="text-ras-green-600"
                        />
                      )}
                    </div>
                    <span className="text-xs font-medium text-neutral-300 tabular-nums">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Highlights */}
        <RevealOnScroll>
          <SectionLabel>Our Edge</SectionLabel>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 tracking-tight">
            What Sets Us Apart
          </h2>
        </RevealOnScroll>

        <div className="space-y-4">
          {expertiseHighlights.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="group p-6 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-ras-green-50 flex items-center justify-center shrink-0 mt-0.5">
                  <ArrowRight size={16} className="text-ras-green-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
