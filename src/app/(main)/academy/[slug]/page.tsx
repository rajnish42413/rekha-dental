import { notFound } from "next/navigation";
import { Metadata } from "next";
import Banner from "@/components/general/generalBanner";
import SectionHeader from "@/components/general/sectionHeader";
import FAQ from "@/components/general/faq";
import { courseDetails } from "@/utils/constants";
import { FRONTEND_URL } from "@/utils/endpoints";
import { TiTick } from "react-icons/ti";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courseDetails.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;

  const course = courseDetails.find(
    (c) => c.slug === resolvedParams.slug
  );

  if (!course) {
    return {
      title: "Course Not Found | Rekha Dental Academy",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    metadataBase: new URL(FRONTEND_URL),

    title: `${course.hero.title} | Rekha Dental Academy`,

    description:
      course.hero.subtitle ||
      course.overview.description,

    alternates: {
      canonical: `${FRONTEND_URL}/academy/${course.slug}`,
    },

    openGraph: {
      title: `${course.hero.title} | Rekha Dental Academy`,
      description:
        course.hero.subtitle ||
        course.overview.description,
      url: `${FRONTEND_URL}/academy/${course.slug}`,
      type: "website",
      images: [
        {
          url: course.hero.image,
          width: 1200,
          height: 630,
          alt: course.hero.title,
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: PageProps) {
  const resolvedParams = await params;

  const course = courseDetails.find(
    (c) => c.slug === resolvedParams.slug
  );

  if (!course) {
    return notFound();
  }

  return (
    <div className="bg-[#EAE4DB]">
      <Banner
        imageSrc={course.hero.image}
        tag="COURSE"
        title={course.hero.title}
        subtitle={course.hero.subtitle}
        overlayColor="bg-[#0f3d3e]/60"
      />
      <section className="py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="col-span-2">
            <p className="text-xs font-semibold tracking-[3px] text-[#CBA553] mb-4 uppercase">
              {course.overview.tag}
            </p>

            <p className="text-md text-[#2C2C2C] leading-relaxed font-header">
              {course.overview.description}
            </p>
          </div>

          <div className="border-l-2 border-[#CBA553]/40 pl-8">
            <p className="text-xs font-semibold tracking-[3px] text-[#CBA553] mb-4 uppercase">
              {course.curriculum.tag}
            </p>

            <ul className="space-y-4">
              {course.curriculum.points.map(
                (point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-md font-header text-[#2C2C2C]"
                  >
                    <span className="text-[#CBA553]">
                      <TiTick />
                    </span>

                    {point}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag={course.benefits.tag}
            title="What You'll Gain"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {course.benefits.points.map(
              (benefit, index) => (
                <div
                  key={index}
                  className="bg-[#F5F1EA] border border-[#E0D8CC] rounded-xl p-6 hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="text-[#CBA553] text-sm mb-3 font-medium tracking-[2px]">
                    {(index + 1)
                      .toString()
                      .padStart(2, "0")}
                  </p>

                  <p className="font-header text-lg text-[#2C2C2C]">
                    {benefit}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <SectionHeader
            tag="QUESTIONS"
            title="Frequently asked."
            align="left"
          />
          <FAQ data={course.faqs} />
        </div>
      </section>
    </div>
  );
}