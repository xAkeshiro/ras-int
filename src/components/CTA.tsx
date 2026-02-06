"use client";

import { ArrowRight, Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="relative rounded-2xl bg-green-subtle border border-ras-green-100 p-8 sm:p-12 lg:p-16 overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            <div className="relative max-w-lg mx-auto text-center">
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
                Ready to Grow Your Association?
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed mb-8">
                Let&apos;s discuss how RAS International can help take the pressure off
                your board and put your organization on a path to sustainable
                growth.
              </p>
              <Button href={`mailto:${siteConfig.email}`}>
                Start a Conversation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            {/* Contact cards */}
            <div className="relative mt-12 pt-8 border-t border-ras-green-100/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center">
                  <Phone size={15} className="text-ras-green-600" />
                </div>
                <span className="text-sm text-neutral-500 group-hover:text-neutral-900 transition-colors">
                  {siteConfig.phone}
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center">
                  <Mail size={15} className="text-ras-green-600" />
                </div>
                <span className="text-sm text-neutral-500 group-hover:text-neutral-900 transition-colors">
                  {siteConfig.email}
                </span>
              </a>

              <div className="flex items-center gap-3 p-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center">
                  <Clock size={15} className="text-ras-green-600" />
                </div>
                <span className="text-sm text-neutral-500">
                  {siteConfig.hours}
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
