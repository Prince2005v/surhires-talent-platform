import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#FAFAF7] via-white to-[#FAFAF7]">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative gradient blur accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0F9D91]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#10243A]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F9D91]/10 border border-[#0F9D91]/20 text-[#087F75] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0F9D91] animate-pulse" />
              The Future of Hiring
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#10243A] font-heading leading-[1.12]">
              Great talent. <br />
              Better hiring. <br />
              <span className="text-[#0F9D91] relative inline-block">
                Faster.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#0F9D91]/30"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 1 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-[#526171] leading-relaxed max-w-xl">
              Surhires connects ambitious companies with exceptional people. Discover better candidates, simplify your hiring process, and build teams that move your business forward.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-md">
              <Button href="/jobs" variant="primary" size="lg" className="group">
                <span>Find Your Next Job</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/employers" variant="outline" size="lg">
                <span>Hire Top Talent</span>
              </Button>
            </div>

            {/* Trust Statement & Key Highlights */}
            <div className="mt-8 pt-8 border-t border-[#DCE4E8] max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#10243A] mb-3">
                Built for growing teams and ambitious professionals
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-[#10243A] font-heading">
                    2,400+
                  </p>
                  <p className="text-xs text-[#526171]">Curated Roles</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-[#0F9D91] font-heading">
                    94%
                  </p>
                  <p className="text-xs text-[#526171]">Match Alignment</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-[#10243A] font-heading">
                    12 Days
                  </p>
                  <p className="text-xs text-[#526171]">Avg. Time to Hire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Recruitment Dashboard Mockup */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Dashboard Canvas */}
              <div className="rounded-2xl border border-[#DCE4E8] bg-white p-5 sm:p-6 shadow-xl relative z-10 ring-1 ring-black/5">
                {/* Dashboard Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DCE4E8]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-[#10243A] ml-2">
                      Surhires Talent Studio &bull; Active Pipeline
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live Sync
                  </span>
                </div>

                {/* Dashboard Metrics Bar */}
                <div className="grid grid-cols-3 gap-2.5 my-4">
                  <div className="bg-[#F1F5F4] rounded-lg p-3">
                    <p className="text-[11px] font-medium text-[#526171]">Active Applicants</p>
                    <p className="text-base font-bold text-[#10243A] mt-0.5">142</p>
                  </div>
                  <div className="bg-[#0F9D91]/10 rounded-lg p-3">
                    <p className="text-[11px] font-medium text-[#087F75]">Interviews Set</p>
                    <p className="text-base font-bold text-[#087F75] mt-0.5">18 Scheduled</p>
                  </div>
                  <div className="bg-[#10243A]/5 rounded-lg p-3">
                    <p className="text-[11px] font-medium text-[#10243A]">Pipeline Speed</p>
                    <p className="text-base font-bold text-[#10243A] mt-0.5">+32% Faster</p>
                  </div>
                </div>

                {/* Pipeline Stages Mini Columns */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#10243A]">
                    <span>Senior Frontend Candidate Pipeline</span>
                    <span className="text-[#0F9D91]">4 Candidates in Stage</span>
                  </div>

                  {/* Candidate Profile Card 1 */}
                  <div className="rounded-xl border border-[#0F9D91]/30 bg-gradient-to-r from-white to-[#0F9D91]/5 p-3.5 shadow-sm hover:border-[#0F9D91] transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#10243A] text-white flex items-center justify-center font-bold text-xs">
                          AK
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-[#10243A]">
                              Aarav Kapoor
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                              98% Match
                            </span>
                          </div>
                          <p className="text-xs text-[#526171]">
                            Ex-Razorpay &bull; React, TypeScript, Next.js
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#0F9D91] text-white font-medium">
                        Final Round
                      </span>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#DCE4E8]/60 flex items-center justify-between text-[11px] text-[#526171]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#0F9D91]" />
                        Today, 4:30 PM IST
                      </span>
                      <span className="text-[#10243A] font-semibold">
                        Technical Architecture Review
                      </span>
                    </div>
                  </div>

                  {/* Candidate Profile Card 2 */}
                  <div className="rounded-xl border border-[#DCE4E8] bg-white p-3.5 shadow-sm hover:border-[#10243A]/30 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0F9D91] text-white flex items-center justify-center font-bold text-xs">
                          TM
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-[#10243A]">
                              Tanvi Mukherjee
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 text-[#087F75] font-semibold">
                              92% Match
                            </span>
                          </div>
                          <p className="text-xs text-[#526171]">
                            Product Designer &bull; Systems & Ergonomics
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#F1F5F4] text-[#10243A] font-medium border border-[#DCE4E8]">
                        Portfolio Review
                      </span>
                    </div>
                  </div>

                  {/* Candidate Profile Card 3 */}
                  <div className="rounded-xl border border-[#DCE4E8] bg-white p-3.5 shadow-sm hover:border-[#10243A]/30 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white flex items-center justify-center font-bold text-xs">
                          RS
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-[#10243A]">
                              Rohan Sengupta
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold">
                              95% Match
                            </span>
                          </div>
                          <p className="text-xs text-[#526171]">
                            Backend Architect &bull; Go, Kafka, Distributed DB
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                        Offer Extended
                      </span>
                    </div>
                  </div>
                </div>

                {/* Analytics Sparkline footer */}
                <div className="mt-4 pt-3 border-t border-[#DCE4E8] flex items-center justify-between text-xs text-[#526171]">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-[#0F9D91]" />
                    Candidate satisfaction index: 4.9/5
                  </span>
                  <span className="font-semibold text-[#10243A]">Zero Agency Markups</span>
                </div>
              </div>

              {/* Floating Floating Stat Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 items-center gap-3 rounded-xl border border-[#DCE4E8] bg-white p-3.5 shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F9D91]/10 text-[#0F9D91]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-[#526171] font-medium">Smart Role Matching</p>
                  <p className="text-sm font-bold text-[#10243A]">Verified Tech Stacks</p>
                </div>
              </div>

              {/* Floating Status Indicator Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 rounded-xl border border-[#DCE4E8] bg-white px-3.5 py-2 shadow-lg">
                <CheckCircle className="w-4 h-4 text-[#0F9D91]" />
                <span className="text-xs font-semibold text-[#10243A]">
                  Pre-screened Talent
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
