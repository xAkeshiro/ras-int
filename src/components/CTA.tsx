"use client";

import { Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ras-green-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ras-neutral-800 mb-6">
              Ready to Grow Your Association?
            </h2>
            <p className="font-sans text-base sm:text-lg text-ras-neutral-500 leading-relaxed mb-10">
              Let&apos;s discuss how RAS International can help take the pressure off
              your board and put your organization on a path to sustainable
              growth.
            </p>
            <Button href={`mailto:${siteConfig.email}`} className="text-base px-8 py-4">
              Start a Conversation
            </Button>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone size={20} className="text-ras-green-500" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="font-sans text-sm text-ras-neutral-600 hover:text-ras-green-600 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail size={20} className="text-ras-green-500" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-sans text-sm text-ras-neutral-600 hover:text-ras-green-600 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock size={20} className="text-ras-green-500" />
                <span className="font-sans text-sm text-ras-neutral-600">
                  {siteConfig.hours}
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
