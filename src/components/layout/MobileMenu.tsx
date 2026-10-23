"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Briefcase, Building2, HelpCircle, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { label: "Home", href: "/", icon: Compass },
    { label: "Find Jobs", href: "/jobs", icon: Briefcase },
    { label: "For Employers", href: "/employers", icon: Building2 },
    { label: "How It Works", href: "/#how-it-works", icon: HelpCircle },
    { label: "FAQs", href: "/#faq", icon: HelpCircle },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A1726]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAFAF7] p-6 shadow-2xl flex flex-col justify-between border-l border-[#DCE4E8] animate-in slide-in-from-right duration-200"
      >
        <div>
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-[#DCE4E8]">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-lg text-[#526171] hover:text-[#10243A] hover:bg-[#F1F5F4] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F9D91]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Menu Links">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace(/#.*$/, ""));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#0F9D91]/10 text-[#087F75] font-semibold"
                      : "text-[#10243A] hover:bg-[#F1F5F4] hover:text-[#0F9D91]"
                  }`}
                >
                  <Icon className="w-5 h-5 text-[#526171]" />
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#0F9D91]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer with Actions */}
        <div className="pt-6 border-t border-[#DCE4E8] flex flex-col gap-3">
          <Button
            href="/employers#post-job"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={onClose}
          >
            Post a Job
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <Button
            href="/jobs"
            variant="outline"
            size="lg"
            className="w-full justify-center"
            onClick={onClose}
          >
            Explore All Jobs
          </Button>

          <p className="text-center text-xs text-[#526171] mt-2">
            Surhires Talent Platform • Empowering Careers
          </p>
        </div>
      </div>
    </div>
  );
}
