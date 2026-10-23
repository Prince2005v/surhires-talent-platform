import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function EmployerHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#FAFAF7] via-white to-[#FAFAF7]">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#0F9D91]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="narrow" className="relative text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F9D91]/10 border border-[#0F9D91]/20 text-[#087F75] text-xs font-bold uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5" />
          For Hiring Managers & Talent Leaders
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#10243A] font-heading leading-tight">
          Build your team with people who{" "}
          <span className="text-[#0F9D91]">make a difference.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[#526171] leading-relaxed max-w-2xl mx-auto">
          Reach qualified candidates, manage your hiring pipeline, and make better hiring decisions with Surhires.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button href="#post-job" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>Post a Job</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button href="#pricing" variant="outline" size="lg" className="w-full sm:w-auto">
            <span>Explore Plans</span>
          </Button>
        </div>

        {/* Feature badges row */}
        <div className="mt-12 pt-8 border-t border-[#DCE4E8] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#526171]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0F9D91]" />
            <span>Zero Agency Commissions</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0F9D91]" />
            <span>Pre-screened Engineering Candidates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0F9D91]" />
            <span>Setup in under 3 minutes</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
