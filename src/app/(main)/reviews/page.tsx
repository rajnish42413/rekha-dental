import ReviewsSection from "@/components/doctor/reviewSection";
import CtaAction from "@/components/landingPage/ctaAction";
import GoogleReviews from "@/components/reviews/googleReviews";
import ReviewPlatformSection from "@/components/reviews/platformCards";
import { reviewsData } from "@/data/doctor";

import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Patient Reviews | Rekha Dental ",

  description:
    "Read verified patient reviews and experiences at Rekha Dental. Discover why patients trust our specialists for cosmetic dentistry, implants, smile makeovers, and advanced dental care.",

  keywords: [
    "Rekha Dental reviews",
    "patient testimonials",
    "dentist reviews Ghaziabad",
    "best dental clinic reviews",
    "cosmetic dentistry reviews",
    "dental implant reviews",
    "smile makeover testimonials",
    "Google dental reviews",
    "patient experiences",
    "trusted dentist in Ghaziabad",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/reviews`,
  },

  openGraph: {
    title: "Patient Reviews | Rekha Dental ",

    description:
      "Explore real patient experiences, verified testimonials, and trusted dental care reviews from Rekha Dental.",

    url: `${FRONTEND_URL}/reviews`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
        width: 1200,
        height: 630,
        alt: "Patient Reviews - Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Patient Reviews | Rekha Dental",

    description:
      "Read trusted patient reviews and testimonials from Rekha Dental",

    images: [`${CLOUDINARY_BASE}/rekha-dental/aboutBanner`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function Page() {
  return (
    <div>
      <ReviewPlatformSection />
      <GoogleReviews />
      <ReviewsSection data={reviewsData} />
      <CtaAction />
    </div>
  );
}
