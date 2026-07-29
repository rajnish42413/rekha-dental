import CenterCard from "@/components/appointment/centerCard";
import PillarCard from "@/components/general/pillarCard";
import SectionHeader from "@/components/general/sectionHeader";
import { appointmentSteps, centers } from "@/data/appointment";
import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Best Dentist Near Me in Ghaziabad | Rekha Dental",

  description:
    "Looking for the best dentist near you? Rekha Dental offers expert dental care, cosmetic dentistry, implants, and smile makeovers.",

  keywords: [
    "dentist near me",
    "best dentist near me",
    "dental clinic near me",
    "dentist Ghaziabad",
    "Raj Nagar Extension dentist",
    "root canal near me",
    "dental implants near me",
    "cosmetic dentist",
    "emergency dentist",
    "Rekha Dental",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/best-dentist-near-me`,
  },

  openGraph: {
    title: "Best Dentist Near Me in Ghaziabad | Rekha Dental",

    description:
      "Looking for the best dentist near you? Rekha Dental offers expert dental care, cosmetic dentistry, implants, and smile makeovers.",
  
    url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275216/20260202_165005_gqw0fw.jpg`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275216/20260202_165005_gqw0fw.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Dentist Near Me in Ghaziabad | Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Dentist Near Me in Ghaziabad | Rekha Dental",

    description:
      "Looking for the best dentist near you? Rekha Dental offers expert dental care, cosmetic dentistry, implants, and smile makeovers.",
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
        tag="Our Centers"
        title="Reserve your visit"
        subtitle="Choose the nearest Rekha Dental centre, explore its specialties, and book a private consultation in minutes."
      />
      <div className="mx-auto my-10 max-w-7xl grid grid-cols-1 gap-8 lg:my-16 lg:grid-cols-2 lg:px-10 px-8">
        {centers.map((center) => (
          <CenterCard key={center.id} center={center} />
        ))}
      </div>
      <div className="lg:my-16 my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-10">
        {appointmentSteps.map((item) => (
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
