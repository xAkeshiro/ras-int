import type { Metadata } from "next";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Expertise — RAS International",
  description:
    "From operations and membership growth to sponsorship marketing and live events — we provide the full spectrum of services your non-profit association needs to thrive.",
};

export default function ExpertisePage() {
  return (
    <>
      <Services />
      <Portfolio />
      <CTA />
    </>
  );
}
