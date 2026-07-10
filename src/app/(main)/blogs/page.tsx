import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { GET_PAGINATED_BLOGS, GET_TOTAL_BLOGS } from "@/sanity/lib/queries";
import { Blog } from "@/utils/interface";
import { generatePagination } from "@/hooks/pagination";
import SectionHeader from "@/components/general/sectionHeader";
import { LuClock3 } from "react-icons/lu";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

interface BlogsPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Dental Blogs & Oral Care Insights | Rekha Dental Clinic Ghaziabad",

  description:
    "Explore expert dental blogs from Rekha Dental Clinic covering oral hygiene, cosmetic dentistry, dental implants, smile makeovers, root canals, and modern dental treatments in Ghaziabad.",

  keywords: [
    "dental blogs",
    "oral caretips ",
    "dentist in Ghaziabad",
    "dental clinic Ghaziabad",
    "cosmetic dentistry",
    "dental implants",
    "root canal treatment",
    "smile makeover",
    "oral hygiene",
    "teeth whitening",
    "dental health articles",
    "Rekha Dental Clinic blogs",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/blogs`,
  },

  openGraph: {
    title: "Dental Blogs & Oral Care Insights | Rekha Dental Clinic Ghaziabad",

    description:
      "Read expert insights on oral health, cosmetic dentistry, smile makeovers, implants, and modern dental care from Rekha Dental Clinic.",

    url: `${FRONTEND_URL}/blogs`,

    siteName: "Rekha Dental Clinic",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Clinic Blogs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Dental Blogs & Oral Care Insights | Rekha Dental Clinic Ghaziabad",

    description:
      "Discover modern dental care insights, oral hygiene advice, and cosmetic dentistry knowledge from Rekha Dental Clinic.",

    images: [`${CLOUDINARY_BASE}/rekha-dental/aboutBanner`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const BLOGS_PER_PAGE = 42;
export const revalidate = 0;

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page || 1);
  const start = (currentPage - 1) * BLOGS_PER_PAGE;
  const end = start + BLOGS_PER_PAGE;
  const blogs: Blog[] = await client.fetch(GET_PAGINATED_BLOGS, {
    start,
    end,
  });

  const totalBlogs: number = await client.fetch(GET_TOTAL_BLOGS);
  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);
  const pagination = generatePagination(currentPage, totalPages);

  return (
    <section className="min-h-screen  px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="REKHA DENTAL BLOGS"
          title=" Dental Insights and Expert Care"
        />
        {blogs.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl px-6 py-20 text-center">
            <Image
              src={`${CLOUDINARY_BASE}/rekha-dental/aboutBanner`}
              alt="No blogs available"
              width={120}
              height={120}
              className="mb-6 rounded-full object-cover opacity-80"
            />

            <p className="mb-3 text-xs font-medium uppercase tracking-[4px] text-yellow">
              COMING SOON
            </p>

            <h2 className="font-header text-3xl text-[#2C2C2C]">
              Expert insights are on the way.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B6B6B]">
              We&apos;re preparing educational articles covering oral health,
              cosmetic dentistry, dental implants, smile makeovers, and
              preventive dental care. Check back soon for expert guidance from
              Rekha Dental Clinic.
            </p>

            <Link
              href="/contact"
              className="mt-8 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Book a Consultation
            </Link>
          </div>
        ) : (
          <div>
            {" "}
            <div className="lg:mt-16 mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog, index) => (
                <Link
                  key={blog._id}
                  href={`/blogs/${blog.slug.current}`}
                  className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        bg-[#F5F1EA]
        transition-all
        duration-700
        hover:-translate-y-1 rounded-xl
      "
                >
                  <div className="relative lg:h-[260px] h-[200px] w-full rounded-t-xl overflow-hidden">
                    <Image
                      src={urlFor(blog.thumbnail).url()}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw,
                  (max-width: 1024px) 50vw,
                  33vw"
                      className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
                    />
                  </div>
                  <div className="flex flex-1 flex-col lg:p-6 p-4">
                    <div className="flex items-center gap-3 text-sm uppercase font-extrabold tracking-[2px] text-yellow">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span className="h-[2px] w-5 bg-yellow" />
                      <span className="line-clamp-1">{blog.category}</span>
                    </div>
                    <h2
                      className="
            mt-5
            line-clamp-2
            font-header text-xl
            lg:text-2xl
            leading-snug
            text-[#2C2C2C]
          "
                    >
                      {blog.title}
                    </h2>
                    <p
                      className="
            mt-4
            line-clamp-2
            min-h-[62px]
            text-sm
            leading-relaxed
            text-[#6B6B6B]
          "
                    >
                      {blog.excerpt}
                    </p>
                    <div className="mt-auto lg:pt-8 pt-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs tracking-[2px] text-[#A0A0A0] uppercase">
                          <LuClock3 className="text-sm text-yellow" />
                          <span className="text-yellow font-extrabold text sm">{blog.readingTime}</span>
                        </div>
                        <div className="inline-flex items-center gap-2  text-xs tracking-[2px] text-yellow  font-extrabold uppercase">
                          Read More
                          <span className="block h-[2px] w-6 bg-yellow transition-all duration-300 group-hover:w-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
              {currentPage > 1 && (
                <Link
                  href={`/blogs?page=${currentPage - 1}`}
                  className="rounded-lg bg-[#F5F1EA] py-3 px-5 text-sm text-[#1E1E1E] cursor-pointer active:scale-95 duration-200 transition-all"
                >
                  Previous
                </Link>
              )}

              {pagination.map((item, index) =>
                item === "..." ? (
                  <span key={index} className="px-2 text-[#777]">
                    ...
                  </span>
                ) : (
                  <Link
                    key={index}
                    href={`/blogs?page=${item}`}
                    className={`flex h-12 w-12 items-center cursor-pointer active:scale-95 duration-200 justify-center rounded-lg text-sm transition ${
                      currentPage === item
                        ? "bg-[#1D4D3B] text-white"
                        : "bg-[#F5F1EA] text-[#1E1E1E]"
                    }`}
                  >
                    {item}
                  </Link>
                )
              )}

              {currentPage < totalPages && (
                <Link
                  href={`/blogs?page=${currentPage + 1}`}
                  className="rounded-lg bg-[#F5F1EA] px-5 py-3 text-sm text-[#1E1E1E] cursor-pointer active:scale-95 duration-200 transition-all"
                >
                  Next
                </Link>
              )}
            </div>{" "}
          </div>
        )}
      </div>
    </section>
  );
}
