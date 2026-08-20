import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { GET_SINGLE_BLOG } from "@/sanity/lib/queries";
import Banner from "@/components/general/generalBanner";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = await client.fetch(
    GET_SINGLE_BLOG,
    { slug }
  );

  if (!blog) {
    return {
      title: "Blog Not Found | Rekha Dental",

      description:
        "The requested dental blog could not be found.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    blog.seoTitle ||
    `${blog.title} | Rekha Dental`;

  const description =
    blog.seoDescription || blog.excerpt;

  const image =
    blog?.thumbnail
      ? blog.thumbnail.asset?.url ||
        `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`
      : `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`;

  return {
    metadataBase: new URL(FRONTEND_URL),

    title,

    description,

    keywords: [
      blog.title,
      blog.category,
      "dental blog",
      "oral care",
      "cosmetic dentistry",
      "dental clinic Ghaziabad",
      "oral hygiene",
      "smile makeover",
      "dental implants",
      "root canal treatment",
      "Rekha Dental",
    ],

    alternates: {
      canonical: `${FRONTEND_URL}/blogs/${slug}`,
    },

    openGraph: {
      title,

      description,

      url: `${FRONTEND_URL}/blogs/${slug}`,

      siteName: "Rekha Dental",

      type: "article",

      locale: "en_US",

      publishedTime: blog.publishedAt,

      authors: [blog.author],

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export const revalidate = 3600;

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;

  const blog = await client.fetch(GET_SINGLE_BLOG, {
    slug,
  });

  if (!blog) {
    return <div className="py-32 text-center text-2xl">Blog not found</div>;
  }

  return (
    <article className="bg-[#F7F3EC]">
      <Banner
        imageSrc={urlFor(blog.thumbnail).url()}
        // tag={blog.category}
        // title={blog.title}
        // subtitle={blog.excerpt}
        overlayColor="bg-black/50"
        // objectFill={true}
      />
      <section className="relative z-10 -mt-24 pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <div
            className="
            rounded-lg
            border border-[#E9E1D5]
            bg-white
            p-6
            shadow-[0_15px_60px_rgba(0,0,0,0.05)]
            md:p-14
          "
          >
            <div className="flex flex-wrap items-center gap-3 border-b border-[#EFE7DB] pb-8 text-sm text-[#7A7A7A]">
              <span className="font-semibold text-lg text-[#1E1E1E] font-header">{blog.author}</span>
              <span className="text-yellow">•</span>
              <span className="text-yellow flex items-center font-extrabold gap-1 text-md"> <FaCalendarAlt />
                {new Intl.DateTimeFormat("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(blog.publishedAt))}
              </span>
              <span className="text-yellow">•</span>
              <span className="flex items-center gap-1 text-yellow font-extrabold text-md"><MdOutlineWatchLater size={16}/>{blog.readingTime}</span>
            </div>

            {blog.category && (
          <div className="inline-flex  mt-6  items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
            <span className="text-xs font-extrabold uppercase tracking-[2px] text-emerald-600">
              {blog.category}
            </span>
          </div>
        )}
        <h1 className=" font-header
            
              text-3xl mt-5
              leading-tight
              text-[#1E1E1E]
              md:text-5xl">
          {blog.title}
        </h1>
        {blog.excerpt && (
          <p className="mt-6  
              lg:text-md text-sm
              leading-loose
              text-[#4E4B47]">
            {blog.excerpt}
          </p>
        )}
            <div className="pt-4">
              <PortableText
                value={blog.content}
                components={{
                  block: {
                    h1: ({ children }) => (
                      <h1
                        className="
              font-header
              lg:mt-16 mt-6
              text-3xl
              leading-tight
              text-[#1E1E1E]
              md:text-5xl
            "
                      >
                        {children}
                      </h1>
                    ),

                    h2: ({ children }) => (
                      <h2
                        className="
              font-header
              lg:mt-14 mt-6
              text-2xl
              leading-tight
              text-[#1E1E1E]
              md:text-4xl
            "
                      >
                        {children}
                      </h2>
                    ),

                    h3: ({ children }) => (
                      <h3
                        className="
              font-header
              lg:mt-12 mt-6
              text-xl
              leading-tight
              text-[#1E1E1E]
            "
                      >
                        {children}
                      </h3>
                    ),

                    normal: ({ children }) => (
                      <p
                        className="
              mt-7
              lg:text-md text-sm
              leading-loose
              text-[#4E4B47]
            "
                      >
                        {children}
                      </p>
                    ),

                    blockquote: ({ children }) => (
                      <blockquote
                        className="
              mt-10
              border-l-4
              border-[#CBA553]
              pl-6
              italic
              text-[#6B6258]
            "
                      >
                        {children}
                      </blockquote>
                    ),
                  },

                  list: {
                    bullet: ({ children }) => (
                      <ul className="mt-8 space-y-4 pl-6">{children}</ul>
                    ),

                    number: ({ children }) => (
                      <ol className="mt-8 space-y-4 pl-6">{children}</ol>
                    ),
                  },

                  listItem: {
                    bullet: ({ children }) => (
                      <li className="text-lg leading-8 text-[#4E4B47]">
                        {children}
                      </li>
                    ),

                    number: ({ children }) => (
                      <li className="text-lg leading-8 text-[#4E4B47]">
                        {children}
                      </li>
                    ),
                  },

                  types: {
                    image: ({ value }) => (
                      <div className="my-14 overflow-hidden w-full flex items-center justify-center ">
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || "Blog Image"}
                          width={1400}
                          height={900}
                          className="
                h-[260px]
                w-[300px]
                object-cover rounded-lg
              "
                        />
                      </div>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
