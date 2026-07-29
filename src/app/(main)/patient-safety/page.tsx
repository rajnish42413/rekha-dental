import PillarCard from "@/components/general/pillarCard";
import SectionHeader from "@/components/general/sectionHeader";
import { advancedDentalTechnologies, patientFriendlyCare, sterilizationProcess } from "@/data/dentalPlans";
import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Patient Safety & Sterilization | Rekha Dental",

  description:
    "Learn about Rekha Dental's strict sterilization, infection control protocols, and commitment to patient safety.",

  keywords: [
    "patient safety",
    "dental sterilization",
    "infection control",
    "safe dental clinic",
    "sterilization protocol",
    "dental hygiene",
    "COVID safety",
    "Rekha Dental",
    "safe dentistry",
    "dentist Ghaziabad",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/patient-safety`,
  },

  openGraph: {
    title: "Patient Safety & Sterilization | Rekha Dental",

    description:
      "Learn about Rekha Dental's strict sterilization, infection control protocols, and commitment to patient safety.",
     url: `${FRONTEND_URL}/patient-safety`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
        width: 1200,
        height: 630,
        alt: "Patient Safety & Sterilization | Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Patient Safety & Sterilization | Rekha Dental",

    description:
      "Learn about Rekha Dental's strict sterilization, infection control protocols, and commitment to patient safety.",
  
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
    <div className="pt-10">
      <SectionHeader
        tag="PATIENT-FIRST APPROACH"
        title="Comfortable care designed around you."
        subtitle="From personalized treatment plans to a welcoming environment, we ensure every patient feels heard, supported, and confident throughout their dental journey."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {patientFriendlyCare.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <SectionHeader
        tag="ADVANCED STERILIZATION"
        title="Safety and hygiene without compromise."
        subtitle="Our rigorous sterilization protocols and infection-control standards ensure a clean, safe, and worry-free experience for every patient."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {sterilizationProcess.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <SectionHeader
        tag="MODERN DENTAL TECHNOLOGY"
        title="Precision dentistry powered by innovation."
        subtitle="We utilize cutting-edge diagnostic tools and advanced treatment technologies to deliver accurate, efficient, and predictable dental care."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {advancedDentalTechnologies.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
