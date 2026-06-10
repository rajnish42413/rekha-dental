import SectionHeader from "@/components/general/sectionHeader";
import { privacySections } from "@/utils/constants";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Privacy Policy | Rekha Dental Clinic Ghaziabad",

  description:
    "Read the Privacy Policy of Rekha Dental Clinic to understand how we collect, use, protect, and manage patient and visitor information across our website and clinical services.",

  keywords: [
    "privacy policy",
    "Rekha Dental Clinic",
    "patient privacy",
    "data protection",
    "medical privacy policy",
    "website privacy",
    "dental clinic privacy policy",
    "healthcare data protection",
    "clinic information policy",
    "privacy practices",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/privacy-policy`,
  },

  openGraph: {
    title:
      "Privacy Policy | Rekha Dental Clinic Ghaziabad",

    description:
      "Learn how Rekha Dental Clinic safeguards patient and website visitor information with responsible privacy and data protection practices.",

    url: `${FRONTEND_URL}/privacy-policy`,

    siteName: "Rekha Dental Clinic",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Clinic Privacy Policy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Privacy Policy | Rekha Dental Clinic Ghaziabad",

    description:
      "Understand how Rekha Dental Clinic collects, protects, and manages user and patient information responsibly.",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden my-10">
      <SectionHeader
        tag="Privacy Policy"
        title="Your privacy matters to us."
        subtitle="We are committed to protecting your personal information and maintaining the trust you place in our clinic. This policy outlines how we collect, use, and safeguard your information."
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div className="lg:my-14 my-10 grid gap-8">
          {privacySections.map((section, index) => {
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
                  0{index + 1}
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