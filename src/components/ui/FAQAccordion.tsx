"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  function toggleItem(id: string) {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `faq-header-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "border-[#0F9D91]/40 bg-white shadow-sm ring-1 ring-[#0F9D91]/10"
                : "border-[#DCE4E8] bg-white hover:border-[#10243A]/20"
            )}
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D91]"
              >
                <span className="flex items-center gap-3 pr-4 text-base sm:text-lg font-bold text-[#10243A] font-heading">
                  <span className="text-xs font-semibold text-[#0F9D91] w-6 shrink-0">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1F5F4] text-[#10243A] transition-transform duration-200",
                    isOpen ? "rotate-180 bg-[#0F9D91]/10 text-[#0F9D91]" : ""
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </h3>

            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={cn(
                "px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#526171] leading-relaxed border-t border-[#DCE4E8]/60 pt-4",
                !isOpen && "hidden"
              )}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
