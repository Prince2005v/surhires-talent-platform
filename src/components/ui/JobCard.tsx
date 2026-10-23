"use client";

import React, { useState, useSyncExternalStore } from "react";
import {
  MapPin,
  Bookmark,
  BookmarkCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Job } from "@/data/jobs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { cn } from "@/lib/utils";

interface JobCardProps {
  job: Job;
  className?: string;
}

function subscribeToSavedJobs(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("surhires_saved_jobs_changed", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("surhires_saved_jobs_changed", callback);
  };
}

export function JobCard({ job, className }: JobCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Safely read saved status using React's useSyncExternalStore
  const isSaved = useSyncExternalStore(
    subscribeToSavedJobs,
    () => {
      try {
        const savedList: string[] = JSON.parse(
          localStorage.getItem("surhires_saved_jobs") || "[]"
        );
        return savedList.includes(job.id);
      } catch {
        return false;
      }
    },
    () => false // Server snapshot
  );

  function handleToggleSave() {
    try {
      const savedList: string[] = JSON.parse(
        localStorage.getItem("surhires_saved_jobs") || "[]"
      );
      let updated: string[];
      if (savedList.includes(job.id)) {
        updated = savedList.filter((id) => id !== job.id);
      } else {
        updated = [...savedList, job.id];
      }
      localStorage.setItem("surhires_saved_jobs", JSON.stringify(updated));
      window.dispatchEvent(new Event("surhires_saved_jobs_changed"));
    } catch {
      // Ignore private mode errors
    }
  }

  return (
    <>
      <article
        className={cn(
          "group relative flex flex-col justify-between rounded-xl border border-[#DCE4E8] bg-white p-5 sm:p-6 transition-all duration-200 hover:border-[#0F9D91]/40 hover:shadow-md",
          job.isFeatured ? "ring-1 ring-[#0F9D91]/20 bg-gradient-to-b from-white to-[#F1F5F4]/30" : "",
          className
        )}
      >
        <div>
          {/* Header row: Company badge, initials, and Save button */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-bold text-white shadow-sm font-heading text-sm"
                style={{ backgroundColor: job.companyColor }}
                aria-hidden="true"
              >
                {job.companyInitial}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#526171]">
                  {job.company}
                </p>
                <h3 className="text-lg font-bold text-[#10243A] group-hover:text-[#0F9D91] transition-colors font-heading leading-snug">
                  {job.title}
                </h3>
              </div>
            </div>

            {/* Bookmark button */}
            <button
              type="button"
              onClick={handleToggleSave}
              aria-label={
                isSaved ? `Unsave ${job.title}` : `Save ${job.title} for later`
              }
              className={cn(
                "p-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#0F9D91]",
                isSaved
                  ? "bg-[#0F9D91]/10 text-[#0F9D91]"
                  : "text-[#526171] hover:text-[#10243A] hover:bg-[#F1F5F4]"
              )}
            >
              {isSaved ? (
                <BookmarkCheck className="w-5 h-5 fill-current" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Description preview */}
          <p className="mt-3.5 text-sm text-[#526171] line-clamp-2 leading-relaxed">
            {job.description}
          </p>

          {/* Badges / metadata */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="teal">{job.type}</Badge>
            <Badge variant="default">{job.experience} Level</Badge>
            {job.isUrgent && (
              <Badge variant="warning">
                <Sparkles className="w-3 h-3 mr-1 inline" />
                Urgent Hire
              </Badge>
            )}
            <Badge variant="outline">{job.department}</Badge>
          </div>
        </div>

        {/* Footer row: Location, Salary & Apply button */}
        <div className="mt-5 pt-4 border-t border-[#DCE4E8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs text-[#526171]">
              <MapPin className="w-3.5 h-3.5 text-[#0F9D91]" />
              <span>{job.location}</span>
            </div>
            <p className="text-sm font-bold text-[#10243A]">{job.salary}</p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </article>

      {/* Application Modal */}
      <ApplicationModal
        job={job}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
