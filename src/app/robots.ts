import { MetadataRoute } from "next";

import { FRONTEND_URL } from "@/utils/endpoints";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",

      allow: "/",

      disallow: [
        "/api/",
      ],
    },

    sitemap: `${FRONTEND_URL}/sitemap.xml`,
  };
}