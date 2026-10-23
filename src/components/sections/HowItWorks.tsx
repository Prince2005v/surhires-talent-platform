import React from "react";
import { Search, MessageSquare, Award, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Discover Talent",
    description:
      "Find relevant candidates using skills, experience, and role requirements. Filter by verified engineering proficiencies, compensation expectations, and work preferences.",
    icon: Search,
    highlight: "Precision Matching",
  },
  {
    step: "02",
    title: "Connect Faster",
    description:
      "Manage applications, communicate with candidates, and schedule interviews. Eliminate back-and-forth friction with integrated calendar sync and structured scorecards.",
    icon: MessageSquare,
    highlight: "Unified Pipeline",
  },
  {
    step: "03",
    title: "Make Great Hires",
    description:
      "Build stronger teams with a simpler, more transparent hiring process. Extend offers confidently backed by standardized technical benchmarks and team feedback.",
    icon: Award,
    highlight: "Faster Closings",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAF7]">
      <Container>
        <SectionHeading
          eyebrow="Streamlined Methodology"
          title="How Surhires Works"
          description="A clear, modern recruitment workflow designed to respect candidate time and eliminate recruiter friction."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#DCE4E8] bg-white p-8 transition-all duration-300 hover:border-[#0F9D91]/40 hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#0F9D91] font-heading">
                      {step.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F9D91]/10 text-[#0F9D91] group-hover:bg-[#0F9D91] group-hover:text-white transition-colors duration-200">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#F1F5F4] text-[#526171] uppercase tracking-wider mb-2">
                    {step.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-[#10243A] font-heading group-hover:text-[#0F9D91] transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#526171] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DCE4E8] flex items-center text-xs font-semibold text-[#0F9D91]">
                  <span>Explore capability</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
