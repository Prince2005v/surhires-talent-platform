import { Users, Filter, GitMerge, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BENEFITS = [
  {
    icon: Users,
    title: "Reach Relevant Candidates",
    description:
      "Target active and high-signal tech candidates matching your exact tech stack requirements, seniority tier, and location requirements.",
    benefit: "High Candidate Signal",
  },
  {
    icon: Filter,
    title: "Simplify Applicant Tracking",
    description:
      "Say goodbye to messy spreadsheets. Organize applicants across clear visual stages with centralized feedback, resumes, and ratings.",
    benefit: "Zero Spreadsheet Clutter",
  },
  {
    icon: GitMerge,
    title: "Manage Hiring Workflows",
    description:
      "Coordinate interview loops with hiring managers, track evaluation criteria, and maintain visibility into offer extension statuses.",
    benefit: "Collaborative Review Loops",
  },
  {
    icon: MessageCircle,
    title: "Improve Candidate Communication",
    description:
      "Keep candidates informed at every turn. Automated milestone notifications ensure a respectful, brand-enhancing candidate journey.",
    benefit: "Higher Acceptance Rate",
  },
];

export function EmployerBenefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-white border-y border-[#DCE4E8]">
      <Container>
        <SectionHeading
          eyebrow="Built For High-Growth Teams"
          title="Why Leading Teams Choose Surhires"
          description="Everything you need to run a fast, modern, and candidate-friendly recruitment process."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl border border-[#DCE4E8] bg-[#FAFAF7] p-7 transition-all duration-300 hover:border-[#0F9D91]/40 hover:bg-white hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F9D91]/10 text-[#0F9D91] group-hover:bg-[#0F9D91] group-hover:text-white transition-colors duration-200 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white text-[#087F75] border border-[#DCE4E8] mb-3">
                    {item.benefit}
                  </span>

                  <h3 className="text-lg font-bold text-[#10243A] font-heading group-hover:text-[#0F9D91] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#526171] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
