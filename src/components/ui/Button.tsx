import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none select-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#0F9D91] text-white hover:bg-[#087F75] shadow-sm hover:shadow focus-visible:ring-[#0F9D91]",
    secondary:
      "bg-[#10243A] text-white hover:bg-[#0A1726] shadow-sm hover:shadow focus-visible:ring-[#10243A]",
    outline:
      "border border-[#DCE4E8] bg-white text-[#10243A] hover:bg-[#F1F5F4] hover:border-[#10243A]/30 focus-visible:ring-[#10243A]",
    ghost:
      "text-[#526171] hover:text-[#10243A] hover:bg-[#F1F5F4] focus-visible:ring-[#10243A]",
    dark:
      "bg-[#0A1726] text-white hover:bg-[#10243A] border border-[#10243A] focus-visible:ring-white",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={combinedClasses} {...anchorProps}>
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        )}
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, ...buttonProps } = props as ButtonAsButton;

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={combinedClasses}
      {...buttonProps}
    >
      {isLoading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </button>
  );
}
