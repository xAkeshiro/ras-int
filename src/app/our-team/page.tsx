"use client";

import { teamMembers } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CTA from "@/components/CTA";

export default function OurTeamPage() {
  return (
    <>
      <section className="pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionLabel>Our Team</SectionLabel>
            <h1 className="text-display text-neutral-900 max-w-lg mb-4">
              The People Behind RAS
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed max-w-xl mb-16">
              Our team brings decades of combined experience in association
              management, event production, sponsorship sales, and non-profit
              business development.
            </p>
          </RevealOnScroll>

          <div className="space-y-px bg-neutral-200">
            {teamMembers.map((member, i) => (
              <RevealOnScroll key={i} delay={i * 0.05}>
                <div className="bg-white p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center shrink-0">
                      <span className="font-mono text-xs font-medium text-neutral-400">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-neutral-900">
                        {member.name}
                      </h2>
                      <p className="font-mono text-[10px] tracking-[0.05em] text-neutral-400 mt-0.5 mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
