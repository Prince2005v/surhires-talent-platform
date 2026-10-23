export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  experience: "Entry" | "Mid" | "Senior" | "Lead";
  salary: string;
  department: string;
  postedDate: string;
  isFeatured?: boolean;
  isUrgent?: boolean;
  description: string;
  requirements: string[];
  companyInitial: string;
  companyColor: string;
}

export const JOBS_DATA: Job[] = [
  {
    id: "job-1",
    title: "Senior Frontend Engineer",
    company: "Northstar Labs",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-time",
    experience: "Senior",
    salary: "₹28,00,000 - ₹38,00,000 / yr",
    department: "Engineering",
    postedDate: "2 days ago",
    isFeatured: true,
    isUrgent: true,
    description:
      "Lead our core design system and modern client-facing applications using React, Next.js, and TypeScript. Collaborate closely with product designers to ship performant, accessible interfaces.",
    requirements: [
      "5+ years of production experience in React, Next.js, and TypeScript",
      "Proven track record building design systems and accessible web apps (WCAG 2.1)",
      "Deep understanding of browser rendering performance, Core Web Vitals, and responsive UI",
      "Strong communication and mentoring capabilities for junior team members",
    ],
    companyInitial: "NL",
    companyColor: "#0F9D91",
  },
  {
    id: "job-2",
    title: "Product Designer",
    company: "Vertex Digital",
    location: "Remote (India)",
    type: "Remote",
    experience: "Mid",
    salary: "₹18,00,000 - ₹25,00,000 / yr",
    department: "Design",
    postedDate: "1 day ago",
    isFeatured: true,
    description:
      "Craft end-to-end user journeys for high-growth enterprise SaaS workflows. Conduct qualitative usability tests, build interactive Figma prototypes, and evolve design tokens with frontend teams.",
    requirements: [
      "3+ years of SaaS product design experience",
      "Expertise in Figma, design tokens, micro-interactions, and design systems",
      "Strong portfolio demonstrating user-centric UX research and polished visual UI",
      "Experience partnering with engineers through spec handoff and visual QA",
    ],
    companyInitial: "VD",
    companyColor: "#3B82F6",
  },
  {
    id: "job-3",
    title: "Data Analyst",
    company: "BloomWorks",
    location: "Gurugram, India",
    type: "Full-time",
    experience: "Mid",
    salary: "₹14,00,000 - ₹20,00,000 / yr",
    department: "Analytics",
    postedDate: "3 days ago",
    isFeatured: true,
    description:
      "Transform business metrics and customer acquisition funnels into strategic growth insights. Develop automated SQL queries, maintain dbt models, and build high-impact executive dashboards.",
    requirements: [
      "3+ years working with SQL, Python (Pandas), and BI tools like Tableau or Metabase",
      "Experience modeling data warehouses (Snowflake, BigQuery, or Postgres)",
      "Strong statistical foundation for A/B testing and funnel attribution",
      "Clear storytelling and presentation skills for executive stakeholders",
    ],
    companyInitial: "BW",
    companyColor: "#8B5CF6",
  },
  {
    id: "job-4",
    title: "Backend Developer (Go / Node.js)",
    company: "Elevate Systems",
    location: "Hyderabad, India (Hybrid)",
    type: "Full-time",
    experience: "Senior",
    salary: "₹30,0,000 - ₹42,00,000 / yr",
    department: "Engineering",
    postedDate: "Just now",
    isFeatured: true,
    isUrgent: true,
    description:
      "Architect and scale distributed microservices handling millions of concurrent financial transactions. Optimize database queries, Kafka message queues, and maintain high service uptime.",
    requirements: [
      "4+ years with Go or Node.js in high-throughput distributed systems",
      "Strong experience with PostgreSQL, Redis, Kafka, and Docker/Kubernetes",
      "Deep understanding of distributed consensus, fault-tolerance, and observability",
      "Experience with cloud architectures on AWS or GCP",
    ],
    companyInitial: "ES",
    companyColor: "#F59E0B",
  },
  {
    id: "job-5",
    title: "Product Manager (Core Platform)",
    company: "NovaTech",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "Lead",
    salary: "₹32,00,000 - ₹45,00,000 / yr",
    department: "Product",
    postedDate: "4 days ago",
    isFeatured: true,
    description:
      "Define the product vision, roadmap, and execution strategy for our enterprise recruitment workflow engine. Work alongside cross-functional squads to increase user retention and pipeline velocity.",
    requirements: [
      "5+ years in B2B SaaS product management",
      "Proven ability to translate complex technical problems into user-friendly feature roadmaps",
      "Data-informed decision maker with strong metrics orientation (ARR, NPS, Churn)",
      "Exceptional stakeholder management and verbal communication",
    ],
    companyInitial: "NT",
    companyColor: "#EC4899",
  },
  {
    id: "job-6",
    title: "Marketing Specialist (Growth & Content)",
    company: "KitePulse Technologies",
    location: "Remote (India)",
    type: "Remote",
    experience: "Mid",
    salary: "₹12,00,000 - ₹17,00,000 / yr",
    department: "Marketing",
    postedDate: "5 days ago",
    isFeatured: true,
    description:
      "Scale our inbound pipeline through SEO-driven content, targeted email campaigns, and product-led growth initiatives. Own our editorial calendar and distribute technical employer guides.",
    requirements: [
      "2-4 years of growth marketing or content marketing in tech or B2B SaaS",
      "Exceptional writing and copy editing skills for tech audiences",
      "Hands-on experience with Google Analytics, Webflow/CMS, and HubSpot/Customer.io",
      "Data-driven mindset with experience optimizing lead-to-MQL conversion rates",
    ],
    companyInitial: "KP",
    companyColor: "#10B981",
  },
  {
    id: "job-7",
    title: "DevOps & Cloud Engineer",
    company: "Aura Cloud Networks",
    location: "Pune, India",
    type: "Full-time",
    experience: "Senior",
    salary: "₹26,00,000 - ₹35,00,000 / yr",
    department: "Infrastructure",
    postedDate: "6 days ago",
    description:
      "Design and maintain automated Terraform infrastructure, zero-downtime CI/CD pipelines, and multi-region AWS deployments with stringent SOC2 compliance requirements.",
    requirements: [
      "4+ years administering AWS cloud infrastructure and Terraform (IaC)",
      "Strong proficiency with Kubernetes (EKS), Helm, and GitHub Actions",
      "Experience with Prometheus, Grafana, and Datadog monitoring and alert response",
      "Security-first mindset regarding VPC networking and IAM least-privilege policies",
    ],
    companyInitial: "AC",
    companyColor: "#6366F1",
  },
  {
    id: "job-8",
    title: "Frontend Intern (React & Next.js)",
    company: "Meru Technosoft",
    location: "Bengaluru, India (Hybrid)",
    type: "Internship",
    experience: "Entry",
    salary: "₹35,000 - ₹50,000 / month",
    department: "Engineering",
    postedDate: "Just now",
    isUrgent: true,
    description:
      "Join our engineering squad to build responsive web interfaces, implement pixel-perfect Figma designs, and learn modern Next.js 15, TypeScript, and Tailwind CSS development workflows under senior mentorship.",
    requirements: [
      "Solid fundamentals in HTML5, CSS3, JavaScript (ES6+), and modern React",
      "Familiarity with Git version control, component architecture, and responsive design",
      "Passionate about UI aesthetics, clean code, and continuous learning",
      "Available for a 6-month full-time internship with high pre-placement offer (PPO) potential",
    ],
    companyInitial: "MT",
    companyColor: "#0F9D91",
  },
  {
    id: "job-9",
    title: "Full-Stack Engineer",
    company: "Cobalt Health",
    location: "Remote (India)",
    type: "Contract",
    experience: "Senior",
    salary: "₹2,50,000 - ₹3,50,000 / month",
    department: "Engineering",
    postedDate: "1 week ago",
    description:
      "6-month contract role building real-time patient-doctor appointment portals and HIPAA-compliant data exchange APIs using Next.js, Node.js, and PostgreSQL.",
    requirements: [
      "5+ years building full-stack applications with TypeScript, React, and Node.js",
      "Experience with GraphQL or RESTful API design and PostgreSQL optimization",
      "Comfortable operating autonomously with clear milestone deliveries",
      "Immediate availability for 40 hours per week",
    ],
    companyInitial: "CH",
    companyColor: "#14B8A6",
  },
  {
    id: "job-10",
    title: "Associate UI/UX Designer",
    company: "Zest Infotech",
    location: "Chennai, India",
    type: "Part-time",
    experience: "Entry",
    salary: "₹25,000 - ₹35,000 / month",
    department: "Design",
    postedDate: "1 week ago",
    description:
      "Collaborate on wireframes, icon libraries, and client presentation decks. Perfect for junior designers looking to build their commercial portfolio in a structured product agency.",
    requirements: [
      "Demonstrated proficiency in Figma, wireframing, and visual hierarchy",
      "Enthusiastic about web typography, layout grids, and mobile ergonomics",
      "Strong visual communication and ability to iterate quickly based on feedback",
    ],
    companyInitial: "ZI",
    companyColor: "#F43F5E",
  },
  {
    id: "job-11",
    title: "AI & Machine Learning Engineer",
    company: "Cognitive Matrix",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "Lead",
    salary: "₹40,00,000 - ₹55,00,000 / yr",
    department: "AI Research",
    postedDate: "3 days ago",
    description:
      "Architect LLM fine-tuning pipelines and semantic search algorithms powering automated candidate-skill matching and résumé ranking systems.",
    requirements: [
      "6+ years in applied machine learning, NLP, and vector search (Weaviate/Pinecone)",
      "Strong Python skills with PyTorch, Hugging Face, and LangChain/LlamaIndex",
      "Experience deploying inference services in low-latency production environments",
    ],
    companyInitial: "CM",
    companyColor: "#0284C7",
  },
  {
    id: "job-12",
    title: "HR & Talent Operations Coordinator",
    company: "Skyline Ventures",
    location: "Delhi NCR, India",
    type: "Full-time",
    experience: "Entry",
    salary: "₹6,50,000 - ₹9,00,000 / yr",
    department: "Operations",
    postedDate: "4 days ago",
    description:
      "Coordinate interview scheduling across hiring managers, manage candidate inquiries with high empathy, and streamline onboarding documentation across portfolio startups.",
    requirements: [
      "1-2 years experience in talent acquisition coordination or HR operations",
      "High organizational discipline, calendar management, and clear written communication",
      "Familiarity with ATS platforms (Greenhouse, Lever, or Surhires)",
    ],
    companyInitial: "SV",
    companyColor: "#D97706",
  },
];
