import type { Metadata } from "next";
import About from "@/components/About";
import Approach from "@/components/Approach";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Why — RAS International",
  description:
    "RAS International is dedicated to handling every aspect of your trade association. We are experts at business development, driving revenue, and executing growth strategies for non-profit organizations.",
};

export default function OurWhyPage() {
  return (
    <>
      <About />
      <Approach />
      <CTA />
    </>
  );
}
