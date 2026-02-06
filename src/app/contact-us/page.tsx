import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Contact Us — RAS International",
  description:
    "Get in touch with RAS International. Let's discuss how we can help take the pressure off your board and put your organization on a path to sustainable growth.",
};

export default function ContactPage() {
  return (
    <div className="pt-14">
      <CTA />
    </div>
  );
}
