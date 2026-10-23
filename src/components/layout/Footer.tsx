import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0A1726] text-white border-t border-white/10 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Logo isLight className="mb-4" />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed mb-6">
              Helping companies find exceptional talent and helping people discover meaningful careers across high-growth engineering, design, and product sectors.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Surhires LinkedIn page"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0F9D91] text-slate-300 hover:text-white transition-colors flex items-center justify-center border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Surhires X / Twitter profile"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0F9D91] text-slate-300 hover:text-white transition-colors flex items-center justify-center border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Surhires Instagram profile"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0F9D91] text-slate-300 hover:text-white transition-colors flex items-center justify-center border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: For Job Seekers */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-heading mb-4">
              For Job Seekers
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/jobs" className="hover:text-[#0F9D91] transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/jobs?type=Remote" className="hover:text-[#0F9D91] transition-colors">
                  Remote Opportunities
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-[#0F9D91] transition-colors">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="/jobs?type=Internship" className="hover:text-[#0F9D91] transition-colors">
                  Internship Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: For Employers */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-heading mb-4">
              For Employers
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/employers#post-job" className="hover:text-[#0F9D91] transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/employers#pricing" className="hover:text-[#0F9D91] transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/employers#benefits" className="hover:text-[#0F9D91] transition-colors">
                  Hiring Solutions
                </Link>
              </li>
              <li>
                <Link href="/employers#faq" className="hover:text-[#0F9D91] transition-colors">
                  Employer FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-heading mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/#how-it-works" className="hover:text-[#0F9D91] transition-colors">
                  About Surhires
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#0F9D91] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#0F9D91] transition-colors">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <a href="mailto:support@surhires.com" className="hover:text-[#0F9D91] transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} Surhires Inc. All rights reserved. Built for the Meru Technosoft frontend assignment.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/#faq" className="hover:text-[#0F9D91] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#faq" className="hover:text-[#0F9D91] transition-colors">
              Terms of Service
            </Link>
            <Link href="/#faq" className="hover:text-[#0F9D91] transition-colors">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
