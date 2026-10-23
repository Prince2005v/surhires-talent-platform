export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  avatarColor: string;
  rating: number;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Surhires provided our engineering team with high-signal candidate profiles without the usual clutter. The screening filters and clear role alignment helped us focus our interview rounds effectively.",
    author: "Aditi Rao",
    role: "VP of Engineering",
    company: "Northstar Labs",
    avatarInitials: "AR",
    avatarColor: "#0F9D91",
    rating: 5,
  },
  {
    id: "test-2",
    quote:
      "As a designer searching for a remote role, the application experience on Surhires was refreshingly transparent. You understand role expectations upfront without navigating confusing third-party portals.",
    author: "Kunal Mehra",
    role: "Lead Product Designer",
    company: "Vertex Digital",
    avatarInitials: "KM",
    avatarColor: "#3B82F6",
    rating: 5,
  },
  {
    id: "test-3",
    quote:
      "The hiring pipeline interface is intuitive and kept our cross-functional team aligned during our quarterly hiring cycles. It provides just the right amount of workflow structure without overcomplicating things.",
    author: "Sneha Nair",
    role: "Head of People & Culture",
    company: "BloomWorks",
    avatarInitials: "SN",
    avatarColor: "#8B5CF6",
    rating: 5,
  },
];
