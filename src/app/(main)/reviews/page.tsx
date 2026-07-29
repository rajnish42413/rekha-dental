import ReviewsSection from "@/components/doctor/reviewSection";
import CtaAction from "@/components/landingPage/ctaAction";
import GoogleReviews from "@/components/reviews/googleReviews";
import ReviewPlatformSection from "@/components/reviews/platformCards";
import { reviewsData } from "@/data/doctor";

import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Patient Reviews | Rekha Dental Ghaziabad",

  description:
    "Read genuine patient reviews and testimonials about Rekha Dental's advanced treatments, caring doctors, and exceptional service.",

  keywords: [
    "patient reviews",
    "dentist reviews",
    "best dental clinic",
    "Google reviews",
    "testimonial",
    "dentist Ghaziabad",
    "Rekha Dental",
    "patient experience",
    "smile makeover reviews",
    "dental clinic feedback",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/reviews`,
  },

  openGraph: {
    title: "Patient Reviews | Rekha Dental Ghaziabad",

    description:
      "Read genuine patient reviews and testimonials about Rekha Dental's advanced treatments, caring doctors, and exceptional service.",

    url: `${FRONTEND_URL}/reviews`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
        width: 1200,
        height: 630,
        alt: "Patient Reviews | Rekha Dental Ghaziabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Patient Reviews | Rekha Dental Ghaziabad",

    description:
      "Read genuine patient reviews and testimonials about Rekha Dental's advanced treatments, caring doctors, and exceptional service.",

    images: [
      `https://res.cloudinary.com/dygrzu3sm/image/upload/v1781084168/rekha-dental/academy-new/academy-new4.jpg`,
    ],
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
