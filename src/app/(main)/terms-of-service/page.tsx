import DownloadTermsQR from "@/components/general/downloadQR";
import SectionHeader from "@/components/general/sectionHeader";
import { termsSections } from "@/data/termsOfService";
import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Terms of Service | Rekha Dental",

  description:
    "Read the terms and conditions governing the use of Rekha Dental's website, appointments, and dental services.",

  keywords: [
    "terms of service",
    "website terms",
    "dental clinic policy",
    "appointment terms",
    "patient agreement",
    "Rekha Dental",
    "service conditions",
    "website usage",
    "legal policy",
    "dental services",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/terms-of-service`,
  },

  openGraph: {
    title: "Terms of Service | Rekha Dental",

    description:
      "Read the terms and conditions governing the use of Rekha Dental's website, appointments, and dental services.",

    url: `${FRONTEND_URL}/terms-of-service`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
        width: 1200,
        height: 630,
        alt: "Terms of Service | Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Terms of Service | Rekha Dental",

    description:
      "Read the terms and conditions governing the use of Rekha Dental's website, appointments, and dental services.",

    images: [
      `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="relative overflow-hidden my-10">
      <SectionHeader
        tag="Terms Of Service"
        title="Designed with clarity, trust, and transparency."
        subtitle="These terms outline the guidelines, responsibilities, and conditions associated with using our website and dental care services."
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex justify-end mt-6">
        <DownloadTermsQR />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div className="lg:my-14 my-10 grid gap-8">
          {termsSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-lg
                  border
                  border-[#E8DED0]
                  bg-[#FCFAF6]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#D9C5A1]
                  hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]
                "
              >
                <div
                  className="
                    absolute
                    right-6
                    top-5
                    font-header
                    lg:text-6xl text-4xl
                    leading-none
                    text-[#ECE4D8]
                    transition
                    duration-500
                    group-hover:text-[#E1D4BF]
                  "
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                <div
                  className="
                    relative
                    z-10
                    flex
                    lg:h-12
                    lg:w-12
                    h-10 w-10
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#E7DDD0]
                    bg-[#F3ECE1]
                    text-2xl
                    text-[#163828]
                    transition-all
                    duration-500
                  "
                >
                  <Icon />
                </div>

                <div className="relative z-10 mt-8">
                  <h2
                    className="
                      font-header
                      lg:text-3xl text-xl
                      leading-tight
                      text-[#2C2A27]
                    "
                  >
                    {section.title}
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-4xl
                      text-sm
                      lg:leading-8 leading-6
                      text-[#66625C]
                      md:text-base
                    "
                  >
                    {section.description}
                  </p>
                </div>

                <div
                  className="
                    absolute
                    -bottom-10
                    -right-10
                    h-40
                    w-40
                    rounded-full
                    bg-[#EFE5D7]
                    opacity-0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
