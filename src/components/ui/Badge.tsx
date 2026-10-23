import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "teal" | "navy" | "outline" | "success" | "warning";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-[#F1F5F4] text-[#526171] border border-[#DCE4E8]",
    teal: "bg-[#0F9D91]/10 text-[#087F75] border border-[#0F9D91]/20 font-medium",
    navy: "bg-[#10243A]/10 text-[#10243A] border border-[#10243A]/20 font-medium",
    outline: "bg-transparent text-[#526171] border border-[#DCE4E8]",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
