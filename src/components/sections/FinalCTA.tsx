import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#10243A] text-white">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F9D91]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="narrow" className="relative text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          Ready to Elevate Your Team?
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight max-w-2xl mx-auto">
          Your next great hire starts here.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Join high-growth tech companies and visionary talent on Surhires. Transparent criteria, faster pipelines, zero friction.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/jobs"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <span>Explore Jobs</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <Button
            href="/employers"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/40"
          >
            <span>Start Hiring</span>
          </Button>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          No credit card required for job seekers &bull; Transparent pricing for employers
        </p>
      </Container>
    </section>
  );
}
