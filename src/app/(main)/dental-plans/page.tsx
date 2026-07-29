import PlansOffersContainer from "@/components/dental-plans/plansOffersContainer";
import FAQ from "@/components/general/faq";
import PillarCard from "@/components/general/pillarCard";
import SectionHeader from "@/components/general/sectionHeader";
import { dentalPlanFaqs, whyChooseRekhaDental } from "@/data/dentalPlans";

import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Dental Care Plans | Affordable Smile Membership",

  description:
    "Discover affordable dental care plans designed to keep your smile healthy with preventive treatments and exclusive benefits.",
  keywords: [
    "dental plans",
    "dental membership",
    "dental packages",
    "preventive dentistry",
    "family dental plan",
    "oral care plan",
    "Rekha Dental",
    "dental clinic Ghaziabad",
    "affordable dentist",
    "annual dental plan",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/dental-plans`,
  },

  openGraph: {
    title: "Dental Care Plans | Affordable Smile Membership",

    description:
      "Discover affordable dental care plans designed to keep your smile healthy with preventive treatments and exclusive benefits.",

    url: `${FRONTEND_URL}/dental-plans`,

    siteName: "Rekha Dental ",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/banner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Membership Plans",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Dental Care Plans | Affordable Smile Membership",

    description:
      "Discover affordable dental care plans designed to keep your smile healthy with preventive treatments and exclusive benefits.",

    images: [`${CLOUDINARY_BASE}/rekha-dental/banner`],
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
        tag="DENTAL HEALTH PLANS AND OFFERS"
        title="Smart savings. Better oral health."
        subtitle="Choose a membership plan and explore offers with exclusive benefits, discounts, and priority dental care."
      />
      <PlansOffersContainer />
      <SectionHeader
        tag="WHY CHOOSE REKHA DENTAL"
        title="Trusted care for every smile."
        subtitle="Combining clinical excellence, advanced technology, and compassionate care to deliver exceptional dental experiences."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {whyChooseRekhaDental.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <div className="px-6 lg:px-10 flex items-center justify-center flex-col my-16 max-w-7xl mx-auto">
        <SectionHeader tag="FAQ" title="Quietly answered." />
        <FAQ data={dentalPlanFaqs} />
      </div>
    </div>
  );
}

export default page;
