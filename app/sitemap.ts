import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kimahlife.com",
      lastModified: new Date(),
    },
    {
      url: "https://kimahlife.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://kimahlife.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://kimahlife.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://kimahlife.com/projects",
      lastModified: new Date(),
    },
  ];
}