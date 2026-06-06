import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.start2growth.in";
  const now = new Date();

  return [
    { url: base,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/jm-creations`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/zigo-digital`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/techbuddyspace`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/clients`,             lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/clients/waymax-global`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/clients/vs6-makeup-studio`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/clients/shre-sha-catering`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/clients/taras-food-park`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
