import { notFound } from "next/navigation";
import Image from "next/image";
import { serviceDetails } from "@/utils/constants";
import Banner from "@/components/general/generalBanner";
import SectionHeader from "@/components/general/sectionHeader";
import FAQ from "@/components/general/faq";
import { TiTick } from "react-icons/ti";
import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";
import BookAppointmentButton from "@/components/general/bookAppointmentButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;

  const slug = resolvedParams?.slug;

  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Treatment Not Found | Rekha Dental Clinic",

      description: "The requested dental treatment page could not be found.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${service.hero.title} | Rekha Dental Clinic Ghaziabad`;

  const description = service.hero.subtitle || service.overview.description;

  return {
    metadataBase: new URL(FRONTEND_URL),

    title,

    description,

    keywords: [
      service.hero.title,
      "dental treatment",
      "dentist in Ghaziabad",
      "cosmetic dentistry",
      "dental implants",
      "oral healthcare",
      "root canal treatment",
      "smile makeover",
      "advanced dental care",
      "Rekha Dental Clinic",
    ],

    alternates: {
      canonical: `${FRONTEND_URL}/services/${service.slug}`,
    },

    openGraph: {
      title,

      description,

      url: `${FRONTEND_URL}/services/${service.slug}`,

      siteName: "Rekha Dental Clinic",

      type: "website",

      locale: "en_US",

      images: [
        {
          url: `${FRONTEND_URL}${service.hero.image}`,
          width: 1200,
          height: 630,
          alt: service.hero.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [`${FRONTEND_URL}${service.hero.image}`],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="bg-[#EAE4DB]">
      <Banner
        imageSrc={service.hero.image}
        tag="TREATMENT"
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        overlayColor="bg-[#0f3d3e]/60"
      />
      <section className="lg:py-20 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="col-span-2">
            <p className="text-xs font-semibold tracking-[3px] text-[#CBA553] mb-4 uppercase">
              {service.overview.tag}
            </p>
            <p className="text-md text-[#2C2C2C] leading-relaxed font-header">
              {service.overview.description}
            </p>
          </div>
          <div className="border-l-2 border-[#CBA553]/40 pl-8">
            <p className="text-xs font-semibold tracking-[3px] text-[#CBA553] mb-4 uppercase">
              {service.technology.tag}
            </p>

            <ul className="space-y-4">
              {service.technology.points.map((point, i) => (
                <li
                  key={i}
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
      </section>

      <section className="lg:pb-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="PRICING" title="Treatment Pricing" />

          <div className="mt-10 overflow-hidden rounded-xl border border-[#D8CFC2] bg-[#F5F1EA] shadow-sm">
            <div className="grid grid-cols-[1fr_auto] bg-brand text-white">
              <div className="px-6 py-4 text-sm tracking-[2px] uppercase font-semibold">
                Treatment
              </div>
              <div className="px-6 py-4 text-sm tracking-[2px] uppercase font-semibold text-right">
                Price
              </div>
            </div>

            {service.treatments?.map((treatment, index) => (
              <div
                key={index}
                className={`grid grid-cols-[1fr_auto]  transition-colors duration-300 hover:bg-[#EFE8DD]
          ${
            index !== service.treatments?.length - 1
              ? "border-b border-[#E2D9CE]"
              : ""
          }`}
              >
                <div className="px-4 md:px-6 py-5 flex  gap-2 md:gap-3">
                  {/* <div className="w-2 h-2 rounded-full bg-[#CBA553]" /> */}

                  <span className="text-[#2C2C2C] text-sm md:text-md font-header">
                    {treatment.name}
                  </span>
                </div>

                <div className="px-6 py-5 font-semibold text-[#0f3d3e] text-right ">
                  {treatment.price}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-[#6B6B6B] italic">
            * Prices are indicative and may vary depending on clinical
            examination and individual treatment requirements.
          </p>
        </div>
      </section>

      <section className="lg:py-20 py-10 ">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag={service.process.tag}
            title={service.process.title}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {service.process.steps.map((step, i) => (
              <div
                key={i}
                className="group bg-[#F5F1EA] border rounded-lg border-[#E0D8CC] overflow-hidden hover:-translate-y-1 transition duration-300"
              >
                <div className="relative w-full h-[180px] lg:h-[220px] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="lg:p-6 p-4">
                  <p className="text-[#CBA553] text-sm mb-2 font-medium tracking-[2px]">
                    {step.index}
                  </p>
                  <h4 className="font-header text-lg text-[#2C2C2C] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
   border border-[#E8DED0]
                bg-[#FCFAF6] rounded-2xl p-6 md:p-8
    flex flex-col md:flex-row 
    items-center justify-between gap-6 shadow-sm
  "
          >
            <div>
              <p className="text-xs font-semibold tracking-[3px] text-[#CBA553] mb-4 uppercase">
                Book Your Consultation
              </p>

              <h4 className="font-header text-xl md:text-2xl text-[#2C2A27]">
                Ready to transform your smile?
              </h4>

              <p className="mt-5 text-[#6F675F] leading-relaxed md:text-md text-sm">
                Schedule an appointment with our dental experts and get a
                personalized treatment plan tailored to your needs.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <BookAppointmentButton className="w-full md:w-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-20 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 md:gap-12 gap-6">
          <SectionHeader
            tag="QUESTIONS"
            title="Frequently asked."
            align="left"
          />
          <FAQ data={service.faqs} />
        </div>
      </section>
    </div>
  );
}
