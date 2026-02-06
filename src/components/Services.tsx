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
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ras-neutral-800 mb-4 max-w-xl">
            Comprehensive Association Services
          </h2>
          <p className="font-sans text-base sm:text-lg text-ras-neutral-500 leading-relaxed max-w-2xl mb-16">
            From day-to-day operations to high-level strategy, we provide the
            full spectrum of services your association needs to thrive.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="group bg-white rounded-xl p-6 sm:p-8 border border-ras-neutral-200 hover:border-t-2 hover:border-t-ras-green-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs text-ras-green-400 font-semibold">
                      {service.number}
                    </span>
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-ras-green-500 group-hover:text-ras-green-600 transition-colors"
                      />
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ras-neutral-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-ras-neutral-500 leading-relaxed">
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
