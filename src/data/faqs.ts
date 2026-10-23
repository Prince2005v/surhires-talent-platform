export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "seekers" | "employers";
}

export const HOME_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does Surhires work for candidates and companies?",
    answer:
      "Surhires bridges the gap between hiring teams and candidates through structured, role-specific profiles. Employers publish detailed job requisitions with transparent criteria, while professionals discover positions tailored to their skills, experience level, and preferred work environment.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "How do job seekers apply for opportunities?",
    answer:
      "Job seekers can browse curated listings without creating lengthy accounts beforehand. When you find an aligned role, click 'Apply Now', enter your contact details, attach a link to your resume or portfolio, and include a brief note highlighting your relevant experience. Applications go directly to the company's review pipeline.",
    category: "seekers",
  },
  {
    id: "faq-3",
    question: "How do companies post new roles on the platform?",
    answer:
      "Hiring managers can visit the Employers section, select a plan that fits their team's hiring targets, and fill out our streamlined job submission form. Once submitted, your role is indexed and featured across relevant candidate search categories.",
    category: "employers",
  },
  {
    id: "faq-4",
    question: "Do job seekers ever need to pay to use Surhires?",
    answer:
      "No. Surhires is completely free for job seekers. You can browse all open requisitions, filter by salary and location, save prospective roles, and submit applications at zero cost.",
    category: "seekers",
  },
  {
    id: "faq-5",
    question: "How are candidates matched with the most relevant jobs?",
    answer:
      "Our search engine indexes role requirements, verified tech stacks, compensation benchmarks, and geographic preferences (such as remote or hybrid). This ensures candidates discover roles where their qualifications genuinely match employer requirements.",
    category: "general",
  },
];

export const EMPLOYER_FAQS: FAQItem[] = [
  {
    id: "emp-faq-1",
    question: "How fast can I get our job listing live on Surhires?",
    answer:
      "Submitting a role takes under three minutes through our Post a Job form. Listings undergo an automated formatting check and become immediately discoverable in our search directory.",
    category: "employers",
  },
  {
    id: "emp-faq-2",
    question: "How does billing and subscription pricing work?",
    answer:
      "We offer flexible month-to-month plans starting at ₹1,999/month for growing teams up to custom enterprise tiers. There are no lock-in contracts, and you can upgrade, pause, or cancel your active subscription at any time from your account settings.",
    category: "employers",
  },
  {
    id: "emp-faq-3",
    question: "How does our team review incoming candidate applications?",
    answer:
      "Applications arrive in an organized hiring pipeline dashboard. You can evaluate candidate resumes, assign review notes with team members, tag candidates by status (Reviewing, Shortlisted, Interview Scheduled, Offer Extended), and send updates directly.",
    category: "employers",
  },
  {
    id: "emp-faq-4",
    question: "How can our enterprise team contact your sales or support specialists?",
    answer:
      "Our support and talent specialist team is available at enterprise@surhires.com or by selecting 'Contact Sales' in the pricing comparison section. Enterprise accounts also receive dedicated onboarding and recruitment workflow guidance.",
    category: "employers",
  },
];
