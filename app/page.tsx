import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Philosophy from "@/components/sections/Philosophy";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import HomeCTA from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Philosophy />
      <FeaturedWork />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialSection />
      <HomeCTA />
    </>
  );
}
