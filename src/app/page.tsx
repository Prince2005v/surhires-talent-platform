import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedCompanies } from "@/components/sections/TrustedCompanies";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedJobs } from "@/components/sections/FeaturedJobs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Surhires — Great talent. Better hiring. Faster.",
  description:
    "Surhires connects ambitious companies with exceptional people. Discover better candidates, simplify your hiring process, and build teams that move your business forward.",
  openGraph: {
    title: "Surhires — Great talent. Better hiring. Faster.",
    description:
      "Surhires connects ambitious companies with exceptional people. Discover better candidates, simplify your hiring process, and build teams that move your business forward.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <HowItWorks />
      <FeaturedJobs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
