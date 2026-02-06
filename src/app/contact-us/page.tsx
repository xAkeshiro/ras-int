import type { Metadata } from "next";
import { MapPin } from "lucide-react";
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
      {/* Address section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-start gap-3 p-5 rounded-xl border border-neutral-200 max-w-md mx-auto">
          <div className="w-9 h-9 rounded-lg bg-ras-green-50 flex items-center justify-center shrink-0">
            <MapPin size={15} className="text-ras-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 mb-1">
              Our Office
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {siteConfig.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
