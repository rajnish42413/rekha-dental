import AccreditationsSection from "@/components/about/accreditaions";
import MilestonesSection from "@/components/about/milestoneSection";
import OldClinic from "@/components/about/oldClinic";
import StorySection from "@/components/about/storySection";
import Banner from "@/components/general/generalBanner";
import PillarCard from "@/components/general/pillarCard";
import SectionHeader from "@/components/general/sectionHeader";
import { accreditationsData, milestonesTimeline } from "@/data/about";
import { ourCoreValues } from "@/data/dentalPlans";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),
  title: "About Rekha Dental | Luxury Dental Care in Ghaziabad",
  description:
    "Discover Rekha Dental's philosophy of refined, patient-first dentistry in Ghaziabad. Over 19 years of precision-driven dental care, advanced treatments, and calm clinical experiences.",

  keywords: [
    "Rekha Dental",
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
    title: "About Rekha Dental | Luxury Dental Care in Ghaziabad",

    description:
      "A calm, precision-focused dental practice built on thoughtful care, advanced treatments, and patient trust.",

    url: `${FRONTEND_URL}/about`,

    siteName: "Rekha Dental ",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental About Page",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Rekha Dental | Luxury Dental Care in Ghaziabad",
    description:
      "Explore the philosophy, story, and patient-first approach behind Rekha Dental.",
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
        tag="REKHA DENTAL"
        title="Personalized Dental Care"
        subtitle="Trusted by thousands of smiles, backed by years of clinical excellence."
        highlightText=""
      />
      <StorySection
        images={[
          `${CLOUDINARY_BASE}/rekha-dental/timeline/timeline3`,
          "https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275545/IMG-20250110-WA0005_-_Copy_-_Copy_px01kj.jpg",
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile3`,
          "https://res.cloudinary.com/dygrzu3sm/image/upload/v1784276404/20260707_125918_owp7ak.jpg",
          `${CLOUDINARY_BASE}/rekha-dental/smiles/smile4`,
          // `${CLOUDINARY_BASE}/rekha-dental/smiles/smile5`,
          // `${CLOUDINARY_BASE}/rekha-dental/events/event1`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event2`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event3`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event4`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event5`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event6`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event7`,
          // `${CLOUDINARY_BASE}/rekha-dental/events/event8`,
          `${CLOUDINARY_BASE}/rekha-dental/events/event9`,
        ]}
        tag="OUR STORY"
        title="A Legacy of Trusted Dental Care"
        paragraphs={[
          "For over 19 years, Rekha Dental has been providing advanced digital dental care with a focus on quality, comfort, and honesty. What started as a single clinic has grown into two modern centers trusted by thousands of patients.",
          "Our team of specialists provides comprehensive dental solutions in a calm, welcoming environment designed to put patients at ease. While we have expanded over the years, our philosophy remains unchanged: every patient deserves personalized attention, uncompromising quality, and a smile they can be proud of.",
        ]}
      />
      <MilestonesSection {...milestonesTimeline} />
      <SectionHeader
        tag="OUR VALUES"
        title="The principles that guide our care."
        subtitle="Trust, compassion, integrity, and excellence form the foundation of every patient experience at Rekha Dental."
      />
      <div className="lg:my-20 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {ourCoreValues.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <AccreditationsSection {...accreditationsData} />
      <OldClinic />
    </div>
  );
}

export default page;
