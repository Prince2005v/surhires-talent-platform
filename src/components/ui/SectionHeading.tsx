import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleAs = "h2",
}: SectionHeadingProps) {
  const TitleTag = titleAs;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0F9D91]/10 text-[#087F75] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D91]" />
          {eyebrow}
        </div>
      )}
      <TitleTag className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#10243A] font-heading leading-tight">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#526171] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
