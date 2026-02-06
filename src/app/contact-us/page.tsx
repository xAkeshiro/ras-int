import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us — RAS International",
  description:
    "Get in touch with RAS International. Let's discuss how we can help take the pressure off your board and put your organization on a path to sustainable growth.",
};

export default function ContactPage() {
  return (
    <div className="pt-14">
      <CTA />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="border border-neutral-200 p-8 max-w-md mx-auto text-center">
          <p className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-neutral-400 mb-3">
            Our Office
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            {siteConfig.address}
          </p>
        </div>
      </div>
    </div>
  );
}
