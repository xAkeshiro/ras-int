import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import AssociationsPreview from "@/components/AssociationsPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AssociationsPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
