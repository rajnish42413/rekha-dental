import { MetadataRoute } from "next";

import { FRONTEND_URL } from "@/utils/endpoints";

import { client } from "@/sanity/lib/client";
import { serviceDetails } from "@/data/service";
import { courseDetails } from "@/data/academy";
import { centers } from "@/data/appointment";

const LAST_MODIFIED = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/academy",
    "/blogs",
    "/common-problems",
    "/contact",
    "/dentist-near-me",
    "/doctor",
    "/dental-plans",
    "/gallery",
    "/legacy",
    "/patient-safety",
    "/payment",
    "/post-instruction",
    "/privacy-policy",
    "/reviews",
    "/terms-of-service",
    "/tour",
    "/treatments",
    "/warranty",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${FRONTEND_URL}${route}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.9,
  }));

  const servicePages: MetadataRoute.Sitemap = serviceDetails.map((service) => ({
    url: `${FRONTEND_URL}/treatments/${service.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const coursePages: MetadataRoute.Sitemap = courseDetails.map((course) => ({
    url: `${FRONTEND_URL}/academy/${course.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const centerPages: MetadataRoute.Sitemap = centers.map((center) => ({
    url: `${FRONTEND_URL}/dentist-near-me/${center.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogs: { slug: { current: string } }[] = await client.fetch(`
    *[_type == "blog"]{
      slug
    }
  `);

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${FRONTEND_URL}/blogs/${blog.slug.current}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...coursePages,
    ...centerPages,
    ...blogPages,
  ];
}