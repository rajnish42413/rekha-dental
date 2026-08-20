import StorySection from "@/components/about/storySection";
import ReviewsSection from "@/components/doctor/reviewSection";
import FAQ from "@/components/general/faq";
import SectionHeader from "@/components/general/sectionHeader";
import DentalCostComparison from "@/components/tour/costComparison";
import HowItWorksSection from "@/components/tour/howItWorksSection";
import MedicalTourismBenefitsGrid from "@/components/tour/medicalTourismBenefitsGrid";
import {
  tourismFaqData,
  tourismReviews,
} from "@/data/tourism";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Dental Tourism in India | Affordable Dental Treatment for International Patients | Rekha Dental",

  description:
    "Choose Rekha Dental for affordable dental tourism in India. We provide dental implants, smile makeovers, root canal treatment, cosmetic dentistry, and complete support for international patients with world-class care in Ghaziabad.",

  keywords: [
    "dental tourism in India",
    "dental tourism in Ghaziabad",
    "international dental patients India",
    "affordable dental treatment India",
    "best dental clinic for international patients",
    "dental implants in India",
    "smile makeover India",
    "cosmetic dentistry India",
    "root canal treatment India",
    "full mouth rehabilitation India",
    "dental clinic in Ghaziabad",
    "best dentist in Ghaziabad",
    "Rekha Dental",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/tour`,
  },

  openGraph: {
    title:
      "Dental Tourism in India | Affordable Dental Treatment for International Patients | Rekha Dental",

    description:
      "Choose Rekha Dental for affordable dental tourism in India. We provide dental implants, smile makeovers, root canal treatment, cosmetic dentistry, and complete support for international patients with world-class care in Ghaziabad.",

    url: `${FRONTEND_URL}/tour`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
        width: 1200,
        height: 630,
        alt: "Dental Tourism in India | Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dental Tourism in India | Affordable Dental Treatment for International Patients | Rekha Dental",

    description:
      "Choose Rekha Dental for affordable dental tourism in India. We provide dental implants, smile makeovers, root canal treatment, cosmetic dentistry, and complete support for international patients with world-class care in Ghaziabad.",

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
        tag="Why India"
        title="The world comes to India for dentistry."
        subtitle="Premium materials, exceptionally trained clinicians, transparent pricing — refined into a single destination."
      />
      <StorySection
        images={[
          `${CLOUDINARY_BASE}/rekha-dental/events/event2`,
          "https://res.cloudinary.com/dygrzu3sm/image/upload/v1784276404/20260707_125918_owp7ak.jpg",
         
        ]}
        tag="WHAT IS DENTAL TOURISM"
        title="A passport to a healthier smile."
        paragraphs={[
          "At Rekha Dental, we make world-class dental care accessible through our comprehensive dental tourism program. From your first online consultation to your final follow-up, our team manages every detail with personalized treatment plans, transparent pricing, travel assistance, and dedicated support, ensuring a smooth and stress-free experience.",
          "Using advanced technologies such as digital dentistry, CBCT imaging, robotic scanning, and laser treatments, our experienced specialists deliver precise, safe, and high-quality care. Whether you need dental implants, veneers, smile makeovers, or full-mouth rehabilitation, we combine clinical excellence with exceptional value—helping you return home with a healthier, more confident smile and lasting memories of India.",
        ]}
      />
      <MedicalTourismBenefitsGrid />
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
