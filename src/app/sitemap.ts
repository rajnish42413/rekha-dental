import { MetadataRoute } from "next";

import { FRONTEND_URL } from "@/utils/endpoints";

import { courseDetails, serviceDetails } from "@/utils/constants";

import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/academy",
    "/blogs",
    "/contact",
    "/doctor",
    "/gallery",
    "/payment",
    "/legacy",
    "/privacy-policy",
    "/reviews",
    "/services",
    "/terms-of-service",
    "/tour",
  ];

  const staticPages = staticRoutes.map(
    (route) => ({
      url: `${FRONTEND_URL}${route}`,

      lastModified: new Date(),

      changeFrequency: "weekly" as const,

      priority: route === "" ? 1 : 0.8,
    })
  );

  const servicePages = serviceDetails.map(
    (service) => ({
      url: `${FRONTEND_URL}/services/${service.slug}`,

      lastModified: new Date(),

      changeFrequency: "monthly" as const,

      priority: 0.7,
    })
  );
  const coursePages = courseDetails.map(
    (course) => ({
      url: `${FRONTEND_URL}/academy/${course.slug}`,
  
      lastModified: new Date(),
  
      changeFrequency: "monthly" as const,
  
      priority: 0.7,
    })
  );

  const blogs = await client.fetch(`
    *[_type == "blog"]{
      slug
    }
  `);

  const blogPages = blogs.map(
    (blog: {
      slug: { current: string };
    }) => ({
      url: `${FRONTEND_URL}/blogs/${blog.slug.current}`,

      lastModified: new Date(),

      changeFrequency: "weekly" as const,

      priority: 0.7,
    })
  );

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...coursePages
  ];
}