import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JobCard } from "@/components/ui/JobCard";
import { Button } from "@/components/ui/Button";
import { JOBS_DATA } from "@/data/jobs";

export function FeaturedJobs() {
  // Select first 6 featured jobs from the shared dataset
  const featuredList = JOBS_DATA.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#DCE4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            eyebrow="Open Positions"
            title="Featured Opportunities"
            description="Explore hand-picked roles across top engineering, design, and product organizations."
            className="max-w-2xl"
          />

          <div className="shrink-0">
            <Button href="/jobs" variant="outline" size="md" className="group">
              <span>View All {JOBS_DATA.length} Jobs</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* 6 Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl bg-[#F1F5F4] p-6 sm:p-8 border border-[#DCE4E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F9D91]/10 text-[#0F9D91] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#10243A]">
                Looking for something specific?
              </p>
              <p className="text-xs text-[#526171]">
                Filter by salary ranges, remote flexibility, or contract roles in our directory.
              </p>
            </div>
          </div>
          <Button href="/jobs" variant="primary" size="sm">
            Open Job Directory
          </Button>
        </div>
      </Container>
    </section>
  );
}
