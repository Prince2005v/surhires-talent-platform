import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard, PricingPlan } from "@/components/ui/PricingCard";

const PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹1,999",
    period: "month",
    description: "Ideal for boutique studios and early startups looking to fill key positions.",
    features: [
      "3 active job listings",
      "Basic candidate search",
      "Application management",
      "Email support within 24h",
      "Standard candidate profile views",
    ],
    ctaText: "Get Started",
    ctaHref: "#post-job",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹4,999",
    period: "month",
    description: "Designed for scaling startups hiring across engineering and product teams.",
    features: [
      "10 active job listings",
      "Advanced candidate filters",
      "Hiring pipeline & stages",
      "Interview management & sync",
      "Priority support (Slack & Email)",
      "Role-based team access (3 seats)",
    ],
    isRecommended: true,
    ctaText: "Choose Growth",
    ctaHref: "#post-job",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "flexible",
    description: "Full-scale recruiting infrastructure for high-volume enterprise organizations.",
    features: [
      "Unlimited active job listings",
      "Advanced hiring workflows",
      "Dedicated account specialist",
      "Custom ATS integrations",
      "Team collaboration (Unlimited seats)",
      "Custom SLA & NDA provisions",
    ],
    ctaText: "Contact Sales",
    ctaHref: "mailto:enterprise@surhires.com",
  },
];

const COMPARISON_FEATURES = [
  { feature: "Active Job Postings", starter: "3 Roles", growth: "10 Roles", enterprise: "Unlimited" },
  { feature: "Listing Duration", starter: "30 Days", growth: "60 Days", enterprise: "Continuous" },
  { feature: "Candidate Screening Filters", starter: "Basic", growth: "Advanced", enterprise: "Custom ML Match" },
  { feature: "Hiring Pipeline Dashboard", starter: "Standard", growth: "Multi-stage", enterprise: "Custom Workflows" },
  { feature: "Interview Scheduling Sync", starter: false, growth: true, enterprise: true },
  { feature: "Recruiter Seats Included", starter: "1 Seat", growth: "3 Seats", enterprise: "Unlimited" },
  { feature: "Customer Support", starter: "Standard Email", growth: "Priority Email & Slack", enterprise: "Dedicated Manager" },
  { feature: "Custom ATS API Integration", starter: false, growth: false, enterprise: true },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAFAF7]">
      <Container>
        <SectionHeading
          eyebrow="Transparent Investment"
          title="Predictable Pricing for Growing Teams"
          description="Straightforward tiers with zero hidden recruiter commissions. Cancel or switch plans whenever needed."
        />

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Illustrative pricing disclaimer note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#526171]">
            * Note: All pricing tiers and values shown above are illustrative figures created specifically for this internship assignment evaluation.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 bg-white rounded-2xl border border-[#DCE4E8] p-6 sm:p-8 shadow-sm overflow-hidden">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#10243A] font-heading">
              Plan Comparison Breakdown
            </h3>
            <p className="text-xs sm:text-sm text-[#526171] mt-1">
              Detailed feature-by-feature evaluation to help you choose the right tier.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#DCE4E8] bg-[#F1F5F4]/50">
                  <th scope="col" className="py-3.5 px-4 font-bold text-[#10243A]">Feature</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-[#10243A]">Starter (₹1,999)</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-[#0F9D91]">Growth (₹4,999)</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-[#10243A]">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE4E8]">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-[#FAFAF7]/50"}
                  >
                    <td className="py-3.5 px-4 font-medium text-[#10243A]">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-[#526171]">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-[#0F9D91]" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#526171]/40" />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#087F75] bg-[#0F9D91]/5">
                      {typeof row.growth === "boolean" ? (
                        row.growth ? (
                          <Check className="w-4 h-4 text-[#0F9D91]" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#526171]/40" />
                        )
                      ) : (
                        row.growth
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-[#526171]">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="w-4 h-4 text-[#0F9D91]" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#526171]/40" />
                        )
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
