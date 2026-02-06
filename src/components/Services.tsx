"use client";

import {
  Layers,
  Users,
  TrendingUp,
  MapPin,
  FileText,
  Globe,
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
            Comprehensive Association Services
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed max-w-2xl mb-14">
            {expertiseIntro}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="group p-5 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && (
                      <Icon
                        size={16}
                        strokeWidth={2}
                        className="text-ras-green-600"
                      />
                    )}
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll>
          <h2 className="text-xl font-bold text-neutral-900 mb-6 tracking-tight">
            What Sets Us Apart
          </h2>
        </RevealOnScroll>

        <div className="space-y-4">
          {expertiseHighlights.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="p-5 rounded-lg border border-neutral-200">
                <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">
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
