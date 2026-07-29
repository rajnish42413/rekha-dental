import Banner from "@/components/general/generalBanner";
import Achievements from "@/components/legacy/achievements";
import DentalCamps from "@/components/legacy/dentalCamps";
import Lectures from "@/components/legacy/lectures";
import NewspaperCuttings from "@/components/legacy/newspaperCuttings";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Our Legacy | Trusted Dental Excellence Since 2005",

  description:
    "Explore Rekha Dental's journey of trusted dentistry, innovation, and patient care built over nearly two decades.",
  keywords: [
    "Rekha Dental history",
    "dental excellence",
    "trusted dentist",
    "legacy",
    "best dental clinic",
    "patient care",
    "advanced dentistry",
    "Ghaziabad dentist",
    "family dentistry",
    "oral healthcare",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/legacy`,
  },

  openGraph: {
    title: "Our Legacy | Trusted Dental Excellence Since 2005",

    description:
      "Explore Rekha Dental's journey of trusted dentistry, innovation, and patient care built over nearly two decades.",
    url: `${FRONTEND_URL}/legacy`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp4`,
        width: 1200,
        height: 630,
        alt: "Professional Legacy - Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Our Legacy | Trusted Dental Excellence Since 2005",

    description:
      "Explore Rekha Dental's journey of trusted dentistry, innovation, and patient care built over nearly two decades.",

    images: [`${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp4`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <Banner
        imageSrc={`${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp4`}
        tag="PROFESSIONAL LEGACY"
        title="Years of excellence, measured in lives touched."
        subtitle="An ongoing story of professional growth, international collaborations, dental education, and community service dedicated to advancing oral healthcare."
        highlightText=""
      />
      <DentalCamps />
      <Achievements />
      <Lectures />
      <NewspaperCuttings />
    </div>
  );
}

export default page;
