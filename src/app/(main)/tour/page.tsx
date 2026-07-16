import StorySection from "@/components/about/storySection";
import ReviewsSection from "@/components/doctor/reviewSection";
import FAQ from "@/components/general/faq";
import PillarCard from "@/components/general/pillarCard";
import SectionHeader from "@/components/general/sectionHeader";
import DentalCostComparison from "@/components/tour/costComparison";
import HowItWorksSection from "@/components/tour/howItWorksSection";
import { medicalTourismBenefits, tourismFaqData, tourismReviews } from "@/data/tourism";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Dental Tourism in India | Rekha Dental Clinic Ghaziabad",

  description:
    "Discover premium dental tourism services at Rekha Dental Clinic in India. International patients trust our specialists for affordable dental implants, smile makeovers, cosmetic dentistry, and advanced restorative treatments with world-class care.",

  keywords: [
    "dental tourism India",
    "medical tourism India",
    "affordable dental treatment",
    "dental implants India",
    "cosmetic dentistry India",
    "international dental patients",
    "smile makeover India",
    "dentist in Ghaziabad",
    "Rekha Dental Clinic",
    "advanced dental care India",
    "dental vacation India",
    "world-class dentistry",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/tour`,
  },

  openGraph: {
    title:
      "Dental Tourism in India | Rekha Dental Clinic Ghaziabad",

    description:
      "Experience world-class dental care in India with internationally trusted specialists, transparent pricing, and premium patient experiences.",

    url: `${FRONTEND_URL}/tour`,

    siteName: "Rekha Dental Clinic",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/tourism`,
        width: 1200,
        height: 630,
        alt: "Dental Tourism at Rekha Dental Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dental Tourism in India | Rekha Dental Clinic Ghaziabad",

    description:
      "Explore affordable, precision-driven dental treatments in India trusted by international patients worldwide.",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/tourism`,
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
        tag="Why India"
        title="The world comes to India for dentistry."
        subtitle="Premium materials, world-trained clinicians, transparent pricing — refined into a single destination."
      />
      <StorySection
        images={[`${CLOUDINARY_BASE}/rekha-dental/events/event1`,`${CLOUDINARY_BASE}/rekha-dental/events/event2`]}
        tag="WHAT IS DENTAL TOURISM"
        title="A passport to a healthier smile."
        paragraphs={[
          "At Rekha Dental Clinic, we make world-class dental care accessible through our comprehensive dental tourism program. From your first online consultation to your final follow-up, our team manages every detail with personalized treatment plans, transparent pricing, travel assistance, and dedicated support, ensuring a smooth and stress-free experience.",
          "Using advanced technologies such as digital dentistry, CBCT imaging, robotic scanning, and laser treatments, our experienced specialists deliver precise, safe, and high-quality care. Whether you need dental implants, veneers, smile makeovers, or full-mouth rehabilitation, we combine clinical excellence with exceptional value—helping you return home with a healthier, more confident smile and lasting memories of India.",
        ]}
      />
      <div className="lg:mt-20 mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:mx-10 mx-6">
        {medicalTourismBenefits.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <DentalCostComparison />
      <HowItWorksSection />
      <ReviewsSection
        tag="PATIENT STORIES"
        title="What our international patients say."
        subtitle=""
        data={tourismReviews}
      />
      <div className="max-w-7xl flex flex-col justify-center items-center mx-auto px-6 lg:px-10 mb-10">
        {" "}
        <SectionHeader tag="FAQ" title="Quietly answered." />{" "}
        <FAQ data={tourismFaqData} />{" "}
      </div>
    </div>
  );
}

export default page;
