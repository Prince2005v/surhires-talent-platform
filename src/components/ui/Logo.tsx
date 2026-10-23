import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export function Logo({ className, isLight = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Surhires Homepage"
      className={cn(
        "group inline-flex items-center gap-2.5 transition-transform duration-150 active:scale-[0.98]",
        className
      )}
    >
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#10243A] to-[#0A1726] shadow-sm ring-1 ring-white/10 group-hover:shadow-md transition-shadow">
        {/* Geometric custom talent mark: two intersecting directional hiring arcs */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="11" stroke="#0F9D91" strokeWidth="2.5" strokeOpacity="0.35" />
          <path
            d="M10 20L16 14L22 20"
            stroke="#0F9D91"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 14V23"
            stroke="#0F9D91"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          <circle cx="16" cy="9" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={cn(
            "text-xl font-extrabold tracking-tight font-heading leading-none",
            isLight ? "text-white" : "text-[#10243A]"
          )}
        >
          Sur<span className="text-[#0F9D91]">hires</span>
        </span>
        <span
          className={cn(
            "text-[9px] font-semibold tracking-wider uppercase mt-0.5",
            isLight ? "text-slate-400" : "text-[#526171]"
          )}
        >
          Talent Platform
        </span>
      </div>
    </Link>
  );
}
