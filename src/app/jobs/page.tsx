import React, { Suspense } from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JobsFilterClient } from "@/components/sections/JobsFilterClient";
import { JOBS_DATA } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Explore Opportunities & Jobs",
  description:
    "Find work that moves you forward. Browse verified engineering, product, and design roles from high-growth companies with transparent salary ranges.",
  openGraph: {
    title: "Explore Opportunities & Jobs | Surhires",
    description:
      "Find work that moves you forward. Browse verified roles with transparent salary ranges and direct team applications.",
  },
};

interface JobsPageProps {
  searchParams: Promise<{ type?: string }>;
}

async function JobsFilterWrapper({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ type?: string }>;
}) {
  const resolvedParams = await searchParamsPromise;
  const initialType = resolvedParams?.type || "all";

  return <JobsFilterClient initialJobs={JOBS_DATA} initialType={initialType} />;
}

export default function JobsPage({ searchParams }: JobsPageProps) {
  return (
    <div className="bg-[#FAFAF7] min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#DCE4E8] py-14 md:py-20">
        <Container>
          <SectionHeading
            titleAs="h1"
            eyebrow="Talent Directory"
            title="Find work that moves you forward."
            description="Explore opportunities from growing teams and companies looking for their next great hire."
          />
        </Container>
      </section>

      {/* Suspense Boundary for dynamic search parameters */}
      <Suspense
        fallback={
          <div className="py-20 text-center">
            <div className="mx-auto w-8 h-8 border-3 border-[#0F9D91] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-[#526171] mt-3">Loading opportunities...</p>
          </div>
        }
      >
        <JobsFilterWrapper searchParamsPromise={searchParams} />
      </Suspense>
    </div>
  );
}
