"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="border border-neutral-200 p-10 sm:p-16">
            <div className="max-w-lg mx-auto text-center">
              <p className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-neutral-400 mb-5">
                Get Started
              </p>
              <h2 className="text-heading text-neutral-900 mb-4">
                Ready to Grow Your Association?
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed mb-8">
                Let&apos;s discuss how RAS International can help take the pressure off
                your board and put your organization on a path to sustainable
                growth.
              </p>
              <Button href={`mailto:${siteConfig.email}`}>
                Start a Conversation
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>

            <div className="mt-14 pt-8 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                {siteConfig.email}
              </a>
              <span className="text-sm text-neutral-400">
                {siteConfig.hours}
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
