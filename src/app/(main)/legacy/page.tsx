import Banner from "@/components/general/generalBanner";
import Achievements from "@/components/legacy/achievements";
import DentalCamps from "@/components/legacy/dentalCamps";
import Lectures from "@/components/legacy/lectures";
import NewspaperCuttings from "@/components/legacy/newspaperCuttings";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Professional Legacy | Rekha Dental",

  description:
    "Explore the professional journey of Rekha Dental through achievements, dental camps, academic lectures, workshops, community outreach programs, and media recognition.",

  keywords: [
    "Rekha Dental",
    "Dr Gaurav Saxena",
    "Dental Camps",
    "Dental Workshops",
    "Dental Lectures",
    "Dental Achievements",
    "Dental Education",
    "Community Outreach",
    "Dentist Ghaziabad",
    "Dental Academy",
    "Media Coverage",
    "Professional Legacy",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/legacy`,
  },

  openGraph: {
    title:
      "Professional Legacy | Rekha Dental",

    description:
      "A journey of excellence through dental education, international collaborations, community service, achievements, and professional milestones.",

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

    title:
      "Professional Legacy | Rekha Dental",

    description:
      "Discover the achievements, outreach programs, lectures, and milestones that define Rekha Dental's legacy.",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/dental-camps/camp4`,
    ],
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
      <Lectures/>
      <NewspaperCuttings/>
    </div>
  );
}

export default page;
