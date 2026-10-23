import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { EMPLOYER_FAQS } from "@/data/faqs";

export function EmployerFAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAF7] border-t border-[#DCE4E8]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Hiring Operations"
          title="Employer FAQs"
          description="Common questions about posting requisitions, billing plans, and candidate management."
        />

        <div className="mt-14">
          <FAQAccordion items={EMPLOYER_FAQS} />
        </div>
      </Container>
    </section>
  );
}
