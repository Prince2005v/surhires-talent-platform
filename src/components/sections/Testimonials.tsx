import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAFAF7]">
      <Container>
        <SectionHeading
          eyebrow="User Perspectives"
          title="What Teams & Talent Say"
          description="Illustrative feedback reflecting how modern teams and professionals interact with the Surhires experience."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-[#DCE4E8] bg-white p-7 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#10243A] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author profile */}
              <div className="mt-8 pt-6 border-t border-[#DCE4E8] flex items-center gap-3.5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-white shadow-sm font-heading text-sm"
                  style={{ backgroundColor: t.avatarColor }}
                  aria-hidden="true"
                >
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10243A]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#526171]">
                    {t.role} &bull; <span className="font-medium text-[#10243A]">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on illustrative content */}
        <p className="text-center text-xs text-[#526171] mt-8">
          * Note: User quotes and organizations depicted above are illustrative representations created for this assignment.
        </p>
      </Container>
    </section>
  );
}
