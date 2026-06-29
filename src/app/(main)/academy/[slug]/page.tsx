import { notFound } from "next/navigation";
import { Metadata } from "next";
import Banner from "@/components/general/generalBanner";
import SectionHeader from "@/components/general/sectionHeader";
import FAQ from "@/components/general/faq";
import { courseDetails } from "@/utils/constants";
import { FRONTEND_URL, WHATSAPP_NUMBER } from "@/utils/endpoints";
import { TiTick } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa6";

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

  const course = courseDetails.find((c) => c.slug === resolvedParams.slug);

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

    description: course.hero.subtitle || course.overview.description,

    alternates: {
      canonical: `${FRONTEND_URL}/academy/${course.slug}`,
    },

    openGraph: {
      title: `${course.hero.title} | Rekha Dental Academy`,
      description: course.hero.subtitle || course.overview.description,
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

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;

  const course = courseDetails.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    return notFound();
  }

  const message = encodeURIComponent(
    `Hi, I am interested in the "${course.hero.title}" course. Please share the fee structure, duration, upcoming batches, and enrollment process.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="bg-[#EAE4DB]">
      <Banner
        imageSrc={course.hero.image}
        tag="COURSE"
        title={course.hero.title}
        subtitle={course.hero.subtitle}
        overlayColor="bg-[#0f3d3e]/60"
      />

      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start">
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
                {course.curriculum.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-md font-header text-[#2C2C2C]"
                  >
                    <span className="text-[#CBA553]">
                      <TiTick />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="mt-12 border border-[#E8DED0]
                bg-[#FCFAF6] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          >
            <div>
              <p className="text-xs font-semibold tracking-[3px] text-[#CBA553] mb-4 uppercase">
                Course Admission Open
              </p>
              <h4 className="font-header text-xl md:text-2xl text-[#2C2A27]">
                Ready to upscale your dental expertise?
              </h4>
              <p className="mt-5 text-[#6F675F] leading-relaxed md:text-md text-sm">
                Enquire via WhatsApp to get immediate details on batch timings,
                seat availability, and total fees.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-brand hover:bg-[#093528] active:scale-95 duration-200 transition-all text-white py-3.5 px-8 rounded-xl font-medium text-base flex items-center justify-center gap-3 shadow-md"
              >
                <FaWhatsapp size={22} />
                <span>Enquire Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {course.details && course.details.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center md:text-left">
              <SectionHeader tag="COURSE DETAILS" title="What You'll Learn" />
            </div>

            <div className="mt-12 relative ">
              <div className="absolute left-5 top-0 bottom-8 w-[2px]  bg-[#D3C4B2]" />

              {course.details.map((detail, index) => (
                <div key={index} className="relative flex gap-4 md:gap-8 pb-8">
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className="
                  w-10 h-10
                  rounded-full
                  bg-brand
                  text-white
                  flex items-center justify-center
                  font-semibold
                  text-sm
                  border-4 border-white
                  shadow-md
                "
                    >
                      {index + 1}
                    </div>
                  </div>
                  <div
                    className="
                flex-1
                rounded-[24px]
                border border-[#E8DED0]
                bg-[#FCFAF6]
                p-6 md:p-8
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
                  >
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-header text-xl md:text-2xl text-[#2C2A27]">
                          {detail.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 text-[#6F675F] leading-relaxed md:text-md text-sm">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag={course.benefits.tag} title="What You'll Gain" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {course.benefits.points.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#F5F1EA] border border-[#E0D8CC] rounded-xl p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-[#CBA553] text-sm mb-3 font-medium tracking-[2px]">
                  {(index + 1).toString().padStart(2, "0")}
                </p>

                <p className="font-header text-lg text-[#2C2C2C]">{benefit}</p>
              </div>
            ))}
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
