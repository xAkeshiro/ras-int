"use client";

import { siteConfig } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <RevealOnScroll>
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
            </Button>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="mt-14 pt-8 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <span className="text-sm text-neutral-500">
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
