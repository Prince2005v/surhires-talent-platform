"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Job } from "@/data/jobs";

interface ApplicationModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationModal({
  job,
  isOpen,
  onClose,
}: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    resumeUrl: "",
    coverNote: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !job) return null;

  function validate() {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.resumeUrl.trim()) {
      errs.resumeUrl = "Please provide your resume or portfolio URL";
    } else if (
      !formData.resumeUrl.startsWith("http://") &&
      !formData.resumeUrl.startsWith("https://")
    ) {
      errs.resumeUrl = "URL must start with https:// or http://";
    }

    if (!formData.coverNote.trim()) {
      errs.coverNote = "Please include a brief note (min 20 characters)";
    } else if (formData.coverNote.trim().length < 20) {
      errs.coverNote = "Cover note should be at least 20 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  function handleReset() {
    setFormData({
      fullName: "",
      email: "",
      resumeUrl: "",
      coverNote: "",
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  }

  function handleModalClose() {
    setErrors({});
    setIsSuccess(false);
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-job-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A1726]/70 backdrop-blur-sm transition-opacity"
        onClick={handleModalClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-[#DCE4E8] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={handleModalClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-[#526171] hover:text-[#10243A] hover:bg-[#F1F5F4] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#10243A] font-heading">
              Application Submitted!
            </h3>
            <p className="mt-2 text-sm text-[#526171] leading-relaxed">
              Thank you, <strong className="text-[#10243A]">{formData.fullName}</strong>. Your application for{" "}
              <strong className="text-[#10243A]">{job.title}</strong> at{" "}
              <strong className="text-[#10243A]">{job.company}</strong> has been received by our talent team.
            </p>
            <div className="mt-6 rounded-lg bg-[#F1F5F4] p-3 text-xs text-[#526171]">
              A confirmation notification has been simulated for {formData.email}.
            </div>
            <div className="mt-6">
              <Button onClick={handleReset} variant="primary" className="w-full">
                Done
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0F9D91]/10 text-[#087F75] mb-2">
                Apply for Position
              </div>
              <h2
                id="modal-job-title"
                className="text-xl sm:text-2xl font-extrabold text-[#10243A] font-heading"
              >
                {job.title}
              </h2>
              <p className="text-sm text-[#526171] mt-0.5">
                {job.company} &bull; {job.location}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <Input
                label="Full Name"
                placeholder="e.g. Priya Sharma"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                error={errors.fullName}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="priya@example.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                error={errors.email}
              />

              <Input
                label="Resume or Portfolio URL"
                type="url"
                placeholder="https://linkedin.com/in/... or drive link"
                required
                value={formData.resumeUrl}
                onChange={(e) =>
                  setFormData({ ...formData, resumeUrl: e.target.value })
                }
                error={errors.resumeUrl}
                helperText="Link to Google Drive, Dropbox, Notion, or personal portfolio"
              />

              <div>
                <label
                  htmlFor="coverNote"
                  className="block text-sm font-semibold text-[#10243A] mb-1.5"
                >
                  Short Note / Key Highlights <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="coverNote"
                  rows={3}
                  required
                  placeholder="Share a brief overview of relevant work and what excites you about this role..."
                  value={formData.coverNote}
                  onChange={(e) =>
                    setFormData({ ...formData, coverNote: e.target.value })
                  }
                  className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#10243A] placeholder-[#526171]/60 focus:border-[#0F9D91] focus:ring-2 focus:ring-[#0F9D91]/20 focus:outline-none ${
                    errors.coverNote
                      ? "border-red-500"
                      : "border-[#DCE4E8] hover:border-[#10243A]/30"
                  }`}
                />
                {errors.coverNote && (
                  <p className="mt-1 text-xs text-red-600 font-medium">
                    {errors.coverNote}
                  </p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button variant="ghost" onClick={handleModalClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  className="px-6"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
