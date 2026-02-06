"use client";

import { Users } from "lucide-react";
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
              The People Behind{" "}
              <span className="text-gradient">RAS</span>
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed max-w-xl mb-14">
              Our team brings decades of combined experience in association
              management, event production, sponsorship sales, and non-profit
              business development.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {teamMembers.map((member, i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="card-accent p-6 rounded-xl border border-neutral-200 bg-white hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ras-green-50 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-ras-green-600">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold text-neutral-900">
                        {member.name}
                      </h2>
                      <p className="text-xs font-medium text-ras-green-600 mb-3">
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

          {/* Team summary */}
          <RevealOnScroll delay={0.3}>
            <div className="mt-16 relative rounded-xl bg-green-subtle border border-ras-green-100 p-6 sm:p-8 overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-ras-green-200 flex items-center justify-center shrink-0">
                  <Users size={18} className="text-ras-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">
                    A Team Built for Execution
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Together, our team has managed over $100M in sponsorship sales, organized hundreds of industry events, and grown membership across multiple state associations. We don&apos;t just plan — we execute.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <CTA />
    </>
  );
}
