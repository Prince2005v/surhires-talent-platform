"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  SlidersHorizontal,
  X,
  RotateCcw,
  Inbox,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { JobCard } from "@/components/ui/JobCard";
import { Button } from "@/components/ui/Button";
import { Job } from "@/data/jobs";

interface JobsFilterClientProps {
  initialJobs: Job[];
  initialType?: string;
}

export function JobsFilterClient({
  initialJobs,
  initialType = "all",
}: JobsFilterClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedExperience, setSelectedExperience] = useState("all");

  // Extract unique locations from jobs data
  const locations = useMemo(() => {
    const locSet = new Set<string>();
    initialJobs.forEach((job) => {
      // Clean location (e.g. Bengaluru, Remote, etc.)
      const main = job.location.split("(")[0].trim();
      locSet.add(main);
    });
    return ["all", ...Array.from(locSet)];
  }, [initialJobs]);

  const jobTypes = [
    { value: "all", label: "All Types" },
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
    { value: "Remote", label: "Remote" },
  ];

  const experienceLevels = [
    { value: "all", label: "All Experience Levels" },
    { value: "Entry", label: "Entry Level" },
    { value: "Mid", label: "Mid Level" },
    { value: "Senior", label: "Senior Level" },
    { value: "Lead", label: "Lead / Principal" },
  ];

  // Filtering logic
  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      // 1. Text Search query (title, company, description, department, requirements)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesCompany = job.company.toLowerCase().includes(query);
        const matchesDepartment = job.department.toLowerCase().includes(query);
        const matchesDesc = job.description.toLowerCase().includes(query);
        const matchesReq = job.requirements.some((r) =>
          r.toLowerCase().includes(query)
        );

        if (
          !matchesTitle &&
          !matchesCompany &&
          !matchesDepartment &&
          !matchesDesc &&
          !matchesReq
        ) {
          return false;
        }
      }

      // 2. Location filter
      if (selectedLocation !== "all") {
        if (!job.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
          return false;
        }
      }

      // 3. Job Type filter
      if (selectedType !== "all") {
        if (job.type !== selectedType) {
          return false;
        }
      }

      // 4. Experience Level filter
      if (selectedExperience !== "all") {
        if (job.experience !== selectedExperience) {
          return false;
        }
      }

      return true;
    });
  }, [
    initialJobs,
    searchQuery,
    selectedLocation,
    selectedType,
    selectedExperience,
  ]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedLocation !== "all" ||
    selectedType !== "all" ||
    selectedExperience !== "all";

  function handleResetFilters() {
    setSearchQuery("");
    setSelectedLocation("all");
    setSelectedType("all");
    setSelectedExperience("all");
  }

  return (
    <section className="py-10 md:py-16">
      <Container>
        {/* Search & Filter Toolbar Container */}
        <div className="rounded-2xl border border-[#DCE4E8] bg-white p-5 sm:p-6 shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <label htmlFor="job-search-input" className="sr-only">
                Search jobs by title, company, or keyword
              </label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#526171]">
                <Search className="h-4 w-4" />
              </div>
              <input
                id="job-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Job title, keyword, or company..."
                className="w-full rounded-xl border border-[#DCE4E8] bg-[#FAFAF7] pl-10 pr-10 py-2.5 text-sm text-[#10243A] placeholder-[#526171]/70 transition-colors focus:border-[#0F9D91] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F9D91]/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search query"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#526171] hover:text-[#10243A]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Location Filter */}
            <div className="md:col-span-3 relative">
              <label htmlFor="location-filter-select" className="sr-only">
                Filter by Location
              </label>
              <select
                id="location-filter-select"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full appearance-none rounded-xl border border-[#DCE4E8] bg-[#FAFAF7] px-3.5 py-2.5 pr-8 text-sm text-[#10243A] transition-colors focus:border-[#0F9D91] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F9D91]/20 cursor-pointer"
              >
                <option value="all">All Locations</option>
                {locations
                  .filter((l) => l !== "all")
                  .map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#526171]">
                <MapPin className="h-4 w-4" />
              </div>
            </div>

            {/* Job Type Filter */}
            <div className="md:col-span-2 relative">
              <label htmlFor="type-filter-select" className="sr-only">
                Filter by Job Type
              </label>
              <select
                id="type-filter-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full appearance-none rounded-xl border border-[#DCE4E8] bg-[#FAFAF7] px-3.5 py-2.5 pr-8 text-sm text-[#10243A] transition-colors focus:border-[#0F9D91] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F9D91]/20 cursor-pointer"
              >
                {jobTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#526171]">
                <Briefcase className="h-4 w-4" />
              </div>
            </div>

            {/* Experience Filter */}
            <div className="md:col-span-2 relative">
              <label htmlFor="experience-filter-select" className="sr-only">
                Filter by Experience
              </label>
              <select
                id="experience-filter-select"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full appearance-none rounded-xl border border-[#DCE4E8] bg-[#FAFAF7] px-3.5 py-2.5 pr-8 text-sm text-[#10243A] transition-colors focus:border-[#0F9D91] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F9D91]/20 cursor-pointer"
              >
                {experienceLevels.map((exp) => (
                  <option key={exp.value} value={exp.value}>
                    {exp.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#526171]">
                <SlidersHorizontal className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Active Filter Badges & Results Count */}
          <div className="mt-4 pt-4 border-t border-[#DCE4E8] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#10243A]">
                Showing {filteredJobs.length} {filteredJobs.length === 1 ? "Opportunity" : "Opportunities"}
              </span>

              {selectedType !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs bg-[#0F9D91]/10 text-[#087F75] font-medium">
                  Type: {selectedType}
                  <button
                    type="button"
                    onClick={() => setSelectedType("all")}
                    aria-label="Remove job type filter"
                    className="hover:text-[#10243A]"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedExperience !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs bg-[#0F9D91]/10 text-[#087F75] font-medium">
                  Level: {selectedExperience}
                  <button
                    type="button"
                    onClick={() => setSelectedExperience("all")}
                    aria-label="Remove experience filter"
                    className="hover:text-[#10243A]"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedLocation !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs bg-[#0F9D91]/10 text-[#087F75] font-medium">
                  Location: {selectedLocation}
                  <button
                    type="button"
                    onClick={() => setSelectedLocation("all")}
                    aria-label="Remove location filter"
                    className="hover:text-[#10243A]"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F9D91] hover:text-[#087F75] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Jobs Grid or Empty State */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-[#DCE4E8] bg-white p-12 text-center max-w-lg mx-auto">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F1F5F4] text-[#526171]">
              <Inbox className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-[#10243A] font-heading">
              No matching jobs found
            </h3>
            <p className="mt-2 text-sm text-[#526171] leading-relaxed">
              We couldn&apos;t find any roles matching your current search criteria. Try loosening your keywords or reset active filters.
            </p>
            <div className="mt-6">
              <Button onClick={handleResetFilters} variant="primary" size="md">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Search Filters
              </Button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
