import React from "react";
import { Container } from "@/components/ui/Container";

const COMPANIES = [
  {
    name: "Northstar Labs",
    symbol: "✦",
    tagline: "Cloud Intelligence",
  },
  {
    name: "Vertex Digital",
    symbol: "▲",
    tagline: "Design Systems",
  },
  {
    name: "BloomWorks",
    symbol: "✿",
    tagline: "Growth Analytics",
  },
  {
    name: "Elevate Systems",
    symbol: "■",
    tagline: "Distributed Infra",
  },
  {
    name: "NovaTech",
    symbol: "◆",
    tagline: "Enterprise Core",
  },
];

export function TrustedCompanies() {
  return (
    <section className="border-y border-[#DCE4E8] bg-white py-10">
      <Container>
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#526171]">
            Illustrative hiring partners & tech organizations
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
          {COMPANIES.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-transparent hover:border-[#DCE4E8] hover:bg-[#F1F5F4]/50 transition-all text-[#10243A]/70 hover:text-[#10243A] group"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg text-[#0F9D91] transition-transform group-hover:scale-110">
                  {company.symbol}
                </span>
                <span className="text-base font-extrabold tracking-tight font-heading">
                  {company.name}
                </span>
              </div>
              <span className="text-[10px] text-[#526171] uppercase tracking-wider mt-0.5">
                {company.tagline}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
