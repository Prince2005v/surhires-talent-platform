"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

interface FormData {
  companyName: string;
  recruiterName: string;
  workEmail: string;
  jobTitle: string;
  jobLocation: string;
  employmentType: string;
  salaryRange: string;
  jobDescription: string;
  requiredSkills: string;
  companyWebsite: string;
}

const INITIAL_FORM: FormData = {
  companyName: "",
  recruiterName: "",
  workEmail: "",
  jobTitle: "",
  jobLocation: "",
  employmentType: "Full-time",
  salaryRange: "",
  jobDescription: "",
  requiredSkills: "",
  companyWebsite: "",
};

export function PostJobForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};

    if (!formData.companyName.trim()) {
      errs.companyName = "Company name is required";
    }

    if (!formData.recruiterName.trim()) {
      errs.recruiterName = "Recruiter / hiring manager name is required";
    }

    if (!formData.workEmail.trim()) {
      errs.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = "Please enter a valid work email address";
    }

    if (!formData.jobTitle.trim()) {
      errs.jobTitle = "Job title is required";
    }

    if (!formData.jobLocation.trim()) {
      errs.jobLocation = "Job location or Remote policy is required";
    }

    if (!formData.salaryRange.trim()) {
      errs.salaryRange = "Salary range or compensation bracket is required";
    }

    if (!formData.jobDescription.trim()) {
      errs.jobDescription = "Please provide a job description";
    } else if (formData.jobDescription.trim().length < 30) {
      errs.jobDescription = "Description should be at least 30 characters";
    }

    if (!formData.requiredSkills.trim()) {
      errs.requiredSkills = "Please list key required skills or technologies";
    }

    if (
      formData.companyWebsite.trim() &&
      !formData.companyWebsite.startsWith("http://") &&
      !formData.companyWebsite.startsWith("https://")
    ) {
      errs.companyWebsite = "Website URL must start with http:// or https://";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission processing
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  function handleReset() {
    setFormData(INITIAL_FORM);
    setErrors({});
    setIsSuccess(false);
  }

  return (
    <section id="post-job" className="py-20 md:py-28 bg-white border-b border-[#DCE4E8]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Quick Submission"
          title="Post a New Job Requisition"
          description="Publish your open position to our curated candidate directory in just a few minutes."
        />

        <div className="mt-12 rounded-2xl border border-[#DCE4E8] bg-[#FAFAF7] p-6 sm:p-10 shadow-sm">
          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#10243A] font-heading">
                Job Posting Submitted Successfully!
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#526171] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#10243A]">{formData.recruiterName}</strong>. Your listing for{" "}
                <strong className="text-[#10243A]">{formData.jobTitle}</strong> at{" "}
                <strong className="text-[#10243A]">{formData.companyName}</strong> has been created and indexed for candidates.
              </p>
              <div className="mt-6 inline-block rounded-xl bg-white border border-[#DCE4E8] p-4 text-xs text-[#526171]">
                A confirmation has been simulated for{" "}
                <span className="font-semibold text-[#10243A]">{formData.workEmail}</span>.
              </div>
              <div className="mt-8 flex items-center justify-center gap-3">
                <Button onClick={handleReset} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Post Another Requisition
                </Button>
                <Button href="/jobs" variant="primary">
                  View Job Directory
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="border-b border-[#DCE4E8] pb-4">
                <h4 className="text-base font-bold text-[#10243A] font-heading">
                  1. Company & Contact Details
                </h4>
                <p className="text-xs text-[#526171]">
                  Who is hiring and where should candidate notifications be routed?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Company Name"
                  id="companyName"
                  placeholder="e.g. Northstar Labs"
                  required
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  error={errors.companyName}
                />

                <Input
                  label="Hiring Manager / Recruiter Name"
                  id="recruiterName"
                  placeholder="e.g. Vikram Mehta"
                  required
                  value={formData.recruiterName}
                  onChange={(e) =>
                    setFormData({ ...formData, recruiterName: e.target.value })
                  }
                  error={errors.recruiterName}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Work Email"
                  id="workEmail"
                  type="email"
                  placeholder="vikram@northstarlabs.io"
                  required
                  value={formData.workEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, workEmail: e.target.value })
                  }
                  error={errors.workEmail}
                  helperText="Company domain email preferred"
                />

                <Input
                  label="Company Website"
                  id="companyWebsite"
                  type="url"
                  placeholder="https://northstarlabs.io"
                  value={formData.companyWebsite}
                  onChange={(e) =>
                    setFormData({ ...formData, companyWebsite: e.target.value })
                  }
                  error={errors.companyWebsite}
                />
              </div>

              <div className="border-b border-[#DCE4E8] pt-4 pb-4">
                <h4 className="text-base font-bold text-[#10243A] font-heading">
                  2. Role Specification
                </h4>
                <p className="text-xs text-[#526171]">
                  Specify the compensation, location, and requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Job Title"
                  id="jobTitle"
                  placeholder="e.g. Staff Backend Engineer"
                  required
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, jobTitle: e.target.value })
                  }
                  error={errors.jobTitle}
                />

                <Input
                  label="Job Location / Policy"
                  id="jobLocation"
                  placeholder="e.g. Bengaluru, India or Remote"
                  required
                  value={formData.jobLocation}
                  onChange={(e) =>
                    setFormData({ ...formData, jobLocation: e.target.value })
                  }
                  error={errors.jobLocation}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Employment Type"
                  id="employmentType"
                  required
                  value={formData.employmentType}
                  onChange={(e) =>
                    setFormData({ ...formData, employmentType: e.target.value })
                  }
                  options={[
                    { value: "Full-time", label: "Full-time" },
                    { value: "Part-time", label: "Part-time" },
                    { value: "Contract", label: "Contract" },
                    { value: "Internship", label: "Internship" },
                    { value: "Remote", label: "Remote" },
                  ]}
                />

                <Input
                  label="Salary Range / Compensation"
                  id="salaryRange"
                  placeholder="e.g. ₹25,00,000 - ₹35,00,000 / yr"
                  required
                  value={formData.salaryRange}
                  onChange={(e) =>
                    setFormData({ ...formData, salaryRange: e.target.value })
                  }
                  error={errors.salaryRange}
                />
              </div>

              <Input
                label="Required Skills & Tech Stack"
                id="requiredSkills"
                placeholder="e.g. React, TypeScript, Next.js, Tailwind CSS, GraphQL"
                required
                value={formData.requiredSkills}
                onChange={(e) =>
                  setFormData({ ...formData, requiredSkills: e.target.value })
                }
                error={errors.requiredSkills}
                helperText="Comma-separated skills used for candidate matching"
              />

              <div>
                <label
                  htmlFor="jobDescription"
                  className="block text-sm font-semibold text-[#10243A] mb-1.5"
                >
                  Job Description & Responsibilities <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="jobDescription"
                  rows={4}
                  required
                  placeholder="Outline key day-to-day responsibilities, mission, team structure, and qualifications..."
                  value={formData.jobDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, jobDescription: e.target.value })
                  }
                  className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#10243A] placeholder-[#526171]/60 focus:border-[#0F9D91] focus:ring-2 focus:ring-[#0F9D91]/20 focus:outline-none ${
                    errors.jobDescription
                      ? "border-red-500"
                      : "border-[#DCE4E8] hover:border-[#10243A]/30"
                  }`}
                />
                {errors.jobDescription && (
                  <p className="mt-1 text-xs text-red-600 font-medium">
                    {errors.jobDescription}
                  </p>
                )}
              </div>

              {/* Form Action Controls */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DCE4E8]">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-[#526171] hover:text-[#10243A] flex items-center gap-1.5 underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset all fields
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full sm:w-auto px-8"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Publish Job Listing
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
