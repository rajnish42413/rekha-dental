import AccreditationsSection from "@/components/about/accreditaions";
import MilestonesSection from "@/components/about/milestoneSection";
import OldClinic from "@/components/about/oldClinic";
import StorySection from "@/components/about/storySection";
import Banner from "@/components/general/generalBanner";
import { accreditationsData, milestonesTimeline } from "@/utils/constants";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),
  title: "About Rekha Dental Clinic | Luxury Dental Care in Ghaziabad",
  description:
    "Discover Rekha Dental Clinic’s philosophy of refined, patient-first dentistry in Ghaziabad. Over 19 years of precision-driven dental care, advanced treatments, and calm clinical experiences.",

  keywords: [
    "Rekha Dental Clinic",
    "dentist in Ghaziabad",
    "dental clinic in Ghaziabad",
    "cosmetic dentistry",
    "luxury dental clinic",
    "dental implants Ghaziabad",
    "root canal treatment",
    "oral healthcare",
    "dental specialists",
    "Raj Nagar Extension dentist",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/about`,
  },

  openGraph: {
    title: "About Rekha Dental Clinic | Luxury Dental Care in Ghaziabad",

    description:
      "A calm, precision-focused dental practice built on thoughtful care, advanced treatments, and patient trust.",

    url: `${FRONTEND_URL}/about`,

    siteName: "Rekha Dental Clinic",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Clinic About Page",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Rekha Dental Clinic | Luxury Dental Care in Ghaziabad",
    description:
      "Explore the philosophy, story, and patient-first approach behind Rekha Dental Clinic.",

    images: [`${CLOUDINARY_BASE}/rekha-dental/aboutBanner`],
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
        imageSrc={`https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`}
        tag="REKHA DENTAL CLINIC"
        title="A practice built, slowly on purpose."
        subtitle="Nineteen years of refining the same idea — that the finest dental work disappears."
        highlightText=""
      />
      <StorySection
        images={[
          `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline3`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile1`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile3`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile4`,
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile5`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event1`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event2`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event3`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event4`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event5`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event6`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event7`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event8`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event9`,
        ]}
        tag="OUR STORY"
        title="A quiet rebellion against rushed dentistry."
        paragraphs={[
          "For more than 19 years, Rekha Dental has been redefining the dental experience through expert care, advanced technology, and a commitment to patient comfort. From a single clinic to two modern centers, our journey has been guided by one goal — delivering dentistry that patients can trust with complete confidence.",
          "Our team of specialists provides comprehensive dental solutions in a calm, welcoming environment designed to put patients at ease. While we have expanded over the years, our philosophy remains unchanged: every patient deserves personalized attention, uncompromising quality, and a smile they can be proud of.",
        ]}
      />
      <MilestonesSection {...milestonesTimeline} />
      <AccreditationsSection {...accreditationsData} />
      <OldClinic/>
    </div>
  );
}

export default page;
