import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Briefcase, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center min-h-[70vh]">
      <Container size="narrow" className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0F9D91]/10 text-[#0F9D91] ring-1 ring-[#0F9D91]/20">
          <Compass className="h-10 w-10 animate-spin-slow" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#10243A]/5 text-[#10243A] mb-3">
          Error 404 &bull; Page Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A] font-heading">
          Lost in your search?
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#526171] max-w-md mx-auto leading-relaxed">
          The page or role you were looking for doesn&apos;t seem to exist, or might have been relocated to an updated requisition.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button href="/" variant="primary" size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Homepage
          </Button>
          <Button href="/jobs" variant="outline" size="lg">
            <Briefcase className="w-4 h-4 mr-2" />
            Browse Open Roles
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-[#DCE4E8] flex items-center justify-center gap-8 text-xs text-[#526171]">
          <Link href="/jobs" className="hover:text-[#0F9D91] flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            Job Listings
          </Link>
          <Link href="/employers" className="hover:text-[#0F9D91] flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            For Employers
          </Link>
          <Link href="/#faq" className="hover:text-[#0F9D91]">
            Help Center
          </Link>
        </div>
      </Container>
    </div>
  );
}
