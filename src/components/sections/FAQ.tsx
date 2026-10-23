import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HOME_FAQS } from "@/data/faqs";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-[#DCE4E8]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Help & Clarifications"
          title="Frequently Asked Questions"
          description="Everything you need to know about navigating the Surhires talent ecosystem."
        />

        <div className="mt-14">
          <FAQAccordion items={HOME_FAQS} />
        </div>

        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F1F5F4] border border-[#DCE4E8]">
          <p className="text-sm font-semibold text-[#10243A]">
            Have additional questions about recruitment or applications?
          </p>
          <p className="text-xs text-[#526171] mt-1">
            Our talent operations team is here to assist both candidates and hiring managers.
          </p>
          <div className="mt-4">
            <Link
              href="/employers#faq"
              className="inline-flex items-center text-sm font-semibold text-[#0F9D91] hover:text-[#087F75]"
            >
              <span>Explore Employer Documentation &rarr;</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
