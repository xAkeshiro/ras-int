"use client";

import { teamMembers } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CTA from "@/components/CTA";

export default function OurTeamPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionLabel>Our Team</SectionLabel>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4 max-w-lg">
              The People Behind RAS
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed max-w-xl mb-14">
              Our team brings decades of combined experience in association
              management, event production, sponsorship sales, and non-profit
              business development.
            </p>
          </RevealOnScroll>

          <div className="space-y-4">
            {teamMembers.map((member, i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="p-6 rounded-lg border border-neutral-200">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-neutral-400">
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
                      <p className="text-xs text-ras-green-600 mb-3">
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
