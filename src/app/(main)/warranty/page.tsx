import SectionHeader from "@/components/general/sectionHeader";
import WarrantyCard from "@/components/warranty/warrantyCard";
import { warrantyPolicies } from "@/data/warranty";
import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Dental Treatment Warranty | Rekha Dental",

  description:
    "Learn about Rekha Dental's treatment warranty, quality assurance, and commitment to long-lasting dental care.",

  keywords: [
    "dental warranty",
    "implant warranty",
    "dental guarantee",
    "treatment assurance",
    "quality dentistry",
    "Rekha Dental",
    "dental implants",
    "best dental clinic",
    "patient confidence",
    "dentist Ghaziabad",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/warranty`,
  },

  openGraph: {
    title: "Dental Treatment Warranty | Rekha Dental",

    description:
      "Learn about Rekha Dental's treatment warranty, quality assurance, and commitment to long-lasting dental care.",

    url: `${FRONTEND_URL}/warranty`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
        width: 1200,
        height: 630,
        alt: "Dental Treatment Warranty | Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Dental Treatment Warranty | Rekha Dental",

    description:
      "Learn about Rekha Dental's treatment warranty, quality assurance, and commitment to long-lasting dental care.",

    images: [
      `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div className="my-10">
      <SectionHeader
        tag="Warranty Policy"
        title="We've Got You Covered"
        subtitle="Know what's covered, for how long, and the conditions for re-treatment."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8  md:grid-cols-2 xl:grid-cols-3 px-6">
        {warrantyPolicies.map((item) => (
          <WarrantyCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
