"use client";

import {
  Layers,
  Users,
  TrendingUp,
  MapPin,
  FileText,
  Globe,
} from "lucide-react";
import { services } from "@/lib/data";
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
    <section id="services" className="py-20 sm:py-28 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 max-w-lg tracking-tight">
            Comprehensive Association Services
          </h2>
          <p className="text-base text-neutral-500 leading-relaxed max-w-xl mb-14">
            From day-to-day operations to high-level strategy, we provide the
            full spectrum of services your association needs to thrive.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
