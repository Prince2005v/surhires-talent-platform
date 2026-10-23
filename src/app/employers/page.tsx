import React from "react";
import { Metadata } from "next";
import { EmployerHero } from "@/components/sections/EmployerHero";
import { EmployerBenefits } from "@/components/sections/EmployerBenefits";
import { PricingSection } from "@/components/sections/PricingSection";
import { PostJobForm } from "@/components/sections/PostJobForm";
import { EmployerFAQ } from "@/components/sections/EmployerFAQ";

export const metadata: Metadata = {
  title: "Hire Exceptional Talent | For Employers",
  description:
    "Build your team with people who make a difference. Reach qualified candidates, manage your hiring pipeline, and make better hiring decisions with Surhires.",
  openGraph: {
    title: "Hire Exceptional Talent | Surhires For Employers",
    description:
      "Build your team with people who make a difference. Reach qualified candidates, manage your hiring pipeline, and make better hiring decisions with Surhires.",
  },
};

export default function EmployersPage() {
  return (
    <>
      <EmployerHero />
      <EmployerBenefits />
      <PricingSection />
      <PostJobForm />
      <EmployerFAQ />
    </>
  );
}
