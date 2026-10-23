import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://surhires.vercel.app";

  const currentDate = new Date().toISOString();

  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: currentDate,
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/employers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
