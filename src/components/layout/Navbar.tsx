"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Find Jobs", href: "/jobs" },
    { label: "For Employers", href: "/employers" },
    { label: "About", href: "/#how-it-works" },
    { label: "Resources", href: "/#faq" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 border-b",
          isScrolled
            ? "glass-nav border-[#DCE4E8] shadow-sm py-3"
            : "bg-[#FAFAF7]/95 border-transparent py-4"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href.replace(/#.*$/, ""));

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                      isActive
                        ? "text-[#087F75] bg-[#0F9D91]/10 font-semibold"
                        : "text-[#526171] hover:text-[#10243A] hover:bg-[#F1F5F4]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/jobs" variant="ghost" size="sm">
                Browse Roles
              </Button>
              <Button
                href="/employers#post-job"
                variant="primary"
                size="sm"
                className="group"
              >
                <span>Post a Job</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                href="/employers#post-job"
                variant="primary"
                size="sm"
                className="text-xs px-2.5 py-1.5"
              >
                Post Job
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="p-2 rounded-lg text-[#10243A] hover:bg-[#F1F5F4] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F9D91]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
