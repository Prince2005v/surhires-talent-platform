import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
  ctaText: string;
  ctaHref: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

export function PricingCard({ plan, className }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-all duration-200",
        plan.isRecommended
          ? "border-[#0F9D91] bg-white shadow-xl ring-2 ring-[#0F9D91]/20 -translate-y-1 lg:-translate-y-2"
          : "border-[#DCE4E8] bg-white shadow-sm hover:border-[#10243A]/30 hover:shadow-md",
        className
      )}
    >
      {plan.isRecommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F9D91] px-4 py-1 text-xs font-semibold text-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Most Popular Choice
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#10243A] font-heading">
            {plan.name}
          </h3>
          {plan.isRecommended ? (
            <Badge variant="teal">Recommended</Badge>
          ) : (
            <Badge variant="default">Plan</Badge>
          )}
        </div>

        <p className="mt-2 text-sm text-[#526171]">{plan.description}</p>

        <div className="mt-6 flex items-baseline gap-1 border-b border-[#DCE4E8] pb-6">
          <span className="text-4xl font-extrabold text-[#10243A] font-heading tracking-tight">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-sm font-medium text-[#526171]">
              /{plan.period}
            </span>
          )}
        </div>

        {/* Feature list */}
        <div className="mt-6 space-y-3.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#10243A]">
            Included Capabilities:
          </p>
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-[#526171]"
              >
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0F9D91]/10 text-[#0F9D91]">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6">
        <Button
          href={plan.ctaHref}
          variant={plan.isRecommended ? "primary" : "outline"}
          size="lg"
          className="w-full justify-center"
        >
          {plan.ctaText}
        </Button>
      </div>
    </div>
  );
}
